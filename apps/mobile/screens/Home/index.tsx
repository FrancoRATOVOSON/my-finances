import { View, Text } from 'react-native'
import React from 'react'
import { BudgetCard, CardMenu, Carousel } from './components'
import { HomeSreenProps, RouteLabels } from '../../navigation'
import { BudgetsInactive, ExpensesInactive, GoalsInactive, IncomesInactive } from '../../assets/navIcons'
import { Button } from '../../components'

interface HomeProps extends HomeSreenProps {}

export default function Home({ navigation }: HomeProps) {
  return (
    <View
      style={{
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <View
        style={{
          height: '50%',
          paddingHorizontal: 24,
          paddingVertical: 32,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <View>
          <BudgetCard/>
        </View>
        <View
          style={{
            // width: '100%',
            paddingHorizontal: 24,
            flexDirection: 'row',
            justifyContent: 'space-between',
            columnGap: 24
          }}
        >
          <Button style={{ width: '50%' }} level='Secondary' label='New expense' />
          <Button style={{ width: '50%' }} level='Secondary' label='New income' />
        </View>
      </View>
      <View
        style={{
          padding: 24,
          height: '50%',
          backgroundColor: '#FFFFFF',
          borderTopStartRadius: 32,
          borderTopEndRadius: 32,
          shadowColor: '#333333',
          shadowRadius: 2,
          shadowOpacity: 0.2,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          elevation: 10
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: '500',
          }}
        >
          This month :
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginTop: 40,
            width: '100%',
            rowGap: 32
          }}
        >
          <CardMenu
            title={RouteLabels.EXPENSES}
            value='Ar 528 000'
            Icon={ExpensesInactive}
            onPress={() => navigation.navigate(RouteLabels.EXPENSES)}
          />
          <CardMenu
            title={RouteLabels.INCOMES}
            value='Ar 3 528 000'
            Icon={IncomesInactive}
            onPress={() => navigation.navigate(RouteLabels.INCOMES)}
          />
          <CardMenu
            title={RouteLabels.BUDGETS}
            value='4'
            Icon={BudgetsInactive}
            onPress={() => navigation.navigate(RouteLabels.BUDGETS)}
          />
          <CardMenu
            title={RouteLabels.GOALS}
            value='25 %'
            Icon={GoalsInactive}
            onPress={() => navigation.navigate(RouteLabels.GOALS)}
          />
        </View>
      </View>
    </View>
  )
}
