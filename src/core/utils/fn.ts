import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...props: ClassValue[]) {
  return twMerge(clsx(...props));
}
