'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var ExtendablePromise = function () {

  /**
   * Constructor
   *
   * @param {function} executor Function object with two arguments resolve and reject.
   */

  function ExtendablePromise(executor) {
    _classCallCheck(this, ExtendablePromise);

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


  _createClass(ExtendablePromise, [{
    key: 'then',
    value: function then(onFulfilled, onRejected) {
      return this._promise.then(onFulfilled, onRejected);
    }

    /**
     * Chain an action to occur after this promise is rejected. No more
     * non-promise-specific language chains can occur after this.
     *
     * @param {function} [onRejected] executed on rejection
     * @return {Promise} the underlying promise
     */

  }, {
    key: 'catch',
    value: function _catch(onRejected) {
      return this._promise.catch(onRejected);
    }
  }]);

  return ExtendablePromise;
}();

exports.default = ExtendablePromise;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVuZGFibGUtcHJvbWlzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF5Qk07Ozs7Ozs7O0FBT0osV0FQSSxpQkFPSixDQUFZLFFBQVosRUFBc0I7MEJBUGxCLG1CQU9rQjs7QUFDcEIsUUFBSSxDQUFDLFFBQUQsSUFBYSxPQUFPLFFBQVAsSUFBbUIsVUFBbkIsRUFBK0I7QUFDOUMsWUFBTSxJQUFJLFNBQUosQ0FBYyxnQ0FBZCxDQUFOLENBRDhDO0tBQWhEOztBQUlBLFNBQUssUUFBTCxHQUFnQixJQUFJLE9BQUosQ0FBWSxRQUFaLENBQWhCLENBTG9CO0dBQXRCOzs7Ozs7Ozs7Ozs7ZUFQSTs7eUJBdUJDLGFBQWEsWUFBWTtBQUM1QixhQUFPLEtBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsV0FBbkIsRUFBZ0MsVUFBaEMsQ0FBUCxDQUQ0Qjs7Ozs7Ozs7Ozs7OzsyQkFXeEIsWUFBWTtBQUNoQixhQUFPLEtBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsVUFBcEIsQ0FBUCxDQURnQjs7OztTQWxDZDs7O2tCQXdDUyIsImZpbGUiOiJleHRlbmRhYmxlLXByb21pc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEV4dGVuc2libGUgY2xhc3MgdGhhdCBwcm92aWRlcyBwcm9taXNlIGZ1bmN0aW9uYWxpdHkuIFNpbXBseSBkZWxlZ2F0ZXMgdG8gYW4gdW5kZXJseWluZyBwcm9taXNlLlxuICpcbiAqIEBleGFtcGxlXG4gKiBjbGFzcyBFeGFtcGxlUHJvbWlzZSBleHRlbmRzIEV4dGVuZGFibGVQcm9taXNlIHtcbiAqXG4gKiAgIGNvbnN0cnVjdG9yKCkge1xuICogICAgIHN1cGVyKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAqICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICogICAgICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuICogICAgICAgICByZXNvbHZlKCk7XG4gKiAgICAgICB9LCA1KVxuICogICAgIH0pO1xuICpcbiAqICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAqICAgfVxuICogfVxuICpcbiAqIGxldCBwcm9taXNlID0gbmV3IEV4YW1wbGVQcm9taXNlKCk7XG4gKiBjb25zb2xlLmxvZygnUHJvbWlzZSBpcyBOb3QgWWV0IERvbmUsIFJpZ2h0PyAnICsgKHByb21pc2UuZG9uZSA9PSBmYWxzZSkpO1xuICpcbiAqIHByb21pc2UudGhlbigoKSA9PiB7XG4gKiAgICBjb25zb2xlLmxvZygnUHJvbWlzZSBpcyBub3cgRG9uZSwgUmlnaHQ/ICcgKyAocHJvbWlzZS5kb25lID09IHRydWUpKTtcbiAqICB9KTtcbiAqL1xuY2xhc3MgRXh0ZW5kYWJsZVByb21pc2Uge1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBleGVjdXRvciBGdW5jdGlvbiBvYmplY3Qgd2l0aCB0d28gYXJndW1lbnRzIHJlc29sdmUgYW5kIHJlamVjdC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGV4ZWN1dG9yKSB7XG4gICAgaWYgKCFleGVjdXRvciB8fCB0eXBlb2YgZXhlY3V0b3IgIT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTXVzdCBwcm92aWRlIGV4ZWN1dG9yIGZ1bmN0aW9uJyk7XG4gICAgfVxuXG4gICAgdGhpcy5fcHJvbWlzZSA9IG5ldyBQcm9taXNlKGV4ZWN1dG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFpbiBhbiBhY3Rpb24gdG8gb2NjdXIgYWZ0ZXIgdGhpcyBwcm9taXNlIGlzIHJlc29sdmVkIChvciByZWplY3RlZCkuIE5vIG1vcmVcbiAgICogbm9uLXByb21pc2Utc3BlY2lmaWMgbGFuZ3VhZ2UgY2hhaW5zIGNhbiBvY2N1ciBhZnRlciB0aGlzLlxuICAgKlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb25GdWxmaWxsZWRdIGV4ZWN1dGVkIG9uIGZ1bGZpbGxtZW50XG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvblJlamVjdGVkXSBleGVjdXRlZCBvbiByZWplY3Rpb25cbiAgICogQHJldHVybiB7UHJvbWlzZX0gdGhlIHVuZGVybHlpbmcgcHJvbWlzZVxuICAgKi9cbiAgdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9taXNlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYWluIGFuIGFjdGlvbiB0byBvY2N1ciBhZnRlciB0aGlzIHByb21pc2UgaXMgcmVqZWN0ZWQuIE5vIG1vcmVcbiAgICogbm9uLXByb21pc2Utc3BlY2lmaWMgbGFuZ3VhZ2UgY2hhaW5zIGNhbiBvY2N1ciBhZnRlciB0aGlzLlxuICAgKlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb25SZWplY3RlZF0gZXhlY3V0ZWQgb24gcmVqZWN0aW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IHRoZSB1bmRlcmx5aW5nIHByb21pc2VcbiAgICovXG4gIGNhdGNoKG9uUmVqZWN0ZWQpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvbWlzZS5jYXRjaChvblJlamVjdGVkKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4dGVuZGFibGVQcm9taXNlOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
