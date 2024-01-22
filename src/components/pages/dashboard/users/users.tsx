/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";

const Users = () => {
  const [file, setFile] = useState<any>();
  function handleChange(e: any) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div>
      <div className=" h-screen w-screen sm:px-8 md:px-16 sm:py-8">
        <main className="container mx-auto max-w-screen-lg h-full">
          <article
            aria-label="File Upload Modal"
            className="relative h-full flex flex-col bg-white shadow-xl rounded-md"
          >
            <section className="h-full overflow-auto p-8 w-full h-full flex flex-col">
              <header className="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center">
                <p className="mb-3 font-semibold text-gray-900 flex flex-wrap justify-center">
                  <span>Drag and drop your</span>&nbsp;
                  <span>files anywhere or</span>
                </p>
                <input
                  id="hidden-input"
                  type="file"
                  multiple
                  className="hidden"
                />
                <input type="file" onChange={handleChange} />
              </header>

              <h1 className="pt-8 pb-3 font-semibold sm:text-lg text-gray-900">
                To Upload
              </h1>

              <ul id="gallery" className="flex flex-1 flex-wrap -m-1">
                <li
                  id="empty"
                  className="h-full w-full text-center flex flex-col items-center justify-center items-center"
                >
                  <img
                    className="mx-auto w-32"
                    src={
                      file
                        ? file
                        : "https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png"
                    }
                    alt="no data"
                  />
                  {!file && (
                    <span className="text-small text-gray-500">
                      No files selected
                    </span>
                  )}
                </li>
              </ul>
            </section>

            <footer className="flex justify-end px-8 pb-8 pt-4">
              <button
                id="submit"
                className="rounded-sm px-3 py-1 bg-blue-700 hover:bg-blue-500 text-white focus:shadow-outline focus:outline-none"
              >
                Upload now
              </button>
              <button
                id="cancel"
                className="ml-3 rounded-sm px-3 py-1 hover:bg-gray-300 focus:shadow-outline focus:outline-none"
              >
                Cancel
              </button>
            </footer>
          </article>
        </main>
      </div>
    </div>
  );
};

export default Users;
