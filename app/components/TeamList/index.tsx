"use client";
import React from "react";
import useTeams from "@/hooks/useTeams";
import Title from "@/components/Title";

const TeamList: React.FC = () => {
  const { teams, loading, error } = useTeams(
    "https://randomuser.me/api/?nat=gb&results=5"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className=" lg:text-sm md:text-xs text-center uppercase text-gray-500">
          Teams
        </h2>
        <Title>
          Our <span className=" highlight">People.</span>
        </Title>
        <div className=" mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8">
          <ul>
            {teams.map((user) => (
              <li
                key={user.login.uuid}
                className="mb-4 p-4 border rounded shadow-md"
              >
                <img
                  src={user.picture.thumbnail}
                  alt={`${user.name.first} ${user.name.last}`}
                  className="w-16 h-16 rounded-full"
                />
                <p>
                  <strong>Name:</strong>{" "}
                  {`${user.name.first} ${user.name.last}`}
                </p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>Role:</strong> {user.role}
                </p>
                <p>
                  <strong>Location:</strong>{" "}
                  {`${user.location.city}, ${user.location.country}`}
                </p>
                <p>
                  <strong>Social Media:</strong>
                </p>
                <ul className="list-disc pl-5">
                  <li>Twitter: {user.socialMedia.twitter}</li>
                  <li>LinkedIn: {user.socialMedia.linkedin}</li>
                  <li>Instagram: {user.socialMedia.instagram}</li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TeamList;
