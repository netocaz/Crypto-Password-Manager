import { context, u128, PersistentVector } from "near-sdk-as";

@nearBindgen
export class PostedPassword {
  premium: boolean;
  sender: string;
  constructor(public text: string, public toAddress: string) {
    this.sender = context.sender;
  }
}
/**
 * collections.vector is a persistent collection. Any changes to it will
 * be automatically saved in the storage.
 * The parameter to the constructor needs to be unique across a single contract.
 * It will be used as a prefix to all keys required to store data in the storage.
 */
export const messages = new PersistentVector<PostedPassword>("m");
