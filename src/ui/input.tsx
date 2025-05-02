import {InputHTMLAttributes} from "react";
import {twMerge} from "tailwind-merge";

const DEFAULT_CLASSNAME = `
  bg-neutral-50 border border-neutral-300 text-neutral-900 
  text-sm rounded-lg focus:ring-yellow-500 
  focus:border-yellow-500 block w-full p-2.5 
  dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-gray-400 
  dark:text-white duration-200 focus:outline-none
`

export default function Input({name, className, label, ...props}: InputHTMLAttributes<HTMLInputElement> & {label: string}) {
  return (
    <div>
      <label 
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input 
        type="text"
        id={name}
        className={twMerge(DEFAULT_CLASSNAME, className)}
        {...props}
      />
    </div>
  );
}