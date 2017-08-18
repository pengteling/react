//var Dispatcher = require('flux').Dispatcher;
import {Dispatcher} from 'flux'
const AppDispatcher = new Dispatcher();
// var ListStore = require('../stores/ListStore');
import ListStore from '../stores/ListStore'

AppDispatcher.register( action => {
  switch(action.actionType) {
    case 'ADD_NEW_ITEM':
      ListStore.addNewItemHandler(action.text);
      ListStore.emitChange();
      break;
    default:
      // no op
  }
})

module.exports = AppDispatcher;
