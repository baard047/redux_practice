import React, { Component } from "react";
import { connect } from 'react-redux'
import { createPost, showAlert } from "../redux/actions";
import { Alert } from "./alert";

class PostForm extends Component {
    state = {
        title: ''
    };

    submitHandler = event => {
        event.preventDefault();
        const { title } = this.state;

        if( !title.trim() ) {
            return this.props.showAlert('Title cannot be empty')
        }

        const newPost = {
            title, id: Date.now().toString()
        };
        this.props.createPost(newPost);
        this.setState({title: ''});
    };

    changeInputHandler = event => {
        //this is universal solution for managing multiple inputs
        //in this code below we concat prev state with a new one, which is set by
        //input value ( input id must be the same as state field)
        event.persist();
        this.setState(prev => ({...prev, ...{
                [event.target.id]: event.target.value
            }
        }))
    };

    render() {
        return (
            <form onSubmit={ this.submitHandler }>

                { this.props.alert && <Alert text={this.props.alert} />}

                <div className="form-group">
                    <label htmlFor="title">Post title </label>
                    <input type="text" className="form-control"
                           id="title"
                           value={ this.state.title }
                           onChange={ this.changeInputHandler }/>
                </div>
                <button className="btn btn-success" type="submit">Create</button>
            </form>
        );
    }
}

const mapDispatchToProps = {
    createPost, showAlert
};

const mapStateToProps = state => ( { alert: state.app.alert } );

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);