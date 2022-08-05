import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      comments: '',
      topic: 'react',
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  handleSubmit = (event) => {
    console.log(
      `${this.state.username} ${this.state.comments} ${this.state.topic}`
    );
    event.preventDefault();
  };

  render() {
    const { username, comments, topic } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="user-form">
        <div>
          <label htmlFor="username">Username: </label>
          <input
            name="username"
            type="text"
            value={username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div>
          <label>Comments: </label>
          <textarea
            value={comments}
            onChange={this.handleCommentsChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="courses">Topic: </label>
          <select
            name="courses"
            id=""
            value={topic}
            onChange={this.handleTopicChange}
          >
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
