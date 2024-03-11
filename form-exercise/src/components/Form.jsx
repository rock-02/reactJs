import React from "react";

import { useForm } from "react-hook-form";
const Form = ({ handleClick }) => {
  const { register, handleSubmit } = useForm();
  return (
    <div>
      <form onSubmit={handleSubmit((data) => handleClick(data) )}>
        <input type="text" placeholder="name" {...register("name")} />

        <input type="text" placeholder="description" {...register("bio")} />

        <input type="text" placeholder="imageUrl" {...register("img")} />

        <input type="submit" placeholder="submit" />
      </form>
    </div>
  );
};

export default Form;
