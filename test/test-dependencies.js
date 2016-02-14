import sinon from 'sinon';

import chai from 'chai';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';
import 'sinon-as-promised';

const expect = chai.expect;

chai.use(sinonChai);
chai.use(chaiAsPromised);

chai.should();


export { expect, sinon };