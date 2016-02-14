'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extendablePromise = require('./extendable-promise');

var _extendablePromise2 = _interopRequireDefault(_extendablePromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var RunnablePromise = function (_ExtendablePromise) {
  _inherits(RunnablePromise, _ExtendablePromise);

  /**
   * Constructor
   */

  function RunnablePromise() {
    var _this;

    _classCallCheck(this, RunnablePromise);

    return _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RunnablePromise).call(this, function (resolve, reject) {
      setTimeout(function () {
        _this._execute(resolve, reject);
      }, 1);
    }));
  }

  /**
   * Executes the _run() function and then captures the necessary information to determine how to handle delegation
   * to the underlying promise.
   *
   * @param {function} resolve invoke this function to resolve the promise
   * @param {function} reject invoke this function to reject the promise
   * @private
   */


  _createClass(RunnablePromise, [{
    key: '_execute',
    value: function _execute(resolve, reject) {
      try {
        var response = this._run(resolve, reject);

        if (response && typeof response.then == 'function') {
          response.then(function (data) {
            return resolve(data);
          }).catch(function (error) {
            return reject(error);
          });
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

  }, {
    key: '_run',
    value: function _run(resolve, reject) {
      reject(new TypeError('Must override start function'));
    }
  }]);

  return RunnablePromise;
}(_extendablePromise2.default);

exports.default = RunnablePromise;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bm5hYmxlLXByb21pc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBdUJNOzs7Ozs7O0FBS0osV0FMSSxlQUtKLEdBQWM7OzswQkFMVixpQkFLVTs7MEVBTFYsNEJBTUksVUFBQyxPQUFELEVBQVUsTUFBVixFQUFxQjtBQUN6QixpQkFBVyxZQUFNO0FBQUUsY0FBSyxRQUFMLENBQWMsT0FBZCxFQUF1QixNQUF2QixFQUFGO09BQU4sRUFBMkMsQ0FBdEQsRUFEeUI7S0FBckIsR0FETTtHQUFkOzs7Ozs7Ozs7Ozs7ZUFMSTs7NkJBbUJLLFNBQVMsUUFBUTtBQUN4QixVQUFJO0FBQ0YsWUFBSSxXQUFXLEtBQUssSUFBTCxDQUFVLE9BQVYsRUFBbUIsTUFBbkIsQ0FBWCxDQURGOztBQUdGLFlBQUksWUFBWSxPQUFPLFNBQVMsSUFBVCxJQUFpQixVQUF4QixFQUFvQztBQUNsRCxtQkFDRyxJQURILENBQ1EsVUFBQyxJQUFEO21CQUFVLFFBQVEsSUFBUjtXQUFWLENBRFIsQ0FFRyxLQUZILENBRVMsVUFBQyxLQUFEO21CQUFXLE9BQU8sS0FBUDtXQUFYLENBRlQsQ0FEa0Q7U0FBcEQ7T0FIRixDQVFFLE9BQU8sQ0FBUCxFQUFVO0FBQ1YsZUFBTyxDQUFQLEVBRFU7T0FBVjs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBZ0JDLFNBQVMsUUFBUTtBQUNwQixhQUFPLElBQUksU0FBSixDQUFjLDhCQUFkLENBQVAsRUFEb0I7Ozs7U0E1Q2xCOzs7a0JBa0RTIiwiZmlsZSI6InJ1bm5hYmxlLXByb21pc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXh0ZW5kYWJsZVByb21pc2UgZnJvbSAnLi9leHRlbmRhYmxlLXByb21pc2UnO1xuXG4vKipcbiAqIEV4dGVuZGFibGUgYWJzdHJhY3QgY2xhc3MgdGhhdCBwcm92aWRlcyBwcm9taXNlIGZ1bmN0aW9uYWxpdHkuIEltcGxlbWVudGF0aW9ucyBtdXN0IG92ZXJyaWRlIGFuZCBpbXBsZW1lbnRcbiAqIHRoZSBgX3J1bihyZXNvbHZlLCByZWplY3QpYCBmdW5jdGlvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogY2xhc3MgUnVubmFibGVCdWlsZGVyUHJvbWlzZSBleHRlbmRzIFJ1bm5hYmxlUHJvbWlzZSB7XG4gKlxuICogICBuYW1lKG5hbWUpIHtcbiAqICAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAqICAgICByZXR1cm4gdGhpcztcbiAqICAgfVxuICpcbiAqICAgX3J1bihyZXNvbHZlLCByZWplY3QpIHtcbiAqICAgICByZXNvbHZlKHRoaXMuX25hbWUpO1xuICogICB9XG4gKiB9XG4gKlxuICogbmV3IFJ1bm5hYmxlQnVpbGRlclByb21pc2UoKVxuICogICAgLm5hbWUoJ0dlb3JnZSBXYXNoaW5ndG9uJylcbiAqICAgIC50aGVuKChuYW1lKSA9PiB7IGNvbnNvbGUubG9nKGBOYW1lOiAke25hbWV9YCkgfSApO1xuICovXG5jbGFzcyBSdW5uYWJsZVByb21pc2UgZXh0ZW5kcyBFeHRlbmRhYmxlUHJvbWlzZSB7XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5fZXhlY3V0ZShyZXNvbHZlLCByZWplY3QpOyB9LCAxKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeGVjdXRlcyB0aGUgX3J1bigpIGZ1bmN0aW9uIGFuZCB0aGVuIGNhcHR1cmVzIHRoZSBuZWNlc3NhcnkgaW5mb3JtYXRpb24gdG8gZGV0ZXJtaW5lIGhvdyB0byBoYW5kbGUgZGVsZWdhdGlvblxuICAgKiB0byB0aGUgdW5kZXJseWluZyBwcm9taXNlLlxuICAgKlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSByZXNvbHZlIGludm9rZSB0aGlzIGZ1bmN0aW9uIHRvIHJlc29sdmUgdGhlIHByb21pc2VcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gcmVqZWN0IGludm9rZSB0aGlzIGZ1bmN0aW9uIHRvIHJlamVjdCB0aGUgcHJvbWlzZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2V4ZWN1dGUocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCByZXNwb25zZSA9IHRoaXMuX3J1bihyZXNvbHZlLCByZWplY3QpO1xuXG4gICAgICBpZiAocmVzcG9uc2UgJiYgdHlwZW9mIHJlc3BvbnNlLnRoZW4gPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXNwb25zZVxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiByZXNvbHZlKGRhdGEpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJlamVjdChlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRWl0aGVyIG5lZWRzIHRvIHJldHVybiBhIHByb21pc2Ugb3IgY2FsbCByZXNvbHZlL3JlamVjdC4gSWYgdGhpcyByZXR1cm5zIGFcbiAgICogcHJvbWlzZSwgUnVubmFibGVQcm9taXNlIHdpbGwgYXV0b21hdGljYWxseSB3aXJlIGl0IHVwIHNvIHRoYXQgdGhlIHByb21pc2UgcmVzb2x2ZXMgd2hlblxuICAgKiB0aGUgcmV0dXJuZWQgcHJvbWlzZSByZXNvbHZlcyBhbmQgcmVqZWN0cyB3aGVuIHRoZSByZXR1cm5lZCBwcm9taXNlIHJlamVjdHMuXG4gICAqXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHJlc29sdmUgaW52b2tlIHRoaXMgZnVuY3Rpb24gdG8gcmVzb2x2ZSB0aGUgcHJvbWlzZVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSByZWplY3QgaW52b2tlIHRoaXMgZnVuY3Rpb24gdG8gcmVqZWN0IHRoZSBwcm9taXNlXG4gICAqXG4gICAqIEBhYnN0cmFjdFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3J1bihyZXNvbHZlLCByZWplY3QpIHtcbiAgICByZWplY3QobmV3IFR5cGVFcnJvcignTXVzdCBvdmVycmlkZSBzdGFydCBmdW5jdGlvbicpKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJ1bm5hYmxlUHJvbWlzZTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
