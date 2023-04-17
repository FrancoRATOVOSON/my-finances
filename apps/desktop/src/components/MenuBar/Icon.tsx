import { Component } from "solid-js";
import { Icon  as Heroicon} from "solid-heroicons";
import {
  home,
  arrowLeftOnRectangle as incomes,
  arrowRightOnRectangle as expenses,
  squares_2x2 as budget
} from 'solid-heroicons/outline'
import { RoutePaths } from "../../utils";

interface IconProps {
  path:RoutePaths;
  color?:string;
  size?:number;
}

function getCorrectIcon(path:RoutePaths) {
  switch (path) {
    case RoutePaths.HOME: return home
    case RoutePaths.EXPENSES: return expenses
    case RoutePaths.INCOMES: return incomes
    case RoutePaths.BUDGETS: return budget
  }
}

export const Icon:Component<IconProps> = (props) => {
  return (
    <Heroicon
    path={getCorrectIcon(props.path)}
    color={props.color}
    width={props.size}
    height={props.size}
    />
  )
}
