/* global $ */
import Ember from 'ember';
import scope from './gestures/scope';
import targetfind from './gestures/targetfind';
import touchaction from './gestures/touch-action';
import eventfactory from './gestures/eventFactory';
import pointermap from './gestures/pointermap';
import dispatcher from './gestures/dispatcher';
import mouse from './gestures/mouse';
import touch from './gestures/touch';
import ms from './gestures/ms';
import pointer from './gestures/pointer';
import platformevents from './gestures/platform-events';
import track from './gestures/track';
import hold from './gestures/hold';
import tap from './gestures/tap';
import pinch from './gestures/pinch';

Ember.EventDispatcher.reopen({
  setup: function () {
    var events = this.get('events'),
      ignoreEvents = [ 'touchmove', 'touchstart', 'touchend', 'touchcancel', 'mouseenter', 'mouseleave', 'focusin', 'focusout' ];

    Ember.$.each(ignoreEvents, function ( index, value ) {
      events[ value ] = null;
      delete events[ value ];
    });
    this.set('events', events);

    return this._super(Array.prototype.slice.call(arguments));
  },
  canDispatchToEventManager: false
});


/**
 * @license
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

console.log('building Gestures');



export function initialize( application ) {

  application.register('service:gestures', window.PolymerGestures, { instantiate: false });
  // application.inject('controller', 'gestures', 'service:gestures');
}

export default {
  name: 'nullbase-gestures',
  initialize
};
