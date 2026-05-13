import React, { Component } from 'react';

export default class App extends Component {
  state = {
    message: '',       // Stores the GET response
    post: '',          // Stores the user input
    responseToPost: '' // Stores the POST response
  };

  // PART I: Fetch message on component mount
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ message: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  // PART II: Handle Form Submit
  handleSubmit = async e => {
    e.preventDefault();
    
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    
    const body = await response.text(); // Use .text() because the server sends a plain string
    this.setState({ responseToPost: body });
  };

  render() {
    return (
      <div className="App" style={{ padding: '20px' }}>
        {/* PART I: Display GET message as a header */}
        <h1>{this.state.message}</h1>

        {/* PART II: Create Form */}
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
            placeholder="Type something here..."
          />
          <button type="submit">Submit</button>
        </form>

        {/* Display the POST response below the input field */}
        <p style={{ marginTop: '20px', color: 'blue' }}>{this.state.responseToPost}</p>
      </div>
    );
  }
}