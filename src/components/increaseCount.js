import React from 'react';
import PropTypes from 'prop-types';

class IncreaseCount extends React.Component {
  //* 宣告 Props
  static get propTypes() {
    return {
      count: PropTypes.number,
      isLoggedIn: PropTypes.bool,
      isShow: PropTypes.bool,
    };
  }
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.count || 0,
      isLoggedIn: this.props.isLoggedIn || false,
      isShow: this.props.isShow === false ? false : true,
    };

    this.increase = this.increase.bind(this);
    this.stop = this.stop.bind(this); //* 可以直接在這綁定，或是在 DOM 使用 onClick={() => this.stop()}
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

  render() {
    //* 隱藏 Component
    if (!this.state.isShow) {
      return null;
    }

    const isLoggedIn = this.state.isLoggedIn;
    let statusText = '未登入';
    if (isLoggedIn) {
      statusText = '已登入';
    }

    return (
      <div>
        <p>
          count: {this.state.count}
          <button onClick={this.stop} style={{ marginLeft: '10px' }}>
            stop
          </button>
          <span>登入狀態: {statusText} </span>
        </p>
      </div>
    );
  }
}

export default IncreaseCount;
