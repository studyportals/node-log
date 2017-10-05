"use strict";

/**
 * @module @studyportals/log
 */

const gutil = require('gulp-util');

/**
 * Default options for verbosity
 * @static
 * @enum {number}
 * @type {{
 * 	  NONE: number,
 * 	  ERROR: number,
 * 	  WARNING: number,
 * 	  INFO: number,
 * 	  DEBUG: number,
 * 	  ALL: number
 * }}
 */
const VERBOSITY = {
	NONE: 0,
	ERROR: 1,
	WARNING: 2,
	INFO: 3,
	DEBUG: 4,
	ALL: 4,
};

let verbosity = process.env.PRTL_VERBOSITY || VERBOSITY.INFO;

/**
 * Set the verbosity level.
 *
 * The default verbosity level is: `process.env.PRTL_VERBOSITY || VERBOSITY.INFO;`
 *
 * @param {(VERBOSITY|number)} x - Verbosity level
 * @static
 * @return void
 */
const setVerbosity = function(x){
	verbosity = x;
};

/**
 * Debug message (gray)
 * @param {string} [message]
 * @static
 * @return boolean
 */
const debug = function(message){

	if(verbosity <= VERBOSITY.INFO){

		return false;
	}

	if(message && typeof message === 'string'){
		message = gutil.colors.gray(message);
	}
	return output(message);
};

/**
 * Info message (white)
 * @param {string} [message]
 * @static
 * @return boolean
 */
const info = function(message){
	if(verbosity <= VERBOSITY.WARNING){

		return false;
	}

	if(message && typeof message === 'string'){
		message = gutil.colors.white(message);
	}
	return output(message);
};

/**
 * Warning message (yellow)
 * @param {string} [message]
 * @static
 * @return boolean
 */
const warning = function(message){
	if(verbosity <= VERBOSITY.ERROR){

		return false;
	}

	if(message && typeof message === 'string'){
		message = gutil.colors.yellow(message);
	}
	return output(message);
};

/**
 * Error message (red)
 * @param {string} [message]
 * @static
 * @return boolean
 */
const error = function(message){
	if(verbosity <= VERBOSITY.NONE){

		return false;
	}

	if(message && typeof message === 'string'){
		message = gutil.colors.red(message);
	}
	return output(message);
};

/**
 * Message
 * @param {string} message
 * @return boolean
 * @private
 */
const output = function(message){
	if(message){

		gutil.log(message);
	}
	return true;
};

module.exports = {
	VERBOSITY,
	setVerbosity,
	debug,
	info,
	warning,
	error
};