var React = require('react');
var notesStore = require('../../actions/noteActions');

var AddNote = React.createClass({
    propTypes:{
      username: React.PropTypes.string.isRequired
    },
    handleSubmit(e){
        e.preventDefault();
        notesStore.addNote({
            user: this.props.username,
            note:this.refs.note.getDOMNode().value
        });
        this.refs.note.getDOMNode().value = '';
    },
    render: function(){
        return (
            <div className="input-group cushion">
                <input type="text" ref="note" className="form-control" placeholder="Add Note" />
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button" onClick={this.handleSubmit}>Submit</button>
                </span>
            </div>
        )
    }
});

module.exports = AddNote;