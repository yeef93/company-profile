"use client";
import React from "react";
import useTeams from "@/hooks/useTeams";
import Title from "@/components/Title";
import Image from "next/image";
import teamHover from "@/public/assets/team/teamHover.webp";

function Teams() {
  const { teams, loading, error } = useTeams(
    "https://randomuser.me/api/?nat=gb&results=4"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="bg-white ">
      <div className="px-4 mx-auto max-w-screen-xl lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className=" lg:text-sm md:text-xs text-center uppercase text-gray-500">
            Teams
          </h2>
          <Title>
            Our Passionate Team of{" "}
            <span className=" highlight">Culinary Masters</span>
          </Title>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-4">
          {teams.map((team) => (
            <a
              key={team.login.uuid}
              className="group block overflow-hidden border rounded-xl  pb-8"
            >
              <div className="relative h-[350px] sm:h-[450px]">
                <Image
                  className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                  src={team.picture.large}
                  alt={team.name.first}
                  width={100}
                  height={100}
                />
                <Image
                  className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                  src={team.picture.large}
                  alt={team.name.first}
                  width={100}
                  height={100}
                />
              </div>
              <div className=" p-4">
                <div className="relative bg-white pt-3">
                  <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    {team.role}
                  </h3>
                  <p className="mt-1.5 tracking-wide text-gray-900 font-semibold">{`${team.name.first} ${team.name.last}`}</p>
                </div>
                <ul className="flex space-x-4 sm:mt-0">
                  <li>
                    <a
                      href={team.socialMedia.facebook}
                      className="text-gray-500 hover:text-gray-900"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href={team.socialMedia.twitter}
                      className="text-gray-500 hover:text-gray-900"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Teams;
