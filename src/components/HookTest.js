import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

//* set PropTypes
HookTest.propTypes = {
  count: PropTypes.number,
};

function HookTest(props) {
  const [count, setCount] = useState(props.count || 0);

  /**
   ** 等同於 componentDidMount & componentWillUnmount 集合體
   ** render 後執行，離開後會執行 return 的 function
   */
  useEffect(() => {
    document.title = `count: ${count}`;

    //* 因使用到 setCount 改變 state，所以會一直執行到 useEffect
    //* 重新 render 的時候會執行 return 的 clearInterval
    const intervalCount = window.setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => {
      window.clearInterval(intervalCount);
    };
  });

  return (
    <div>
      <p>
        count: {count}
        <button onClick={() => setCount(count + 1)}>count + 1</button>
      </p>
    </div>
  );
}

export default HookTest;
