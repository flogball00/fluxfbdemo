var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('react/lib/Object.assign');

const CHANGE_EVENT = "change";

var _state = {
    notes: [],
    user: ''
};

var addNote = function(note) {
    _state.notes.push(note);
};

var changeUser = function(obj) {
    _state.user = obj.user;
    _state.notes = obj.notes;
};

var removeNote = function(index){

};

var notesStore = objectAssign({}, EventEmitter.prototype, {
    addChangeListener: function(cb){
        this.on(CHANGE_EVENT, cb);
    },
    removeChangeListener: function(cb){
        this.removeListener(CHANGE_EVENT, cb);
    },
    getState: function(){
        return _state;
    }
});

AppDispatcher.register(function(payload){
    var action = payload.action;
    switch (action.actionType) {
        case appConstants.ADD_NOTE:
            addNote(action.data);
            notesStore.emit(CHANGE_EVENT);
            break;
        case appConstants.CHANGE_USER:
            changeUser(action.data);
            notesStore.emit(CHANGE_EVENT);
            break;
        default :
            return true;
    }
});

module.exports = notesStore;