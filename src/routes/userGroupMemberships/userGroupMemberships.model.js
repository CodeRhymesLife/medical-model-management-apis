/** @namespace medmod-apis */
import mongoose from 'mongoose';

/**
 * Defines metadata for an account membership--a concept that
 * represents a user's under an account
 * @typedef AccountMembership
 */
const AccountMembershipSchema = new mongoose.Schema({
  /**
   * The id of the account this invitation is for
   * @type {(medmod.database.Account|ObjectId)}
   */
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
    required: true,
  },

  /**
   * The id of the user this membership is for
   * @type {(medmod.database.User|ObjectId)}
   */
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  /**
   * The date this invitation was created
   * @type {date}
   */
  created: {
    type: Date,
    default: Date.now,
  },
});

/** Make sure there is only one invitation for a unique user for under single account */
AccountMembershipSchema.index({ account: 1, user: 1 }, { unique: true });

AccountMembershipSchema.statics = {
     /**
     * Creates a membership under the given account id for the given user
     * @param {ObjectId} accountId - the account id
     * @param {User} - the user to create the memvership for
     * @returns {AccountMembership}
     */  
    async accept(accountId, user) {
      try {
        logger.req().info(`${LOG_TAG} creating new membership under account '${accountId}' for user '${user.email}'`);
        const membership = new AccountMembership({
          account: accountId,
          user: user,
        });
        const savedMembership = await membership.save();
  
        logger.req().info(`${LOG_TAG} successfully created membership '${savedMembership._id}' under account '${accountId}' for user '${user.email}');
      } catch (err) {
        logger.req().info(`${LOG_TAG} unable to create membership under account '${accountId}' for user '${user.email}');
        next(err);
      }
    
}
export default mongoose.model('AccountMembership', AccountMembershipSchema);

