import Ember from 'ember';
import _ from "lodash/lodash";
export default Ember.Component.extend({
  gestures:Ember.inject.service(),
  classNames:['event-info-panel'],
  tagName:'div',
  event:null,

  filteredEvent : Ember.computed('event',function(){
    let events =   [
      // MouseEvent
      'bubbles',
      'cancelable',
      'view',
      'detail',
      'screenX',
      'screenY',
      'clientX',
      'clientY',
      'ctrlKey',
      'altKey',
      'shiftKey',
      'metaKey',
      'button',
//      'relatedTarget',
      // DOM Level 3
      'buttons',
      // PointerEvent
      'pointerId',
      'width',
      'height',
      'pressure',
      'tiltX',
      'tiltY',
      'pointerType',
      'hwTimestamp',
      'isPrimary',
      // event instance
      'type',
  //    'target',
  //    'currentTarget',
      'which',
      'pageX',
      'pageY',
      'timeStamp',
      // gesture addons
      'preventTap',
      'tapPrevented',
      '_source'
    ];
    let originalEventProperties = [
      "pageX",
      "pageY",
      "x",
      "y",
      "screenX",
      "screenY",
      "clientX",
      "clientY"
    ];

    var originalEvent = this.get('event') ? this.get('event').originalEvent : {};
      var originalEventX = _.pick(originalEvent,originalEventProperties);
    console.log(_.keys(this.get('event')));


  return _.merge(_.pick(this.get('event'),events),originalEventX);
  }),

  didInsertElement:function(){
    var self = this;
    this.get('gestures').addEventListener(this.get('element'),'tap',function(e){
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      self.set('event',e);
    });
    this.get('gestures').addEventListener(this.get('element'),'down',function(e){
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
 //     self.set('event',e);
    });
    this.get('gestures').addEventListener(this.get('element'),'up',function(e){
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
  //    self.set('event',e);
    });

    this.get('gestures').addEventListener(this.get('element'),'hold',function(e){
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
 //     self.set('event',e);
    });
    this.get('gestures').addEventListener(this.get('element'),'holdpulse',function(e){
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
  //    self.set('event',e);
    });
    this.get('gestures').addEventListener(document,'track',function(e){
      self.set('event',e);
    });
    this.get('gestures').addEventListener(document,'down',function(e){
      self.set('event',e);
    });
    this.get('gestures').addEventListener(document,'up',function(e){
      self.set('event',e);
    });
    this.get('gestures').addEventListener(document,'trackstart',function(e){
      self.set('event',e);
    });
    this.get('gestures').addEventListener(document,'trackend',function(e){
      self.set('event',e);
    });
    this.get('gestures').addEventListener(document,'hold',function(e){
      self.set('event',e);
    });
    this.get('gestures').addEventListener(document,'holdpulse',function(e){
      self.set('event',e);
    });
    this.get('gestures').addEventListener(document,'release',function(e){
      self.set('event',e);
    });

  }
});
