"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface SelectProps {
  id: string;
  title?: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  required?: boolean;
  menus: any;
  label?: string;
}

const DoctorSelect: React.FC<SelectProps> = ({
  id,
  register,
  required = false,
  errors,
  menus,
  label,
}) => {
  const isFieldSubmitted = Object.keys(errors).includes(id);

  return (
    <div className="w-full h-auto">
      <div className="flex items-center space-x-2">
        <label
          className={`text-md mb-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 ${
            errors[id] ? "text-rose-500" : "text-neutral-500"
          }`}
        >
          {label}
        </label>
        {required && <h1 className="text-lg text-rose-500">*</h1>}
      </div>

      <select
        {...register(id as Extract<keyof FieldValues, string>, {
          required: required ? "Field is required." : false,
        })}
        className={`peer w-full p-2 font-light bg-white ${
          errors[id] ? "border-red-600" : "border-blue-400"
        } focus:border-blue-700 border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed`}
      >
        {/* <option className="w-full text-center" value="">
          -- Select {label} --
        </option> */}
        {menus?.map((menu: any) => (
          <option key={menu.id} value={menu.id}>
            {`${menu.salutation} ${menu.firstName} ${menu.lastName} `}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DoctorSelect;
