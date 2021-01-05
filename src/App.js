import React from 'react';
import logo from './logo.svg';
import './App.scss';

import { useState, useLayoutEffect } from 'react';

//* Class Component (過時，但官方不會移除掉)
import IncreaseCount from './components/increaseCount';
import TemperatureInput from './components/TemperatureInput';
import PropsChildTest from './components/PropsChildTest';

//* Hook(官方推薦)
import HookTest from './components/HookTest';

//* Context
import { ThemeContext, themes } from './contexts/ThemeContext';
import ContextTest from './components/ContextTest';

//* Router
import Router from './components/Router';
import { useLocation, useHistory } from 'react-router-dom';

//* FetchData
import FetchDataTest from './components/FetchDataTest';

//* Transition
import TransitionTest from './components/TransitionTest';

//* i18n
import { useTranslation } from 'react-i18next';
import { loadLanguageAsync } from './i18n-lazy';

//* 測試溫度轉換，接近 vue 的 computed
function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function App() {
  const [scale, setScale] = useState('c');
  const [temperature, setTemperature] = useState(0);
  const celsius = scale === 'f' ? toCelsius(temperature) : temperature;
  const fahrenheit = scale === 'c' ? toFahrenheit(temperature) : temperature;
  const handleCelsiusChange = temperature => {
    setScale('c');
    setTemperature(temperature);
  };

  const handleFahrenheitChange = temperature => {
    setScale('f');
    setTemperature(temperature);
  };

  //* Context
  const [theme, setTheme] = useState(themes.light);

  //* Router
  //* 這裡使用 useLayoutEffect，會在 render 畫面之前執行
  //* 設置只有改變 route 才觸發的 useEffect (第二個參數: 只針對甚麼改變才觸發)
  const location = useLocation();
  const history = useHistory();
  useLayoutEffect(() => {
    console.log('[Change-Route]', location);

    if (location.state === undefined) {
      return;
    }

    //* 等同於 vue-router 裡的 meta，需於 Link 標籤的 to 內設置
    console.log('[location.state.auth]', location.state.auth);

    //* 設定條件轉址(auth)
    if (location.state.auth === true) {
      history.push({ pathname: '/' });
    }
  }, [location]);

  //* i18n
  const { t, i18n } = useTranslation();
  const handleLangChange = lang => {
    loadLanguageAsync(lang);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" width="100" />

          <Router />
        </header>

        <h2>基本測試 (props, state, event handle, loop, form)</h2>

        <IncreaseCount count={10} />
        <IncreaseCount count={100} isLoggedIn={true} list={[1, 2, 3]} />
        <IncreaseCount isShow={false} />

        <h2>
          測試數值轉換(溫度)，等同於 vue 的 computed <br />
          順便也使用了等同於 vue 的 emit 的事件傳遞 (onTemperatureChange)
        </h2>
        <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={handleCelsiusChange} />
        <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange} />

        <h2>測試 props.child ，等同於 vue 的 v-slot</h2>
        <PropsChildTest header={<p>props.header content</p>} footer={<p>props.footer content</p>}>
          <p>props.child content</p>
        </PropsChildTest>

        <h2>Hook</h2>
        <HookTest count={100} />

        <h2>Context (全局狀態)</h2>
        <div>
          theme: {JSON.stringify(theme)}
          <button onClick={() => setTheme(theme == themes.light ? themes.dark : themes.light)}>切換</button>
          <ContextTest />
        </div>

        <h2>FetchData</h2>
        <FetchDataTest />

        <h2>Transition</h2>
        <TransitionTest />

        <h2>i18n</h2>
        <p>
          {i18n.language}: {t('hi')} <br />
          {i18n.language}: {t('test')}
        </p>
        <button onClick={() => handleLangChange(i18n.language == 'enUs' ? 'zhTw' : 'enUs')}>變更語系</button>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
