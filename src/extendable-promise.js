/**
 * Extensible class that provides promise functionality. Simply delegates to an underlying promise.
 *
 * @example
 * class ExamplePromise extends ExtendablePromise {
 *
 *   constructor() {
 *     super((resolve, reject) => {
 *       setTimeout(() => {
 *         this.done = true;
 *         resolve();
 *       }, 5)
 *     });
 *
 *     this.done = false;
 *   }
 * }
 *
 * let promise = new ExamplePromise();
 * console.log('Promise is Not Yet Done, Right? ' + (promise.done == false));
 *
 * promise.then(() => {
 *    console.log('Promise is now Done, Right? ' + (promise.done == true));
 *  });
 */
class ExtendablePromise {

  /**
   * Constructor
   *
   * @param {function} executor Function object with two arguments resolve and reject.
   */
  constructor(executor) {
    if (!executor || typeof executor != 'function') {
      throw new TypeError('Must provide executor function');
    }

    this._promise = new Promise(executor);
  }

  /**
   * Chain an action to occur after this promise is resolved (or rejected). No more
   * non-promise-specific language chains can occur after this.
   *
   * @param {function} [onFulfilled] executed on fulfillment
   * @param {function} [onRejected] executed on rejection
   * @return {Promise} the underlying promise
   */
  then(onFulfilled, onRejected) {
    return this._promise.then(onFulfilled, onRejected);
  }

  /**
   * Chain an action to occur after this promise is rejected. No more
   * non-promise-specific language chains can occur after this.
   *
   * @param {function} [onRejected] executed on rejection
   * @return {Promise} the underlying promise
   */
  catch(onRejected) {
    return this._promise.catch(onRejected);
  }

}

export default ExtendablePromise;