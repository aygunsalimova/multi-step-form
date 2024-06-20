import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { incrementPageStep } from "../store/slices/pageStepSlice";
import Header from "../components/Header";
import NextButton from "../components/NextButton";
import { setFormData } from '../store/slices/formDataSlice';

interface IFormInput {
  name: string;
  email: string;
  phone: string;
}

const schema = yup
  .object({
    name: yup
      .string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters long"),
    email: yup
      .string()
      .required("Email address is required")
      .email("Email is invalid"),
    phone: yup
      .string()
      .required("Phone number is required")
      .matches(/^\+?[1-9]\d{1,14}$/, "Phone number is not valid")
      .min(10, "Phone number must be at least 10 characters long"),
  })
  .required();

export default function Info() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    // onSubmit fn automatically increments page step number when form submitted
    console.log(data);
    dispatch(setFormData(data));
    dispatch(incrementPageStep());
  };

  return (
    <div className="mx-100 flex flex-col">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col pt-10">
        <Header
          headerText="Personal info"
          paragraphText="Please provide your name, email address, and phone number."
        />

        <div className="flex justify-between align-middle mt-6">
          <label className="text-dark-blue text-sm leading-4" htmlFor="name">
            Name
          </label>
          {errors.name && (
            <p className="text-red-600 text-sm" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        <input
          className={`outline-none py-3 px-3 mt-2 font-medium border-border-grey border-solid border rounded-lg h-12 focus:border-main-purple ${
            errors.name ? "border-red-600" : ""
          }`}
          placeholder="e.g. Stephen King"
          id="name"
          {...register("name")}
        />

        <div className="flex justify-between align-middle mt-6">
          <label className="text-dark-blue text-sm leading-4" htmlFor="email">
            Email Address
          </label>
          {errors.email && (
            <p className="text-red-600 text-sm" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        <input
          placeholder="e.g. stephenking@lorem.com"
          className={`outline-none py-3 px-3 mt-2 font-medium border-border-grey border-solid border rounded-lg h-12 focus:border-main-purple ${
            errors.email ? "border-red-600" : ""
          }`}
          id="email"
          {...register("email")}
          aria-invalid={errors.email ? "true" : "false"}
        />

        <div className="flex justify-between align-middle mt-6">
          <label className="text-dark-blue text-sm leading-4" htmlFor="phone">
            Phone Number
          </label>
          {errors.phone && (
            <p className="text-red-600 text-sm" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>

        <input
          placeholder="e.g. +1234567890"
          className={`outline-none py-3 px-3 mt-2 font-medium border-border-grey border-solid border rounded-lg h-12 focus:border-main-purple ${
            errors.phone ? "border-red-600" : ""
          }`}
          id="phone"
          type="text"
          {...register("phone")}
        />
        <div className="flex justify-end mt-20">
          <NextButton />
        </div>
      </form>
    </div>
  );
}
