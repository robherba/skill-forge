import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function isDev() {
	return process.env.NODE_ENV === 'developer';
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

