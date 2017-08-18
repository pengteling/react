//var AppDispatcher = require('../dispatcher/AppDispatcher');
import AppDispatcher from '../dispatcher/AppDispatcher'

export default {

  addNewItem: function (text) {
    AppDispatcher.dispatch({
      actionType: 'ADD_NEW_ITEM',
      text: text
    });
  },

};
