import React from "react";

export default function () {
  return (
    <>
    {/* The form component for the ContactUs Page  */}
      <div className="flex flex-col w-auto mx-auto  ">
        <div className="text-2xl font-serif font-bold">
          Or send us a message at :
        </div>
        <form>
          <label
            htmlFor="name"
            className="block mb-2 text-2xl font-serif font-normal text-start "
          >
            Name:
          </label>

          <input
            type="name"
            id="name"
            className="bg-gray-50  border-gray-900 text-gray-900 text-lg  rounded-xl border focus:ring-green-300 focus:border-green-300 block w-full p-2.5   "
            required
          ></input>
          <label
            htmlFor="message"
            className="block mb-2 text-2xl font-serif font-normal text-start"
          >
            Your message:
          </label>
          <textarea
            id="message"
            rows="10"
            className="block border p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-gray-900 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Leave a message..."
          ></textarea>
        </form>
      </div>
    </>
  );
}
