import { useState, useEffect } from "react";

interface User {
  login: {
    uuid: string;
  };
  picture: {
    thumbnail: string;
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
    twitter: string;
    linkedin: string;
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
    twitter: "@pastrychef",
    linkedin: "linkedin.com/in/pastrychef",
    instagram: "instagram.com/pastrychef",
  },
  {
    twitter: "@bakerymanager",
    linkedin: "linkedin.com/in/bakerymanager",
    instagram: "instagram.com/bakerymanager",
  },
  {
    twitter: "@culinaryinstructor",
    linkedin: "linkedin.com/in/culinaryinstructor",
    instagram: "instagram.com/culinaryinstructor",
  },
  {
    twitter: "@headbaker",
    linkedin: "linkedin.com/in/headbaker",
    instagram: "instagram.com/headbaker",
  },
  {
    twitter: "@patisseriespecialist",
    linkedin: "linkedin.com/in/patisseriespecialist",
    instagram: "instagram.com/patisseriespecialist",
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
