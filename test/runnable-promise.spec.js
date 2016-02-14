import { expect, sinon } from './test-dependencies';
import RunnablePromise from '../src/runnable-promise';

class SimpleRunnablePromise extends RunnablePromise {

  thatFails() {
    this._fails = true;
    return this;
  }

  withPayload(payload) {
    this._payload = payload;
    return this;
  }

  _run(resolve, reject) {
    if (this._fails) {
      reject(new Error(this._payload));
    } else {
      resolve(this._payload);
    }
  }
}

class PromiseRunnablePromise extends RunnablePromise {

  thatFails() {
    this._fails = true;
    return this;
  }

  withPayload(payload) {
    this._payload = payload;
    return this;
  }

  _run() {
    return new Promise((resolve, reject) => {
      if (this._fails) {
        reject(new Error(this._payload));
      } else {
        resolve(this._payload);
      }
    })
  }
}

describe('RunnablePromise', () => {

  describe('using just the run function', () => {

    it('should support success', () => {
      return new SimpleRunnablePromise().withPayload('apple')
        .should.eventually.equal('apple');
    });

    it('should support failure', () => {
      return new SimpleRunnablePromise().thatFails().withPayload('banana')
        .should.eventually.be.rejectedWith(Error, 'banana');
    });

  });

  describe('returning a promise of its own', () => {

    it('should support success', () => {
      return new PromiseRunnablePromise().withPayload('apple')
        .should.eventually.equal('apple');
    });

    it('should support failure', () => {
      return new PromiseRunnablePromise().thatFails().withPayload('banana')
        .should.eventually.be.rejectedWith(Error, 'banana');
    });

  });

  describe('base class', () => {

    it('cannot be called as a function', () => {
      expect(RunnablePromise).to.throw(TypeError);
    });

    it('will automatically fail if start is not overwritten', () => {
      return new RunnablePromise().should.eventually.be.rejectedWith(TypeError, 'Must override start function');
    });
  });

});