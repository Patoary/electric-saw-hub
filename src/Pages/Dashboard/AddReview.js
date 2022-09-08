import React from 'react';
import { useForm } from 'react-hook-form';
import Heading from '../../Components/Heading/Heading';

const AddReview = () => {
    const {handleSubmit, register, formState:{errors}} = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className="review p-10 w-4/5 lg:w-1/2">
      <Heading>Say Something about us</Heading>
      <form
        className="w-full flex flex-col gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label className="font-medium">Rate 1 to 5</label>
          <select
            {...register("ratings")}
            placeholder="Rate 1 To 5"
            className="cursor-pointer input input-bordered input-primary w-full"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <label className="font-medium">Review Content</label>
          <textarea
            typeof="text"
            className="textarea textarea-primary w-full"
            {...register("reviewContent", {
              required: {
                value: true,
                message: "Content is required",
              },
              maxLength: {
                value: 180,
                message: `Maximum 180 Characters`,
              },
            })}
            placeholder="Enter Your Thought Here"
          ></textarea>
          {errors?.reviewContent && (
            <p className="error">{errors.reviewContent.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="button w-full rounded-xl overflow-hidden"
        >
          Submit
        </button>
      </form>
    </div>
    );
};

export default AddReview;