import { messages, PostedPassword } from './model';

const MESSAGE_LIMIT = 10;


export function addPassword(text: string, toAddress: string): void {
  // Creating a new message and populating fields with our data
  const message = new PostedPassword(text, toAddress);
  // Adding the message to end of the the persistent collection
  messages.push(message);
}

/**
 * Returns an array of last N messages.\
 * NOTE: This is a view method. Which means it should NOT modify the state.
 */
export function getMessages(): PostedPassword[] {
  const numMessages = min(MESSAGE_LIMIT, messages.length);
  const startIndex = messages.length - numMessages;
  const result = new Array<PostedPassword>(numMessages);
  for(let i = 0; i < numMessages; i++) {
    result[i] = messages[i + startIndex];
  }
  return result;
}
