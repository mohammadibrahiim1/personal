import React from "react";
import { useGetProjectsQuery } from "../redux/features/api/apiSlice";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const { data: projects, isLoading, error } = useGetProjectsQuery();

  const allProjects = projects?.totalItems;
  console.log(allProjects);
  if (isLoading) {
    return <div class="loader"></div>;
  }

  if (error) {
    return <p className="text-danger text-center">Something went wrong!</p>;
  }

  return (
    <div id="myWork">
      <div className="portfolio_section">
        <h1>My Portfolio</h1>

        <div class="portfolio_card_container">
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
                      className="btn btn-warning"
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

      <div className="allProjects_section">
        <h1>Other Projects</h1>

        <div class="allProjects_card_container">
          {allProjects?.map((item) => (
            <>
              <div class="plan">
                <div class="inner">
                  <span class="pricing">
                    <span>
                      <small>{item.category}</small>
                    </span>
                  </span>
                  <p class="title">{item.name}</p>
                  <p class="info">{item.about.slice(0, 60)}</p>
                  {item?.tools?.map((tool) => (
                    <>
                      <ul class="features">
                        <li>
                          <span class="icon">
                            <svg
                              height="24"
                              width="24"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M0 0h24v24H0z" fill="none"></path>
                              <path
                                fill="currentColor"
                                d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                              ></path>
                            </svg>
                          </span>
                          <span>
                            {/* {tool} */}
                            <strong>20</strong> team members
                          </span>
                        </li>
                      </ul>
                    </>
                  ))}
                  <div class="action">
                    <a
                      class="button"
                      href={`${item.externalLink}`}
                      target="_blank"
                    >
                      Live view
                    </a>
                  </div>
                </div>
              </div>
              {/* <div className="card w-80 bg-base-100 shadow-xl">
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
                      className="btn btn-warning"
                    >
                      Live site link
                    </Link>
                  </div>
                </div>
              </div> */}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
