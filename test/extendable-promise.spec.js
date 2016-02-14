import { expect, sinon } from './test-dependencies';
import ExtendablePromise from '../src/extendable-promise';

class SimpleExtendablePromise extends ExtendablePromise {

  constructor(fail, payload) {

    super((resolve, reject) => {
      setTimeout(() => {
        this.done = true;

        if (fail) {
          reject(new Error(payload));
        } else {
          resolve(payload);
        }
      }, 5);
    });

    this.done = false;

  }

}

describe('ExtendablePromise', () => {

  it('should support success', () => {
    let promise = new SimpleExtendablePromise(false, 'apple');
    promise.done.should.be.false;

    return promise
      .should.eventually.equal('apple')
      .then(() => {
        return promise.done.should.be.true;
      });
  });

  it('should support failure', () => {
    let promise = new SimpleExtendablePromise(true, 'banana');
    promise.done.should.be.false;

    return promise
      .should.eventually.be.rejectedWith(Error, 'banana')
      .then(() => {
        return promise.done.should.be.true;
      });
  });

  it('class cannot be called as a function', () => {
    expect(ExtendablePromise).to.throw(TypeError);
  });

  it('will automatically fail if no executor is passed', () => {
    expect(() => { new ExtendablePromise() }).to.throw(TypeError, 'Must provide executor function');
  });

});