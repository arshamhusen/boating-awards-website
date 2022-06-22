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
    <section className="flex flex-cols justify-start h-[90vh] items-start px-10 mb-10">
      <div className="w-full gap-5">
        <div className="mb-10 gap-3 grid grid-cols-1">
          <Heading heading="Nominate Now" />
          <h2 className="text-gray font-medium">
            All applicants must be eligible NBAM Members
          </h2>
          <Button title="become a member" />
        </div>
        <div className="grid  grid-cols-1 gap-5">
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
            <span className="text-xs text-gray">
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
