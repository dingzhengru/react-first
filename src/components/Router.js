import { Switch, Route, Link } from 'react-router-dom';

function Router() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={{ pathname: '/', state: { auth: false } }}>Home</Link>
          </li>
          <li>
            <Link to={{ pathname: '/about', state: { auth: true } }}>About</Link>
          </li>
        </ul>
      </nav>

      {/* 等同於 <router-views> */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default Router;

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}
