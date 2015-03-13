var React = require('react');
var noteActions = require('../../actions/noteActions');
var NotesList = React.createClass({
    remove(key) {
        noteActions.removeNote(key, this.props.username);
    },
    render: function() {
        var styles = {
            button: {
                height: 10,
                width: 10,
                color: "red",
                cursor: "pointer",
                textDecoration: "none"
            }
        }
        var notes = this.props.notes.map(function(note, index) {
            return <li className="list-group-item" key={index}> {note.note}
                <a className="pull-right" style={styles.button} onClick={this.remove.bind(null, note.key)}>X</a>
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