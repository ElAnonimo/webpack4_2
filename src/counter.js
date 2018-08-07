import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { css } from 'emotion';
import styled from 'react-emotion';
import styles from './main.scss';

console.log('styles:', styles);
console.log('styles.counter:', styles.counter);

const Fancy = styled('h1')`
  color: ${props => props.wild ? 'hotpink' : 'gold'}
`;

const red = '#f00';

const className = css`
  color: ${red};
  font-size: 3rem;
`;

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.addCount = this.addCount.bind(this);
  }

  addCount() {
    this.setState(() => ({ count: this.state.count + 1 }));
  }

  render() {
    const isWild = this.state.count % 2 === 0;
    return (
      <div className={styles.counter}>
        <h1 onClick={this.addCount} className={className}>Count: {this.state.count}</h1>
        <Fancy wild={isWild}>react-emotion lib allows to hook styles to component names</Fancy>
      </div>
    );
  }
}

export default hot(module)(Counter);
