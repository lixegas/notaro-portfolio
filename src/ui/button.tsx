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

const COMMON_CLASSNAMES = `
  relative overflow-hidden text-sm font-medium py-2.5 px-5 rounded-full cursor-pointer
  duration-300 active:scale-95
`

function getVariantClassname(variant: Variant) {
  switch(variant) {
    case "FILL":
      // The ::before stripe sweeps across on hover
      return COMMON_CLASSNAMES + `
        text-black bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400
        shadow-[0_0_0_1px_rgb(250_204_21/0.4),0_8px_30px_-6px_rgb(250_204_21/0.55)]
        hover:shadow-[0_0_0_1px_rgb(250_204_21/0.6),0_10px_40px_-4px_rgb(250_204_21/0.75)] hover:-translate-y-0.5
        before:absolute before:inset-y-0 before:-left-1/2 before:w-1/3 before:-skew-x-12
        before:bg-white/50 before:blur-sm before:-translate-x-full hover:before:translate-x-[450%] before:duration-700
      `
    case "OUTLINE":
      return COMMON_CLASSNAMES + `
        border border-neutral-300 bg-white/60 hover:border-neutral-900
        dark:border-white/15 dark:bg-white/5 dark:hover:border-white/40 dark:hover:bg-white/10
        backdrop-blur-md hover:-translate-y-0.5
      `
  }
}
