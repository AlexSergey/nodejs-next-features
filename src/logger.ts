import { Logger } from "tslog";

export const logger: Logger<{}> = new Logger({
  type: process.env.NODE_ENV === 'test' ? 'hidden' : 'pretty'
});
