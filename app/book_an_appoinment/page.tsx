"use client";

import { useState, useEffect } from "react";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import SmallInput from "../../components/Input/SmallInput";
import Select from "../../components/Input/Select";
import TextBox from "../../components/Input/TextBox";

import Link from "next/link";
import DepartmentSelect from "@/components/DepartmentSelect";
import DoctorSelect from "@/components/DoctorSelect";

import { useSearchParams } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

const BookAppoinment = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [departments, setDepartments] = useState<any | null>();
  const [doctors, setDoctors] = useState<PeopleProps[] | null>();
  const [selectedDate, setSelectedDate] = useState(null);

  const searchParams = useSearchParams();

  const dep = searchParams.get("dep");
  const id = searchParams.get("id");

  const now = new Date();

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

  const currentDate = now.toISOString().split("T")[0];

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
      gender: "MALE",
      age: "",
      address: "",
      phone: "",
      email: "",
      date: currentDate,
      department: dep || "UROLOGY",
      doctor: id || "",
    },
  });

  useEffect(() => {
    if (dep) {
      setValue("department", dep);
    }
  }, [dep, setValue]);

  useEffect(() => {
    if (id) {
      setValue("doctor", id);
    }
  }, [id, setValue]);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/department`)
      .then((res) => res.json())
      .then((data) => {
        setDepartments(data);
        setLoading(false);
      });
  }, []);

  let selectedDepartment = watch("department");

  useEffect(() => {
    // Set doctors based on the selected department
    if (selectedDepartment && departments) {
      setValue("department", selectedDepartment);

      const foundDepartment = departments.find(
        (department: any) => department.departmentName === selectedDepartment
      );
      if (foundDepartment || id) {
        setDoctors(foundDepartment.peoples);
        setValue("doctor", id);
      }
    }
  }, [id, selectedDepartment, departments, watch, setValue]);
  // Include 'watch("department")' in the dependency array

  // submit the form values
  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
    setIsLoading(true);

    axios
      .post("/api/appoinments", data)
      .then(() => {
        toast.success("Message sent successfully");
      })
      .catch((error) => {
        toast.error("Error sending message");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="w-full h-auto lg:min-h-screen">
      <div className="grid w-full h-auto max-w-6xl grid-cols-1 gap-10 py-10 mx-auto lg:grid-cols-2">
        <div className="flex flex-col w-full px-8 space-y-5 lg:px-0">
          {/* Personal Information */}
          <h1 className="mt-5 text-3xl font-medium ">Personal Information</h1>
          {/* Name */}
          <SmallInput
            id="name"
            label="Name"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            isNumber={false}
          />
          {/* Gender */}
          <div className="flex w-full mt-5 space-x-6 align-center">
            <Select
              id="gender"
              register={register}
              errors={errors}
              label="Gender"
              menus={[
                { id: "MALE", title: "MALE" },
                { id: "FEMALE", title: "FEMALE" },
                { id: "OTHERS", title: "OTHERS" },
              ]}
              required
            />
            {/* Age */}
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

          {/* Address */}
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
          <TextBox
            label="Message"
            id="message"
            register={register}
            errors={errors}
            required
          />
        </div>
        <div className="flex flex-col w-full px-8 space-y-5 lg:pl-20 ">
          <h1 className="mt-5 text-3xl font-medium ">Appoinment Information</h1>
          <div className="flex flex-col">
            <h1>Date</h1>
            <input
              type="date"
              id="date"
              className={`lg:w-96 w-full px-3 mt-2 py-2 border rounded-md focus:outline-none focus:ring-teal-700 ${
                errors.date ? "border-red-500" : "border-teal-500"
              }`}
              {...register("date", {
                required: true,
              })}
              min={currentDate}
              required
            />
          </div>

          <div className="w-full lg:w-96">
            <DepartmentSelect
              id="department"
              register={register}
              errors={errors}
              label="Department"
              menus={departments}
              required
            />
          </div>
          <div className="w-full lg:w-96">
            <DoctorSelect
              id="doctor"
              register={register}
              errors={errors}
              label="Doctor"
              menus={doctors}
              required
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
            className="w-full py-2 font-medium bg-yellow-500 rounded-md shadow-md lg:w-96"
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
