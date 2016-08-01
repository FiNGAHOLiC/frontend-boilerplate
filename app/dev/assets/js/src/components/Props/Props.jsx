import React from 'react';
import styles from './Props.css';

class Props extends React.Component {
  constructor() {
    super();
    this.state = { val: Math.random() };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  componentWillMount() {
    console.log('componentWillMount');
    console.log('コンポーネントが実際のDOMに描画される前に一度だけ');
  }
  componentDidMount() {
    console.log('componentDidMount');
    console.log('コンポーネントが実際のDOMに描画された後に一度だけ');
  }
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
    console.log('初期表示時を除き、コンポーネントが受け取るpropsに更新があれば毎回');
  }
  componentWillUpdate() {
    console.log('componentWillUpdate');
    console.log('初期表示時を除き、コンポーネントが更新される直前に毎回');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
    console.log('初期表示時を除き、コンポーネントが更新された直後に毎回');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
    console.log('コンポーネントが実際のDOMから削除される前に一度だけ');
  }
  handleButtonClick() {
    this.setState({ val: Math.random() });
  }
  render() {
    return (
      <div className={styles.root}>
        {this.state.val}
        <button onClick={this.handleButtonClick}>click!</button>
      </div>
    );
  }
}

export default Props;
