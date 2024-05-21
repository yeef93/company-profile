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

const description = [
  "With over 15 years of experience in the culinary industry, John leads our team of talented chefs.",
  "Specializes in creating exquisite pastries and desserts, bringing creativity and innovation to our curriculum.",
  "Certified barista with a passion for coffee. He shares his expertise and knowledge with our students, helping them master the art of coffee making.",
  "Background in international cuisine and a passion for teaching. She brings a wealth of knowledge to our culinary program.",
  "Accomplished sous chef with a talent for mentoring students and helping them refine their cooking techniques.",
];

const socialMediaLinks = [
  {
    facebook: "facebook.com/pastrychef",
    twitter: "@pastrychef",
  },
  {
    facebook: "facebook.com/bakerymanager",
    twitter: "@bakerymanager",
  },
  {
    facebook: "facebook.com/culinaryinstructor",
    twitter: "@culinaryinstructor",
  },
  {
    facebook: "facebook.com/headbaker",
    twitter: "@headbaker",
  },
  {
    facebook: "facebook.com/patisseriespecialist",
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
