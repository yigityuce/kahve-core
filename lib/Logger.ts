import winston, { transports, format, createLogger } from 'winston';

export enum LogLevel {
	ERROR = 'error',
	WARN = 'warn',
	INFO = 'info',
	VERBOSE = 'verbose',
	DEBUG = 'debug',
	SILLY = 'silly'
}

interface IFormatterParams {
	level: LogLevel;
	message: string;
	timestamp: any;
}

export class Logger {
	private logger: winston.Logger;

	constructor(lvl: LogLevel = LogLevel.INFO) {
		this.logger = createLogger({
			level: lvl,
			transports: [new transports.Console()],
			format: format.combine(
				format.cli({ all: true }),
				format.timestamp(),
				format.printf(({ level, message, timestamp }: IFormatterParams) => `[${timestamp}] [${level}]: ${message}`)
			),
			exitOnError: false
		});
	}

	public setLevel(level: LogLevel | string): this {
		this.logger.level = level;
		return this;
	}

	public getLevel(): LogLevel | string {
		return this.logger.level;
	}

	public error(...args: any[]): this {
		this.logger.error(args.join(' '));
		return this;
	}

	public warn(...args: any[]): this {
		this.logger.warn(args.join(' '));
		return this;
	}

	public info(...args: any[]): this {
		this.logger.info(args.join(' '));
		return this;
	}

	public verbose(...args: any[]): this {
		this.logger.verbose(args.join(' '));
		return this;
	}

	public debug(...args: any[]): this {
		this.logger.debug(args.join(' '));
		return this;
	}

	public silly(...args: any[]): this {
		this.logger.silly(args.join(' '));
		return this;
	}
}

export const logger = new Logger();
