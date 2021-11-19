import axios from "axios";
import './Reviews.css';
import React from "react";
import { useForm } from "react-hook-form";

const Review = () => {
  const { register, handleSubmit, reset} = useForm();

const onSubmit = data => {
    console.log(data)
axios.post('http://localhost:5000/reviewPart', data)
.then(res=>{
    if(res.data.insertedId){
        alert('Thanks for your opinion');
        reset();
    }
})
};

  return (
    <div>
      <h2 className="my-order">Please </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("yourOpinion", { required: true, maxLength: 20 })}
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Review;
