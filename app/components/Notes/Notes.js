var React = require('react');
var notesStore = require('../../stores/notesStore');
var AddNote = require('../Notes/AddNote');
var NotesList = require('../Notes/NotesList');
var noteActions = require('../../actions/noteActions');


var Notes = React.createClass({
    getInitialState(){
        return{
            notes: notesStore.getState().notes
        }
    },
    componentWillReceiveProps(obj) {
      noteActions.changeUser(obj.username);
    },
    _onChange: function() {
        this.setState({
            notes: notesStore.getState().notes
        });
    },
    componentDidMount: function() {
        noteActions.changeUser(this.props.username);
        notesStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        notesStore.removeChangeListener(this._onChange);

    },
    render: function(){
        return (
            <div>
                <h3> Notes for {this.props.username} </h3>
                <AddNote username={this.props.username} />
                <NotesList notes={this.state.notes} username={this.props.username}/>
            </div>
        )
    }
});

module.exports = Notes;