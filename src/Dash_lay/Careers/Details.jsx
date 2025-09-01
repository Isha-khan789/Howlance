import React from "react";

const Details = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-9">
          Join Howlance and be a part <br /> of a great company
        </h1>
        <p className="text-gray-300 mt-3">
          We would happily{" "}
          <span className="font-semibold">
            discuss the details on a video call.
          </span>{" "}
          <br />
          Apply for a position below to get started.
        </p>
      </div>

      {/* Form */}
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg p-8">
        <form className="space-y-4">
          {/* Position */}
          {/* <div>
            <label className="block text-sm font-medium text-gray-700">
              Choose your desired position
            </label>
            <select className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-gray-900 focus:outline-none">
              <option value="" disabled hidden></option>
              <option>BDR</option>
              <option>Designer</option>
              <option>Developer</option>
            </select>
          </div> */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Choose your Desired Positon
            </label>
            <select
              defaultValue=""
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-gray-900 focus:outline-none"
            >
              <option value="" disabled hidden></option>
              <option>BDR</option>
              <option>Designer</option>
              <option>Developer</option>
            </select>
          </div>

          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First name
            </label>
            <input
              type="text"
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-gray-900 focus:outline-none"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last name
            </label>
            <input
              type="text"
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-gray-900 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Upload Your Picture
            </label>
            <input
              type="file"
              accept="image/"
              required
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-gray-900 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              defaultValue=""
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-gray-900 focus:outline-none"
            >
              <option value="" disabled hidden></option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone number
            </label>
            <input
              type="tel"
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-gray-900 focus:outline-none"
            />
          </div>
          {/* CNIC */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              CNIC{" "}
            </label>
            <input
              type="tel"
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-gray-900 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-gray-900 focus:outline-none"
            />
          </div>
          {/* {Voice} */}
          <div>
            <label className=" text-sm font-medium flex flex-col text-gray-700">
              Your Voice Recording Link Here*
            </label>
            <p className="text-sm mt-1 font-extrlight">
              Record your intro on www.vocaroo.com and drop the link here.
            </p>
            {/* Record your intro on www.vocaroo.com and drop the link here. */}
            <input
              type="file"
              accept="audio/"
              required
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-gray-900 focus:outline-none"
            />
          </div>

          {/* Salary */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              What are your salary expectations?*
            </label>
            <input
              type="text"
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-gray-900 focus:outline-none"
            />
          </div>

          {/* Start Date */}
          {/* <select
            defaultValue=""
            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-gray-900 focus:outline-none"
          >
            <option value="" disabled></option>
            <option>Right away, I’m ready to get started now</option>
            <option>Within this week</option>
            <option>Within the next 2 weeks</option>
            <option>Next month</option>
            <option>Just exploring options for now</option>
          </select> */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              How soon can you join?
            </label>
            <select
              defaultValue=""
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-gray-900 focus:outline-none"
            >
              <option value="" disabled hidden></option>
              <option>Right away, I’m ready to get started now</option>
              <option>Within this week</option>
              <option>Within the next 2 weeks</option>
              <option>Next month</option>
              <option>Just exploring options for now</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-4 bg-purple-800 hover:bg-purple-900 text-white font-semibold py-2 px-4 rounded-md transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Details;
