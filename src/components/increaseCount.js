import React from 'react';
import PropTypes from 'prop-types';

class IncreaseCount extends React.Component {
  //* 宣告 Props
  static get propTypes() {
    return {
      count: PropTypes.number,
      isLoggedIn: PropTypes.bool,
      isShow: PropTypes.bool,
      list: PropTypes.array,
    };
  }
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.count || 0,
      isLoggedIn: this.props.isLoggedIn || false,
      isShow: this.props.isShow === false ? false : true,
      list: this.props.list || [],
      username: 'username',
      age: 20,
    };

    this.increase = this.increase.bind(this);
    this.stop = this.stop.bind(this); //* 可以直接在這綁定，或是在 DOM 使用 onClick={() => this.stop()}
    this.changeInputHandler = this.changeInputHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  //* componentDidMount() 方法會在 component 被 render 到 DOM 之後才會執行
  componentDidMount() {
    this.intervalCount = window.setInterval(() => this.increase(), 1000);
  }
  //* componentWillUnmount() 方法 Component 即將從實體 DOM 階段移除「之前」觸發
  componentWillUnmount() {
    window.clearInterval(this.intervalCount);
  }

  increase() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  stop() {
    window.clearInterval(this.intervalCount);
  }

  changeInputHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitHandler(event) {
    event.preventDefault();
    window.alert(`submit username: ${this.state.username} age: ${this.state.age}`);
  }

  render() {
    //* 測試隱藏 Component
    if (!this.state.isShow) {
      return null;
    }

    //* 測試根據條件更改變數
    const isLoggedIn = this.state.isLoggedIn;
    let statusText = '未登入';
    if (isLoggedIn) {
      statusText = '已登入';
    }

    //* 測試迴圈 list
    const list = this.state.list;
    const elementList = list.map((item, index) => <li key={index}>{item}</li>);

    //* list.length > 0 才顯示
    const listRender =
      list.length > 0 ? (
        <div>
          <h3>迴圈測試</h3>
          <ul>{elementList}</ul>
        </div>
      ) : null;

    return (
      <div>
        <p>
          count: {this.state.count}
          <button onClick={this.stop} style={{ marginLeft: '10px' }}>
            stop
          </button>
          <span>登入狀態: {statusText} </span>
        </p>
        {listRender}
        <form onSubmit={this.submitHandler}>
          <h3>表單測試</h3>
          <input type="text" name="username" value={this.state.username} onChange={this.changeInputHandler} />
          <input type="number" name="age" value={this.state.age} onChange={this.changeInputHandler} />
          <button type="submit">送出</button>
        </form>
      </div>
    );
  }
}

export default IncreaseCount;
