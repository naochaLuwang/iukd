"use client";

import React from "react";
import { useState } from "react";
import axios from "axios";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import SmallInput from "../components/Input/SmallInput";

import TextBox from "../components/Input/TextBox";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",

      phone: "",
      description: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
    setIsLoading(true);

    axios
      .post("/api/message", data)
      .then(() => {
        toast.success("Message sent successfully");
        setValue("name", ""); // Reset the "name" field value
        setValue("phone", ""); // Reset the "phone" field value
        setValue("description", "");
      })
      .catch((error) => {
        toast.error("Error sending message");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="flex flex-col px-10 space-y-3 w-fill">
      <SmallInput
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        isNumber={false}
      />
      <SmallInput
        id="phone"
        label="Phone"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        isNumber={false}
      />
      <TextBox
        label="Description"
        id="description"
        register={register}
        errors={errors}
        required
      />

      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="w-5 h-5 text-blue-500 border-gray-300 rounded form-checkbox focus:ring-blue-500"
        />
        <span className="text-sm text-gray-700">
          I accept the{" "}
          <Link href="/terms_conditions" className="font-medium text-blue-600">
            Terms & Conditions
          </Link>{" "}
          and{" "}
          <Link href="/privacy_policy" className="font-medium text-blue-600">
            Privacy Policy
          </Link>
        </span>
      </label>

      <button
        className={`w-full py-3 font-medium text-white bg-teal-700 rounded-md shadow-md  focus:bg-teal-800 ${
          isLoading || (!isChecked && "bg-opacity-50")
        }`}
        onClick={handleSubmit(onSubmit)}
        disabled={isLoading || !isChecked}
      >
        {isLoading ? "Submitting" : "Submit"}
      </button>
    </div>
  );
};

export default ContactForm;
