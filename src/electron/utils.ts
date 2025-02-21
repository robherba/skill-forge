import { pino, type Logger } from "pino";

export function isDev() {
	return process.env.NODE_ENV === 'development';
}

export const logger: Logger = pino({
  level: process.env.PINO_LOG_LEVEL ?? 'debug',
  timestamp: pino.stdTimeFunctions.isoTime,
  redact: [],
})
