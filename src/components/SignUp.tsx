import React from 'react';
import { useForm } from 'react-hook-form';

//Lmk if it works because the styling i made was in css (not imported here yeet)

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <select {...register}>
        <option value="Student">Student</option>
        <option value=" Educator"> Educator</option>
      </select>

      <input type="submit" />
    </form>
  );
}