import { Command } from "./command"

/**
 * @see https://redis.io/commands/publish
 */
export class PublishCommand<TMessage = unknown> extends Command<number, number> {
  constructor(channel: string, message: TMessage) {
    super(["publish", channel, message])
  }
}
