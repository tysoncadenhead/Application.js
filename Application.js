/*
 * ApplicationJS 1.0
 * 
 * Copyright 2010, Tyson Cadenhead
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * 
 * Date: Wed Dec 15 19:04:53 2010 -0500
 */

var Application = function(){
	
	/*
	 * @object listeners
	 * @description This object holds all of the listeners
	 */
	var listeners = {};
	
	/*
	 * @function addListener
	 * @description Adds an event listener
	 * @param name The name of the listener
	 * @param fn The function to fire when the event is called
	 */
	this.addListener = function(name, fn){
		if (!listeners[name]){
			listeners[name] = [];
		}
		return listeners[name][listeners[name].length++] = {
			fn: fn
		};
	};
	
	/*
	 * @function removeListener
	 * @description Removes an event listener
	 * @param Event The event to remove.  This will be an object.
	 */
	this.removeListener = function(event){
		delete event.fn;
	};
	
	/*
	 * @function removeAllListeners
	 * @description Removes all listeners for a certain name
	 * @param name
	 */
	this.removeAllListeners = function(name){
		for (var i = 0; i < listeners[name].length; i++){
			this.removeListener(listeners[name][i]);
		}
	};
	
	/*
	 * @function fireEvent
	 * @description Announces a new event
	 * @param name The name of the event to fire
	 * @param params An object with any params needed inside of it
	 */
	this.fireEvent = function(name, params){
		
		// Loops through each listener to call it
		if (listeners[name]) {
			for (var i = 0; i < listeners[name].length; i++) {
			
				// Checks to make sure the listener has not been removed
				if (listeners[name][i] && listeners[name][i].fn) {
				
					// Attempt to call the listeners
					try {
						listeners[name][i].fn(params, listeners[name][i]);
					} 
					
					// Error Handling
					catch (e) {
						if (this.onError) {
							this.onError(e);
						}
						else {
							throw (e);
						}
					}
				}
			}
		}
	};
	
};
