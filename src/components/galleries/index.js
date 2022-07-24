import { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { saveAs } from "file-saver";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Index() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const downloadImage = (pic) => {
    saveAs(pic, "test.jpg"); // Put your image url here.
  };

  let [categories] = useState([
    {
      name: "Gala Event 2018",
      pictures: [
        {
          uri: "https://maldives.net.mv/wp-content/uploads/2018/12/batch_b_0Q7IfldQAW00wqfRbjLhriT62.jpg",
          description: "This awards was given to him",
        },
        {
          uri: "https://maldives.net.mv/wp-content/uploads/2018/12/batch_b_0Q7IfldQAW00wqfRbjLhriT62.jpg",
          description: "This awards was given to him",
        },
        {
          uri: "https://static.secure.website/wscfus/8075275/uploads/scan0013.jpg",
          description: "This awards was given to him",
        },
        {
          uri: "https://maldives.net.mv/wp-content/uploads/2018/12/batch_b_0Q7IfldQAW00wqfRbjLhriT62.jpg",
          description: "This awards was given to him",
        },
        {
          uri: "https://maldives.net.mv/wp-content/uploads/2018/12/batch_b_0Q7IfldQAW00wqfRbjLhriT62.jpg",
          description: "This awards was given to him",
        },
        {
          uri: "https://maldives.net.mv/wp-content/uploads/2018/12/batch_b_0Q7IfldQAW00wqfRbjLhriT62.jpg",
          description: "This awards was given to him",
        },
        {
          uri: "https://maldives.net.mv/wp-content/uploads/2018/12/batch_b_0Q7IfldQAW00wqfRbjLhriT62.jpg",
          description: "This awards was given to him",
        },
        {
          uri: "https://maldives.net.mv/wp-content/uploads/2018/12/batch_b_0Q7IfldQAW00wqfRbjLhriT62.jpg",
          description: "This awards was given to him",
        },
        {
          uri: "https://static.secure.website/wscfus/8075275/uploads/scan0013.jpg",
          description: "This awards was given to him",
        },
        {
          uri: "https://maldives.net.mv/wp-content/uploads/2018/12/batch_b_0Q7IfldQAW00wqfRbjLhriT62.jpg",
          description: "This awards was given to him",
        },
        {
          uri: "https://maldives.net.mv/wp-content/uploads/2018/12/batch_b_0Q7IfldQAW00wqfRbjLhriT62.jpg",
          description: "This awards was given to him",
        },
        {
          uri: "https://maldives.net.mv/wp-content/uploads/2018/12/batch_b_0Q7IfldQAW00wqfRbjLhriT62.jpg",
          description: "This awards was given to him",
        },
      ],
    },
    {
      name: "Gala Event 2019",
      pictures: [
        {
          uri: "https://maldives.net.mv/wp-content/uploads/2018/12/batch_b_0Q7IfldQAW00wqfRbjLhriT62.jpg",
          description: "This awards was given to him",
        },
        {
          uri: "https://maldives.net.mv/wp-content/uploads/2018/12/batch_b_0Q7IfldQAW00wqfRbjLhriT62.jpg",
          description: "This awards was given to him",
        },
        {
          uri: "https://maldives.net.mv/wp-content/uploads/2018/12/batch_b_0Q7IfldQAW00wqfRbjLhriT62.jpg",
          description: "This awards was given to him",
        },
      ],
    },
  ]);

  return (
    <div className=" w-screen flex-col max-w-7xl px-2 py-16 sm:px-0">
      <Tab.Group>
        <div className="flex justify-center items-center">
          <Tab.List className="flex space-x-6 w-full sm:w-1/2 rounded-xl bg-blue-900/20 p-1">
            {categories.map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full  py-2 uppercase  font-medium leading-5 text-blue-700",
                    " rounded-full text-xs lg:text-sm ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-primary text-white shadow ring-primary "
                      : "text-blue-100 hover:bg-white/[0.12] hover:bg-lightPrimary border-2 border-primary text-primary"
                  )
                }
              >
                {category.name}
              </Tab>
            ))}
          </Tab.List>
        </div>

        <Tab.Panels className="mt-6">
          {categories.map((category) => (
            <Tab.Panel
              key={category}
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <div className="grid sm:grid-cols-1 sm:px-5 md:px-20 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {category.pictures.map((pic) => (
                  <div
                    data-aos="fade-up"
                    className="border border-primary rounded-3xl"
                  >
                    <img className="rounded-t-2xl" src={pic.uri} />
                    <div className="p-5 text-sm rounded-b-2xl flex justify-between items-center">
                      <p>{pic.description}</p>
                      <a
                        onClick={() => downloadImage(pic.uri)}
                        className="cursor-pointer text-primary hover:brightness-110"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
