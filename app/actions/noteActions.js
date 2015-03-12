var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var firebaseUtils = require('../utils/FirebaseUtils');


var noteActions = {
    addNote: function (noteObj) {
        AppDispatcher.handleAction({
            actionType: appConstants.ADD_NOTE,
            data: noteObj.note
        });
        firebaseUtils.addNote(noteObj);
    },
    changeUser: function(username){
        firebaseUtils.homeInstance().child(username).on('value', function(snapshot){
            var notes=[]
            Object.keys(snapshot.val()).forEach(function(key) {
                notes.push({key: key, note: snapshot.val()[key]})
            });
            console.log('note 1',notes)

            AppDispatcher.handleAction({
                actionType: appConstants.CHANGE_USER,
                data: {
                    user: username,
                    notes: notes
                }
            });
        });
    },
    removeNote: function(key, username) {
        firebaseUtils.homeInstance().child(username).child(key).remove();

    }
};

module.exports = noteActions;
