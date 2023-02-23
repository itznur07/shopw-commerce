import { useForm } from "react-hook-form";

const ShippingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // do something with the submitted form data
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='max-w-lg mx-auto mt-8'>
      <div className='grid grid-cols-2 gap-4 mb-4'>
        <div>
          <label htmlFor='firstName' className='block font-medium'>
            First Name
          </label>
          <input
            type='text'
            name='firstName'
            id='firstName'
            className={`w-full border rounded-md p-2 ${
              errors.firstName ? "border-red-500" : "border-gray-300"
            }`}
            {...register("firstName", { required: true })}
          />
          {errors.firstName && (
            <span className='text-red-500 text-sm'>This field is required</span>
          )}
        </div>

        <div>
          <label htmlFor='lastName' className='block font-medium'>
            Last Name
          </label>
          <input
            type='text'
            name='lastName'
            id='lastName'
            className={`w-full border rounded-md p-2 ${
              errors.lastName ? "border-red-500" : "border-gray-300"
            }`}
            {...register("lastName", { required: true })}
          />
          {errors.lastName && (
            <span className='text-red-500 text-sm'>This field is required</span>
          )}
        </div>
      </div>

      <div className='mb-4'>
        <label htmlFor='address' className='block font-medium'>
          Address
        </label>
        <input
          type='text'
          name='address'
          id='address'
          className={`w-full border rounded-md p-2 ${
            errors.address ? "border-red-500" : "border-gray-300"
          }`}
          {...register("address", { required: true })}
        />
        {errors.address && (
          <span className='text-red-500 text-sm'>This field is required</span>
        )}
      </div>

      <div className='grid grid-cols-2 gap-4 mb-4'>
        <div>
          <label htmlFor='city' className='block font-medium'>
            City
          </label>
          <input
            type='text'
            name='city'
            id='city'
            className={`w-full border rounded-md p-2 ${
              errors.city ? "border-red-500" : "border-gray-300"
            }`}
            {...register("city", { required: true })}
          />
          {errors.city && (
            <span className='text-red-500 text-sm'>This field is required</span>
          )}
        </div>

        <div>
          <label htmlFor='zipCode' className='block font-medium'>
            Zip Code
          </label>
          <input
            type='text'
            name='zipCode'
            id='zipCode'
            className={`w-full border rounded-md p-2 ${
              errors.zipCode ? "border-red-500" : "border-gray-300"
            }`}
            {...register("zipCode", {
              required: true,
              pattern: /^\d{5}(?:[-\s]\d{4})?$/,
            })}
          />
          {errors.zipCode && (
            <span className='text-red-500 text-sm'>
              Please enter a valid ZIP
            </span>
          )}
        </div>
      </div>
      <div className='mb-4'>
        <label htmlFor='phoneNumber' className='block font-medium'>
          Phone Number
        </label>
        <input
          type='text'
          name='phoneNumber'
          id='phoneNumber'
          className={`w-full border rounded-md p-2 ${
            errors.phoneNumber ? "border-red-500" : "border-gray-300"
          }`}
          {...register("phoneNumber", {
            required: true,
            pattern: /^(?:\+88|01)?(?:\d{11}|\d{13})$/,
          })}
        />
        {errors.phoneNumber && (
          <span className='text-red-500 text-sm'>
            Please enter a valid phone number (ex: +8801234567890 or
            01234567891)
          </span>
        )}
      </div>

      <div className='mb-4'>
        <label htmlFor='email' className='block font-medium'>
          Email Address
        </label>
        <input
          type='email'
          name='email'
          id='email'
          className={`w-full border rounded-md p-2 ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        {errors.email && (
          <span className='text-red-500 text-sm'>
            Please enter a valid email address
          </span>
        )}
      </div>

      <button
        type='submit'
        className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300'
      >
        Continue to Payment
      </button>
    </form>
  );
};

export default ShippingForm;
