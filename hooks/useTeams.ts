import { useState, useEffect } from "react";

interface User {
  login: {
    uuid: string;
  };
  picture: {
    large: string;
  };
  name: {
    first: string;
    last: string;
  };
  email: string;
  location: {
    city: string;
    country: string;
  };
  role: string;
  socialMedia: {
    facebook: string;
    twitter: string;
  };
}

const roles = [
  "Pastry Chef",
  "Bakery Manager",
  "Culinary Instructor",
  "Head Baker",
  "Patisserie Specialist",
];

const socialMediaLinks = [
  {
    facebook:"facebook.com/pastrychef",
    twitter: "@pastrychef",
  },
  {
    facebook:"facebook.com/bakerymanager",
    twitter: "@bakerymanager",
  },
  {
    facebook:"facebook.com/culinaryinstructor",
    twitter: "@culinaryinstructor",    
  },
  {
    facebook:"facebook.com/headbaker",
    twitter: "@headbaker",
  },
  {
    facebook:"facebook.com/patisseriespecialist",
    twitter: "@patisseriespecialist",
  },
];

const useTeams = (url: string) => {
  const [teams, setTeams] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const combinedData = data.results.map((user: any, index: number) => ({
          ...user,
          role: roles[index % roles.length],
          socialMedia: socialMediaLinks[index % socialMediaLinks.length],
        }));
        setTeams(combinedData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [url]);

  return { teams, loading, error };
};

export default useTeams;
