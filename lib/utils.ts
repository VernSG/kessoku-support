import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import slugify from "@sindresorhus/slugify";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export { slugify, clsx as cx };
