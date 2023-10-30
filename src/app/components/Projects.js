import React from "react";
import { useGetProjectsQuery } from "../redux/features/api/apiSlice";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const { data: projects, isLoading, error } = useGetProjectsQuery();

  const allProjects = projects?.totalItems;
  console.log(allProjects);
  if (isLoading) {
    return (
      <span className="loading loading-infinity loading-lg  mx-auto"></span>
    );
  }

  if (error) {
    return <p className="text-danger text-center">Something went wrong!</p>;
  }

  return (
    <div>
      <div className="portfolio_section">
        <h1>Portfolio</h1>

        <div class="container portfolio_card_container mx-auto">
          {allProjects?.map((item) => (
            <>
              <div className="card w-80 bg-base-100 shadow-xl">
                <figure>
                  <Image
                    src={item.image}
                    width={500}
                    height={500}
                    alt={item.name}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.name}</h2>
                  <p>Category: {item.category}</p>
                  <div className="card-actions justify-end mt-3">
                    <Link
                      href={`${item.externalLink}`}
                      target="_blank"
                      className="btn btn-primary"
                    >
                      Live site link
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
