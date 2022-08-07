import React, { Component } from 'react';
// import RegularComp from './RegularComp';
// import PureComp from './PureComp';
import MemoComp from './MemoComp';

class ParentComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Yoog',
    };
  }

  //uncomment below to see the difference in rendering of pure component and regular components.
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'Yoog',
      });
    }, 2000);
  }
  render() {
    console.log('********** Parent Component **************');
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name} />
        {/* <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} /> */}
      </div>
    );
  }
}

export default ParentComp;
