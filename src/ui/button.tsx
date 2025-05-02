import {ButtonHTMLAttributes} from "react";
import {twMerge} from "tailwind-merge";

type Variant = "FILL" | "OUTLINE";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variant;
}

export default function Button({variant, className, ...props}: ButtonProps) {
  const variantClassName = getVariantClassname(variant);
  
  return (
    <button
      className={twMerge(variantClassName, className)}
      {...props}
    />
  )
}

const COMMON_CLASSNAMES = "text-sm lg:text-base py-3 px-4 duration-200 rounded-md cursor-pointer "

function getVariantClassname(variant: Variant) {
  switch(variant) {
    case "FILL":
      return COMMON_CLASSNAMES + "bg-yellow-500 hover:bg-yellow-600"
    case "OUTLINE":
      return COMMON_CLASSNAMES + "border-yellow-500 hover:border-yellow-600 border text-yellow-600 hover:text-yellow-700"
  }
}