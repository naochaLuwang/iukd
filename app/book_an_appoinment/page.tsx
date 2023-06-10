"use client";

import { useState, useRef, useEffect } from "react";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import SmallInput from "../../components/Input/SmallInput";
import Select from "../../components/Input/Select";
import TextBox from "../../components/Input/TextBox";

import Link from "next/link";
import DepartmentSelect from "@/components/DepartmentSelect";
import DoctorSelect from "@/components/DoctorSelect";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const BookAppoinment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const [isChecked, setIsChecked] = useState(false);
  const [departments, setDepartments] = useState<any | null>();
  const [doctors, setDoctors] = useState<any | null>();
  const [selectedDate, setSelectedDate] = useState(null);

  const now = new Date();

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

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
      gender: "",
      age: "",
      address: "",
      phone: "",
      email: "",
      date: "",
      department: "",
      doctor: "",
    },
  });

  useEffect(() => {
    const getCurrentDate = () => {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const day = String(today.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    };

    setValue("date", getCurrentDate());
  }, [setValue]);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/department`)
      .then((res) => res.json())
      .then((data) => {
        setDepartments(data);
        setLoading(false);
      });
  }, []);

  const dep = watch("department");

  useEffect(() => {
    // Set doctors based on the selected department
    const selectedDepartment = watch("department");
    if (selectedDepartment && departments) {
      const foundDepartment = departments.find(
        (department: any) => department.departmentName === selectedDepartment
      );
      if (foundDepartment) {
        setDoctors(foundDepartment.peoples);
      }
    }
  }, [watch("department"), departments, watch]);
  // Include 'watch("department")' in the dependency array

  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
    setIsLoading(true);
  };
  return (
    <div className="w-full h-screen">
      <div className="grid w-full h-auto max-w-6xl grid-cols-2 gap-10 py-20 mx-auto">
        <div className="flex flex-col w-full space-y-5">
          <h1 className="mt-5 text-3xl font-medium ">Personal Information</h1>
          <SmallInput
            id="name"
            label="Name"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            isNumber={false}
          />
          <div className="flex w-full mt-5 space-x-6 align-center">
            <Select
              id="gender"
              register={register}
              errors={errors}
              label="Gender"
              menus={[
                { id: "Male", title: "MALE" },
                { id: "Female", title: "FEMALE" },
                { id: "Others", title: "OTHERS" },
              ]}
              required
            />
            <SmallInput
              id="age"
              label="Age"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
              isNumber={false}
            />
          </div>

          <TextBox
            label="Address"
            id="address"
            register={register}
            errors={errors}
            required
          />

          <h1 className="text-3xl font-medium">Contact Information</h1>
          <div className="flex items-center w-full space-x-6">
            <SmallInput
              id="phone"
              label="Phone"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
              isNumber={false}
            />
            <SmallInput
              id="email"
              label="Email"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
              isNumber={false}
            />
          </div>
        </div>
        <div className="flex flex-col w-full space-y-5">
          <h1 className="mt-5 text-3xl font-medium ">Appoinment Information</h1>
          {/* <div className="flex flex-col">
            <h1>Date</h1>
            <input
              type="date"
              id="date"
              className={`w-96 px-3 mt-2 py-2 border rounded-md focus:outline-none focus:ring-blue-500 ${
                errors.date ? "border-red-500" : "border-blue-400"
              }`}
              {...register("date", {
                required: true,
              })}
              required
            />
          </div> */}
          <div className="w-96">
            <DepartmentSelect
              id="department"
              register={register}
              errors={errors}
              label="Department"
              departments={departments}
              required
            />
          </div>
          <div className="w-96">
            <DoctorSelect
              id="doctor"
              register={register}
              errors={errors}
              label="Doctor"
              doctors={doctors}
              required
            />
          </div>

          <div className="w-full">
            <label htmlFor="date">Select Date:</label>
            <Calendar
              minDate={now}
              onChange={handleDateChange}
              value={selectedDate}
              className="p-2 react-calendar"
            />
            {/* Register the selected date in the form */}
            <input
              type="hidden"
              id="date"
              {...register("date", {
                required: true,
              })}
            />
          </div>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="w-5 h-5 text-blue-500 border-gray-300 rounded form-checkbox focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">
              I accept the{" "}
              <Link
                href="/terms_conditions"
                className="font-medium text-blue-600"
              >
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy_policy"
                className="font-medium text-blue-600"
              >
                Privacy Policy
              </Link>
            </span>
          </label>

          <button
            className="py-2 font-medium bg-yellow-500 rounded-md shadow-md w-96"
            onClick={handleSubmit(onSubmit)}
            disabled={isLoading}
          >
            {isLoading ? "Booking Appoinment" : "Book an Appoinment"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookAppoinment;
