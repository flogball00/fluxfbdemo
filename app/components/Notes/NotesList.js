var React = require('react');
var noteActions = require('../../actions/noteActions');
var NotesList = React.createClass({
    remove(key) {
        noteActions.removeNote(key, this.props.username);
    },
    render: function() {
        console.log('note',this.props.notes)
        var notes = this.props.notes.map(function(note, index) {
            return <li className="list-group-item" key={index}> {note.note}
                <button className="btn btn-danger pull-right" onClick={this.remove.bind(null, note.key)}>X</button>
            </li>
        }.bind(this));

        return (
            <ul className="list-group">
                {notes}
            </ul>
        )
    }
});

module.exports = NotesList;