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
 * @param {string} message
 * @static
 * @return void
 */
const debug = function(message){
	if(verbosity > VERBOSITY.INFO){
		if(typeof message === 'string'){
			message = gutil.colors.gray(message);
		}
		output(message);
	}
};

/**
 * Info message (white)
 * @param {string} message
 * @static
 * @return void
 */
const info = function(message){
	if(verbosity > VERBOSITY.WARNING){
		if(typeof message === 'string'){
			message = gutil.colors.white(message);
		}
		output(message);
	}
};

/**
 * Warning message (yellow)
 * @param {string} message
 * @static
 * @return void
 */
const warning = function(message){
	if(verbosity > VERBOSITY.ERROR){
		if(typeof message === 'string'){
			message = gutil.colors.yellow(message);
		}
		output(message);
	}
};

/**
 * Error message (red)
 * @param {string} message
 * @static
 * @return void
 */
const error = function(message){
	if(verbosity > VERBOSITY.NONE){
		if(typeof message === 'string'){
			message = gutil.colors.red(message);
		}
		output(message);
	}
};

/**
 * Message
 * @param {string} message
 * @return void
 * @private
 */
const output = function(message){
	gutil.log(message);
};

module.exports = {
	VERBOSITY,
	setVerbosity,
	debug,
	info,
	warning,
	error
};