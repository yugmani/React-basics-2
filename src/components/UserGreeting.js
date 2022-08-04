import React, { Component } from 'react';

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    const myStyle = this.state.isLoggedIn ? 'logged' : 'not-logged';

    // Using if ... else block
    // *************************
    // if (this.state.isLoggedIn) {
    //   return (
    //     <div>
    //       <h1>Conditional Rendering</h1>
    //       <div className="logged">Welcome Yoog</div>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <h1>Conditional Rendering</h1>
    //       <div className="not-logged">Welcome Guest</div>
    //     </div>
    //   );
    // }

    // NOTE:
    // we cannot include if ... else statement iside return block because jsx is just a syntactic sugar for function calls and object construction.

    // using Element Variables
    // *************************
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div className="logged">Welcome Yoog</div>;
    // } else {
    //   message = <div className="not-logged">Welcome Guest</div>;
    // }

    // return (
    //   <div>
    //     <h1>Conditional Rendering</h1>
    //     {message}
    //   </div>
    // );

    // Using Ternary Operator
    // *************************
    return (
      <div className="conditional-render">
        <h1>Conditional Rendering</h1>
        {this.state.isLoggedIn ? (
          <div className={`${myStyle} pad10`}>Welcome {this.props.name}</div>
        ) : (
          <div className={myStyle}>Welcome Guest</div>
        )}
      </div>
    );

    // Using Short Circuit method
    // *************************
    // return (
    //   <div>
    //     <h1>Conditional Rendering</h1>
    //     {this.state.isLoggedIn && <div className="logged">Welcome Yoog</div>}
    //   </div>
    // );
  }
}

export default UserGreeting;
