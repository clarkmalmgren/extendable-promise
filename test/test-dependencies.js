import sinon from 'sinon';

import chai from 'chai';
import chaiString from 'chai-string';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';
import 'sinon-as-promised';

const expect = chai.expect;

chai.use(chaiString);
chai.use(sinonChai);
chai.use(chaiAsPromised);

chai.should();


export { expect, sinon };