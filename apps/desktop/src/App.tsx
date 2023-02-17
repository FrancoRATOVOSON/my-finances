import { Route, Routes } from '@solidjs/router';
import type { Component } from 'solid-js';
import { MenuBar } from './components';
import { Budgets, Expenses, Home, Incomes } from './pages'
import { RoutePaths } from './utils';

const App:Component = () => {
  return (
    <div>
      <MenuBar/>
    <Routes>
      <Route path={RoutePaths.HOME} component={Home} />
      <Route path={RoutePaths.EXPENSES} component={Expenses} />
      <Route path={RoutePaths.INCOMES} component={Incomes} />
      <Route path={RoutePaths.BUDGETS} component={Budgets} />
    </Routes>
    </div>
  );
};

export default App;
