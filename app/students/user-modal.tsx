"use client";

import UserAddForm from "./user-add-form";

export default function UserModal() {
  return (
    <div
      className="
      w-full
      h-24"
    >
      <label
        htmlFor="my-add-user-modal"
        className="btn btn-circle text-7xl font-bold h-28 w-full "
      >
        +
      </label>

      <input type="checkbox" id="my-add-user-modal" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box relative w-11/12 max-w-5xl">
          <label
            htmlFor="my-add-user-modal"
            className="btn btn-lg  btn-circle absolute right-5 top-5"
          >
            ✕
          </label>
          <UserAddForm />
        </div>
      </div>
    </div>
  );
}
