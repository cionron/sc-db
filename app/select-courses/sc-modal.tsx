"use client";

import SCAddForm from "./sc-add-form";

export default function SCModal() {
  return (
    <div className="fixed bottom-10 left-10 z-50">
      <label
        htmlFor="my-add-sc-modal"
        className="btn btn-circle text-7xl font-bold w-20 h-20"
      >
        +
      </label>

      <input type="checkbox" id="my-add-sc-modal" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box relative w-11/12 max-w-5xl">
          <label
            htmlFor="my-add-sc-modal"
            className="btn btn-lg  btn-circle absolute right-5 top-5"
          >
            ✕
          </label>
          <SCAddForm />
        </div>
      </div>
    </div>
  );
}
