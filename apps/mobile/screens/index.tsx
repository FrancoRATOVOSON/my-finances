import React from 'react'
import { NavBar, RouteLabels, Tab } from '../navigation'
import Home from './Home'
import Expenses from './Expenses'
import Incomes from './Incomes'
import Budgets from './Budgets'
import Goals from './Goals'

export function Screens() {
  return (
    <Tab.Navigator tabBar={(props) => <NavBar {...props}/>} initialRouteName={RouteLabels.HOME}>
      <Tab.Screen name={RouteLabels.HOME} component={Home} />
      <Tab.Screen name={RouteLabels.EXPENSES} component={Expenses} />
      <Tab.Screen name={RouteLabels.INCOMES} component={Incomes} />
      <Tab.Screen name={RouteLabels.BUDGETS} component={Budgets} />
      <Tab.Screen name={RouteLabels.GOALS} component={Goals} />
    </Tab.Navigator>
  )
}
