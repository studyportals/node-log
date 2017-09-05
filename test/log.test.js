"use strict";

const log = require('./../');

it('It should show different kind of error messages without throwing an exception.', () =>{

	log.setVerbosity(log.VERBOSITY.ALL);

	log.debug('Debug message');
	log.debug({
		key: 'value'
	});
	log.info('Info message');
	log.warning('Warning message');
	log.error('Error message');
});