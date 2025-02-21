import { clsx, type ClassValue } from "clsx";
import { pino, type Logger } from "pino";
import { twMerge } from "tailwind-merge";

export function isDev() {
	return process.env.NODE_ENV === 'development';
}

export const logger: Logger = pino({
  level: process.env.PINO_LOG_LEVEL ?? 'debug',
  timestamp: pino.stdTimeFunctions.isoTime,
  redact: [],
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

