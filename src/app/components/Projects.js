import React from "react";
import { useGetProjectsQuery } from "../redux/features/api/apiSlice";
import Image from "next/image";

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
              <div class="card">
                <div class="content">
                  <div class="imgBx">
                    <Image
                      width={500}
                      height={500}
                      alt="Picture of the author"
                      src={item.image}
                    />
                  </div>
                  <div class="contentBx">
                    <h3>
                      Lion
                      <br />
                      <span>Happy Birthday</span>
                    </h3>
                  </div>
                </div>
                <ul class="sci">
                  <li>
                    <a href="">happy</a>
                  </li>
                  <li>
                    <a href="">birth</a>
                  </li>
                  <li>
                    <a href="">day</a>
                  </li>
                </ul>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
