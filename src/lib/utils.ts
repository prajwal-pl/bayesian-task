import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const originList = ["JFK", "DEL", "SYD", "BOM", "BNE", "BLR"];

export const destinationList = [
  "JFK",
  "DEL",
  "SYD",
  "LHR",
  "CDG",
  "DOH",
  "SIN",
];

export const cabinList = ["economy", "business", "first"];
