"use strict";

const log = require('./../');
const chai = require('chai');

describe('It should show different kind of error messages without throwing an exception.', function(){

	it('It should show all messages.', () =>{

		log.setVerbosity(log.VERBOSITY.DEBUG);

		chai.expect(log.debug()).to.be.true;
		chai.expect(log.debug('Debug message')).to.be.true;
		chai.expect(log.debug({key: 'value'})).to.be.true;
		chai.expect(log.info('Info message')).to.be.true;
		chai.expect(log.warning('Warning message')).to.be.true;
		chai.expect(log.error('Error message')).to.be.true;
	});

	it('It should not show debug messages.', () =>{

		log.setVerbosity(log.VERBOSITY.INFO);

		chai.expect(log.debug('Debug message')).to.be.false;
		chai.expect(log.debug({key: 'value'})).to.be.false;
		chai.expect(log.info('Info message')).to.be.true;
		chai.expect(log.warning('Warning message')).to.be.true;
		chai.expect(log.error('Error message')).to.be.true;
	});
});