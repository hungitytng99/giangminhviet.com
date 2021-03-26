import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Loading from './components/Loading/Loading';
import React, { Suspense } from 'react';
//Lazy loading:
const HomePage = React.lazy(() => import('./features/Home'));


function App() {
  return (
    <div className="my-moments">
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage}/>
          </Switch>
        </BrowserRouter>
      </Suspense>

    </div>
  );
}

export default App;
