enum LogLevel {
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
  DEBUG = 'DEBUG',
}

export class Logger {
  private context: string;

  constructor(context: string) {
    this.context = context;
  }

  public info(message: string, meta?: any): void {
    this.log(LogLevel.INFO, message, meta);
  }

  public warn(message: string, meta?: any): void {
    this.log(LogLevel.WARN, message, meta);
  }

  public error(message: string, error?: Error, meta?: any): void {
    this.log(LogLevel.ERROR, message, { ...meta, error: error?.stack || error?.message });
  }

  public debug(message: string, meta?: any): void {
    if (process.env.NODE_ENV !== 'production') {
      this.log(LogLevel.DEBUG, message, meta);
    }
  }

  private log(level: LogLevel, message: string, meta?: any): void {
    const timestamp = new Date().toISOString();
    const logData = {
      timestamp,
      level,
      context: this.context,
      message,
      ...(meta ? { meta } : {}),
    };

    console.log(JSON.stringify(logData));
  }
}

export const createLogger = (context: string): Logger => {
  return new Logger(context);
};