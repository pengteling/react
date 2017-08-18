//var EventEmitter = require('events').EventEmitter;
import {EventEmitter} from 'events'
//var assign = require('object-assign');
import assign from 'object-assign'
import { fromJS } from 'immutable'

export default assign({}, EventEmitter.prototype, {
  items: ['one','two'],

  getAll: function () {
    return fromJS(this.items);
  },

  addNewItemHandler: function (text) {
    this.items.push(text);
  },

  emitChange: function () {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }
})
