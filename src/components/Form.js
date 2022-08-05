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
  render() {
    return (
      <form>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div>
          <label>Comments: </label>
          <textarea
            value={this.state.comments}
            onChange={this.handleCommentsChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="courses">Topic: </label>
          <select
            name="courses"
            id=""
            value={this.state.topic}
            onChange={this.handleTopicChange}
          >
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
      </form>
    );
  }
}

export default Form;
