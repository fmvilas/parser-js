const Operation = require('./operation');

/**
 * Implements functions to deal with a PublishOperation object.
 * @class
 * @extends Operation
 * @returns {PublishOperation}
 */
class PublishOperation extends Operation {
  /**
   * @returns {boolean}
   */
  isPublish() {
    return true;
  }
  
  /**
   * @returns {boolean}
   */
  isSubscribe() {
    return false;
  }

  /**
   * @returns {string}
   */
  kind() {
    return 'publish';
  }
}

module.exports = PublishOperation;
