import React, { Component } from 'react';
import RegularComp from './RegularComp';
import PureComp from './PureComp';

class ParentComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Yoog',
    };
  }

  //uncomment below to see the difference in rendering of pure component and regular components.
  componentDidMount() {
    // setInterval(() => {
    //   this.setState({
    //     name: 'Yoog',
    //   });
    // }, 10000);
  }
  render() {
    console.log('********** Parent Component **************');
    return (
      <div>
        Parent Component
        <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
