import ExtendablePromise from './extendable-promise';

/**
 * Extendable abstract class that provides promise functionality. Implementations must override and implement
 * the `_run(resolve, reject)` function.
 *
 * @example
 * class RunnableBuilderPromise extends RunnablePromise {
 *
 *   name(name) {
 *     this._name = name;
 *     return this;
 *   }
 *
 *   _run(resolve, reject) {
 *     resolve(this._name);
 *   }
 * }
 *
 * new RunnableBuilderPromise()
 *    .name('George Washington')
 *    .then((name) => { console.log(`Name: ${name}`) } );
 */
class RunnablePromise extends ExtendablePromise {

  /**
   * Constructor
   */
  constructor() {
    super((resolve, reject) => {
      setTimeout(() => { this._execute(resolve, reject); }, 1);
    });
  }

  /**
   * Executes the _run() function and then captures the necessary information to determine how to handle delegation
   * to the underlying promise.
   *
   * @param {function} resolve invoke this function to resolve the promise
   * @param {function} reject invoke this function to reject the promise
   * @private
   */
  _execute(resolve, reject) {
    try {
      let response = this._start(resolve, reject);

      if (response && typeof response.then == 'function') {
        response
          .then((data) => resolve(data))
          .catch((error) => reject(error));
      }
    } catch (e) {
      reject(e);
    }
  }

  /**
   * Either needs to return a promise or call resolve/reject. If this returns a
   * promise, RunnablePromise will automatically wire it up so that the promise resolves when
   * the returned promise resolves and rejects when the returned promise rejects.
   *
   * @param {function} resolve invoke this function to resolve the promise
   * @param {function} reject invoke this function to reject the promise
   *
   * @abstract
   * @private
   */
  _run(resolve, reject) {
    reject(new TypeError('Must override start function'));
  }

}

export default RunnablePromise;