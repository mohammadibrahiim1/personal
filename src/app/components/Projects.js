import React from "react";
import { useGetProjectsQuery } from "../redux/features/api/apiSlice";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const { data: projects, isLoading, error } = useGetProjectsQuery();

  const allProjects = projects?.totalItems;
  console.log(allProjects);
  if (isLoading) {
    return <div className="loader"></div>;
  }

  if (error) {
    return <p className="text-danger text-center">Something went wrong!</p>;
  }

  return (
    <div id="myWork">
      <div className="portfolio_section">
        <h1>My Portfolio</h1>

        <div className="portfolio_card_container">
          {allProjects?.map((item) => (
            <>
              <div class="group relative block h-96 bg-black cursor-pointer">
                <img
                  alt="Developer"
                  src={item.image}
                  class="absolute inset-0 h-full w-full object-cover opacity-25 transition-opacity group-hover:opacity-50"
                />

                <div class="relative p-4 sm:p-6 lg:p-8">
                  <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                    {item.category}
                  </p>

                  <p class="text-xl font-bold text-white sm:text-2xl">
                    {item.name}
                  </p>

                  <div class="mt-32 sm:mt-48 lg:mt-64">
                    <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <a
                        href={`${item.externalLink}`}
                        class="text-sm text-white"
                      >
                        Website
                      </a>
                    </div>
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

      <div className="allProjects_section">
        <h1>Other Projects</h1>

        <div className="allProjects_card_container">
          {allProjects?.map((item) => (
            <>
              <article className="rounded-none border border-gray-700 bg-gray-800 p-4">
                <div className="flex items-center gap-4">
                  <img
                    alt="Developer"
                    src={item.image}
                    className="h-16 w-16 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="text-lg font-medium text-white">
                      {item.name}
                    </h3>

                    <div className="flow-root">
                      <ul className="-m-1 flex flex-wrap">
                        <li className="p-1 leading-none">
                          <a
                            href="https://www.linkedin.com/in/mohammad-ibrahim-080a51257/"
                            className="text-xs font-medium text-gray-300"
                          >
                            Linkedin
                          </a>
                        </li>

                        <li className="p-1 leading-none">
                          <a
                            href={`${item.githubLink}`}
                            className="text-xs font-medium text-gray-300"
                          >
                            GitHub
                          </a>
                        </li>

                        <li className="p-1 leading-none">
                          <a
                            href={`${item.externalLink}`}
                            className="text-xs font-medium text-gray-300"
                          >
                            Website
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <ul className="mt-4 space-y-2">
                  <li>
                    <a
                      href="#"
                      className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
                    >
                      <strong className="font-medium text-white">
                        Project Description
                      </strong>

                      <p className="mt-1 text-xs font-medium text-gray-300">
                        {item.about.slice(0, 80)}
                      </p>
                    </a>
                  </li>

                  <li>
                    <div className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                      <strong className="font-medium text-white">Tools</strong>

                      <p className="mt-1 text-xs font-medium text-gray-300">
                        {item?.tools?.map((tool) => (
                          <>
                            <span className="me-5">{tool.t1}</span>
                          </>
                        ))}
                      </p>
                    </div>
                  </li>
                </ul>
              </article>
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
