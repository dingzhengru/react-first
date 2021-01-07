- [Getting Started with Create React App](#getting-started-with-create-react-app)
  - [Component & props & state](#component--props--state)
  - [Form](#form)
  - [Hook](#hook)
    - [useState](#usestate)
    - [useEffect](#useeffect)
    - [useLayoutEffect](#uselayouteffect)
    - [useMemo](#usememo)
    - [useContext](#usecontext)
    - [useReducer](#usereducer)
    - [custom hook (ex: useFriendStatus)](#custom-hook-ex-usefriendstatus)
  - [Redux](#redux)
  - [Context](#context)
  - [Router](#router)
    - [設置 state](#設置-state)
    - [監測 route 變化](#監測-route-變化)
    - [Multiple Contexts](#multiple-contexts)
  - [scss](#scss)
  - [Proxy](#proxy)
    - [在開發環境設定 Proxy](#在開發環境設定-proxy)
  - [Transition](#transition)
  - [i18n](#i18n)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Component & props & state

- state: 是讓元件控制自己的狀態
- props: 是讓外部對元件自己進行配置
- props 或 state 被改變時才會更新 Virtual DOM

## Form

建議使用套件處理

- [formik](https://github.com/formium/formik)
- [react-hook-form (推)](https://github.com/react-hook-form/react-hook-form)

## Hook

2019 年新增用來代替原本 class 的功能，**官方推薦使用 Hook 來代替 class**

- 參考: [我應該使用 Hook、Class 或是兩者兼具？](https://zh-hant.reactjs.org/docs/hooks-faq.html#should-i-use-hooks-classes-or-a-mix-of-both)

### useState

宣告 & 設置 state 的初始值與其修改的方法

```js
// 一般用法
const [count, setCount] = useState(0);

// 避免 render 重複執行用法(用於需要通過複雜的計算來獲得)
// 參考: https://zh-hant.reactjs.org/docs/hooks-reference.html#lazy-initial-state

const [obj, setObj] = useState(() => {
  return {
    a: 1,
    b: 2,
  };
});
```

### useEffect

單純是處理 Side Effects，可以用第二個參數選擇要對那些 state, props 反應
觸發時機是 render 之後

```js
// 第二個變數放 count，代表只有 count 變動時才會觸發
useEffect(() => {
  console.log(count);
}, [count]);
```

### useLayoutEffect

跟 useEffect 不同的地方只有觸發時機
是在 render 之前觸發的，useEffect 是 render 之後才觸發

### useMemo

用於回傳計算屬性，對應 vue 的 computed

```js
const countComputed = useMemo(() => {
  return count * 2;
});
```

### useContext

用於取得存在 context 的值，下面有說明 Context 是甚麼

### useReducer

參考 redux 的 reducer 所生出的 hook
可以用來結合 context 來模擬 redux 的全局狀態管理方式
但最大的缺點是沒有提供 combineReducers 可以分成各個 namespace

### custom hook (ex: useFriendStatus)

除了可以用 hook 創建 component 以外，也可以把 render 拿掉
單純提供複用功能的部分，相對於 vue 的 mixin

## Redux

全局狀態管理套件，等同於 vue 的 vuex 的地位
這部分練習是另外寫在: [這裡](https://github.com/dingzhengru/react-redux-test)
另外官方有提供 context api 這個全局狀態管理方法
可以視專案需求取決要用哪一個

## Context

官方提供的全局狀態管理方法，可以結合 useReducer 來達到跟 redux 類似的處理模式

參考文章: [useContext 與 useReducer 來做 Global State Manager](https://whien.medium.com/%E9%80%8F%E9%81%8E-react-usecontext-%E8%88%87-usereducer-%E4%BE%86%E5%81%9A-global-state-manager-bed30fb1f08b)

## Router

使用 react-router-dom 套件

參考: [官方文件](https://reactrouter.com/web/guides/quick-start)

### 設置 state

等同於 vue-router 設置 meta，需於 Link 標籤內寫入
設置範例: `<Link to={ state: { auth: true } }>`
設置完成後，可由 `const location = useLocation()` 的 location 取得

### 監測 route 變化

有一個條件，就是**必須在 BrowserRouter 標籤內**才可以使用 useLocation() 這類 hook
設置方法是利用 useEffect 的第二個參數，來決定只針對哪個 state, props 來觸發

參考: [useEffect 第二個參數說明](https://zh-hant.reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects)

設置方法(App.js)

```js
const location = useLocation();
useEffect(() => {
  console.log('[Change-Route]', location);
  console.log('[location.state.auth]', location.state.auth);
}, [location]); //* 只監控 location
```

### Multiple Contexts

多個 Context，參考以下官方做法，就直接巢狀塞進去即可

參考: https://reactjs.org/docs/context.html#consuming-multiple-contexts

```js
return (
  <ThemeContext.Provider value={theme}>
    <UserContext.Provider value={signedInUser}>
      <Layout />
    </UserContext.Provider>
  </ThemeContext.Provider>
);
```

## scss

`npm install node-sass@4` 即可

## Proxy

### 在開發環境設定 Proxy

參考: [官方](https://create-react-app.dev/docs/proxying-api-requests-in-development/#configuring-the-proxy-manually)

下載 `npm install http-proxy-middleware --save`
新增 src/setupProxy.js ，並填寫其內容即可，開發伺服器會自動載入其檔案

> Note: You do not need to import this file anywhere.
> It is automatically registered when you start the development server.

範例

```js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3080',
      changeOrigin: true,
    })
  );
};
```

## Transition

參考套件: https://github.com/reactjs/react-transition-group

## i18n

參考套件: [i18next](https://www.i18next.com/) & [react-i18next](https://github.com/i18next/react-i18next)
插入變數: https://www.i18next.com/translation-function/interpolation
