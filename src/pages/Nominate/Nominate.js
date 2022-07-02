import React, { useState, useEffect } from "react";
import Heading from "../../ui/heading/Heading";
import WinnerTabMenu from "../../components/winner-tab-menu/WinnerTabMenu";
import Button from "../../ui/button/Button";
import NominateForm from "../../components/nominate-form/NominateForm";
// Import React FilePond
import { FilePond, File, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// FilePond Plugins

import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import FilePondPluginImageValidateSize from "filepond-plugin-image-validate-size";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginFileRename from "filepond-plugin-file-rename";

// FilePond Register the plugins
registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImageValidateSize,
  FilePondPluginFileValidateType,
  FilePondPluginFileRename
);

function Category() {
  const [files, setFiles] = useState([]);
  return (
    <section
      style={{
        backgroundImage: `url(http://192.168.100.127:3000/uploads/images/nominate-bg.jpeg`,
      }}
      className="bg-blend-darken bg-cover  bg-top flex flex-cols  bg-repeat-y justify-start md:justify-center py-16 md:py-20 items-start px-2 md:px-10 "
    >
      <div className="w-full max-w-6xl gap-5 flex justify-center flex-col">
        <div className="flex justify-center items-center text-start md:text-center">
          <div className="mb-10 gap-3 md:gap-6 grid grid-cols-1 w-full px-10 md:px-0 ">
            <Heading heading="Nominate Now" color="white" position="center" />
            <h2 className="text-white text-base md:text-lg lg:text-xl font-medium">
              All applicants must be eligible NBAM Members
            </h2>
            <div className="flex items-start md:items-center md:justify-center">
              <Button title="become a member" />
            </div>
          </div>
        </div>

        <div className="grid  grid-cols-1 gap-5 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 rounded-xl p-7 md:p-20 border border-lightgray border-opacity-10">
          <div>
            <FilePond
              files={files}
              instantUpload={false}
              allowMultiple={false}
              acceptedFileTypes={"application/pdf"}
              maxFiles={1}
              allowFileRename={true}
              // fileRenameFunction={(file) => fileRenameFunction(file)}
              // onprocessfileprogress={(file, progress) => {
              //   if (progress === 1) {
              //     setSelectedImage(file.filename);
              //     setRemoved(false);
              //   }
              // }}
              // server={${process.env.REACT_APP_API_URL}/uploads/images/jpg}
              name="files"
              labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
            />
            <span className="text-xs text-white">
              You are required to upload filled application form with relevant
              documents
            </span>
          </div>
          <div className="flex font-medium uppercase items-center justify-center">
            <p>OR</p>
          </div>
          <NominateForm />
        </div>
      </div>
    </section>
  );
}

export default Category;
