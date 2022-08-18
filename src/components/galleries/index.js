import { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { saveAs } from "file-saver";
import Axios from "axios";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import parse from "html-react-parser";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Index() {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  function closeModal() {
    setModalOpen(false);
  }

  function imageClickHandler(media) {
    setModalOpen(true);
    setImage(media.media_URI);
    setDescription(media.description);
  }

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const downloadImage = (pic) => {
    saveAs(pic, "test.jpg"); // Put your image url here.
  };

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URL}/website/gallery`, {
      headers: {
        api_key: process.env.REACT_APP_API_KEY,
        api_secret: process.env.REACT_APP_API_SECRET,
      },
    }).then((res) => {
      if (res.status === 200) {
        setGallery(res.data);
        setLoading(false);
      } else {
        setLoading(true);
      }
    });
  }, []);

  return (
    <div className="w-screen flex-col max-w-7xl py-8 px-10 lg:px-0 lg:py-10 sm:px-0">
      <Tab.Group>
        <div className="flex justify-center items-center">
          <Tab.List className="flex space-x-2 lg:space-x-6 w-full sm:w-1/2 rounded-xl bg-blue-900/20 p-1">
            {gallery.map((gallery) => (
              <Tab
                key={gallery}
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
                {gallery.heading}
              </Tab>
            ))}
          </Tab.List>
        </div>

        <Tab.Panels className="mt-8 lg:mt-8">
          {gallery.map((gallery) => (
            <Tab.Panel
              key={gallery}
              className={classNames(
                "rounded-xl bg-white p-0 lg:p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <div className="grid sm:grid-cols-1 sm:px-5 md:px-20 md:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-5">
                {gallery.media.map((media) => (
                  <div
                    onClick={() => imageClickHandler(media)}
                    style={{
                      backgroundImage: `url('${media.media_URI}')`,
                    }}
                    className="min-h-[30vh] bg-cover hover:cursor-pointer hover:brightness-100 brightness-95 rounded-xl bg-no-repeat bg-bottom flex flex-col justify-start md:justify-center pt-40 lg:pt-0 item-start lg:items-center"
                    data-aos="fade-up"
                  ></div>
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
      <Transition appear show={modalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full  max-w-7xl max-h-[80vh] overflow-hidden bg-cover bg-right transform rounded-2xl   text-left flex justify-center items-center flex-col align-middle transition-all">
                  <div>
                    <img
                      className=" lg:min-h-[70vh] min-h-0 rounded-2xl"
                      src={image}
                    />
                  </div>
                  <div>
                    {description && description != null && (
                      <p className="text-white text-sm lg:text-base text-center  pt-4">
                        {parse(description)}
                      </p>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
