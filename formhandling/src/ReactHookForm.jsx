import React from "react";
import { useForm } from "react-hook-form";

const ReactHookForm = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <form action="" onSubmit={handleSubmit((data) => console.log(data))}>
        <input type="text" {...register("name")} placeholder="name" /> <br />{" "}
        <br />
        <input
          type="text"
          {...register("email")}
          placeholder="email"
        /> <br /> <br />
        <input type="text" {...register("password")} placeholder="password" />
        <br /> <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default ReactHookForm;
