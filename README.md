- [Getting Started with Create React App](#getting-started-with-create-react-app)
  - [Component & props & state](#component--props--state)
  - [Form](#form)
  - [Hook](#hook)
    - [custom hook (ex: useFriendStatus)](#custom-hook-ex-usefriendstatus)
  - [Redux](#redux)
  - [Context](#context)
  - [Router](#router)
    - [設置 state](#設置-state)
    - [監測 route 變化](#監測-route-變化)
    - [Multiple Contexts](#multiple-contexts)
  - [scss](#scss)

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

- 參考: [我應該使用 Hook、Class 或是兩者兼具？](https://zh-hant.reactjs.org/docs/hooks-faq.html#should-i-use-hooks-classes-or-a-mix-of-both)

**官方推薦使用 Hook 來撰寫 component**

### custom hook (ex: useFriendStatus)

除了可以用 hook 創建 component 以外，也可以把 render 拿掉
單純提供複用功能的部分，相對於 vue 的 mixin

## Redux

全局狀態管理套件，但並非專屬於 React，只是契合度高，所以拿過來整合使用
**所以建議使用官方出的 context api，而非此套件**

參考: [該不該用 context api 來取代 redux?](https://medium.com/@nightspirit622/%E8%A9%B2%E4%B8%8D%E8%A9%B2%E7%94%A8context-api-%E4%BE%86%E5%8F%96%E4%BB%A3-redux-4d7395d5c8da)

## Context

全局狀態管理

參考: [官方文件](https://zh-hant.reactjs.org/docs/context.html)

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
