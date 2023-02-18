import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Navigaion from "./Navigaion";

const Contact = () => {
  const [marker, setMarker] = useState({
    lat: 40.712776,
    lng: -74.005974,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Navigaion />
      <div
        className='flex flex-col md:my-10 items-center justify-center w-full h-auto
      bg-gray-100'
      >
        <h1 className='mb-8 text-3xl font-bold'>Contact Us</h1>
        <div className='md:flex md:flex-row flex flex-col items-center md:justify-center md:space-x-40 w-full  md:px-8 md:py-6 rounded-lg'>
          <form className='w-full max-w-md' onSubmit={handleSubmit(onSubmit)}>
            <div className=''>
              {/* input field here */}
              <div>
                <div className='flex flex-wrap mb-6'>
                  <div className='w-full mb-6 md:mb-0'>
                    <label
                      className='block mb-2 text-sm font-bold text-gray-700'
                      htmlFor='name'
                    >
                      Name
                    </label>
                    <input
                      className={`block w-full px-4 py-3 border rounded ${
                        errors.name
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-400 focus:border-blue-500"
                      } focus:outline-none`}
                      type='text'
                      id='name'
                      name='name'
                      {...register("name", { required: true })}
                    />
                    {errors.name && (
                      <p className='text-xs text-red-500 mt-1'>
                        This field is required
                      </p>
                    )}
                  </div>
                </div>
                <div className='flex flex-wrap mb-6'>
                  <div className='w-full mb-6 md:mb-0'>
                    <label
                      className='block mb-2 text-sm font-bold text-gray-700'
                      htmlFor='email'
                    >
                      Email
                    </label>
                    <input
                      className={`block w-full px-4 py-3 border rounded ${
                        errors.email
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-400 focus:border-blue-500"
                      } focus:outline-none`}
                      type='email'
                      id='email'
                      name='email'
                      {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                      })}
                    />
                    {errors.email && (
                      <p className='text-xs text-red-500 mt-1'>
                        Please enter a valid email
                      </p>
                    )}
                  </div>
                </div>
                <div className='flex flex-wrap mb-6'>
                  <div className='w-full mb-6 md:mb-0'>
                    <label
                      className='block mb-2 text-sm font-bold text-gray-700'
                      htmlFor='message'
                    >
                      Message
                    </label>
                    <textarea
                      className={`block w-full px-4 py-3 border rounded ${
                        errors.message
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-400 focus:border-blue-500"
                      } focus:outline-none`}
                      id='message'
                      name='message'
                      rows='8'
                      {...register("message", { required: true })}
                    />
                    {errors.message && (
                      <p className='text-xs text-red-500 mt-1'>
                        This field is required
                      </p>
                    )}
                  </div>
                </div>
              </div>
              {/* input field ends here */}
            </div>
            {/* submit btn here */}
            <div className='flex justify-center'>
              <button
                type='submit'
                className='px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700'
              >
                Submit
              </button>
            </div>
            {/* submit btn ends here */}
          </form>
          {/* map placement here */}
          <div className='mb-6  w-2/5'>
            <LoadScript googleMapsApiKey='AIzaSyBgHtKMhCpjwu-sRXcZsIOgKw_0ZWcAGqA'>
              <GoogleMap
                mapContainerStyle={{ height: "400px", width: "100%" }}
                center={marker}
                zoom={10}
                onClick={(e) => {
                  setMarker({ lat: e.latLng.lat(), lng: e.latLng.lng() });
                }}
              >
                <Marker position={marker} />
              </GoogleMap>
            </LoadScript>
          </div>
          {/* map placement ends here */}
        </div>
      </div>
    </>
  );
};

export default Contact;
