import { Component } from "solid-js";
import { RoutePaths } from "../../utils";
import { MenuButton } from "./MenuButton";

export const MenuBar:Component = () => {
  return (
    <div class="flex flex-col gap-8 bg-primary w-fit h-full py-6">
        <h1 class="text-gray text-2xl text-center">My Finances</h1>
        <div class="border border-gray mx-4"/>
      <nav>
        <MenuButton path={RoutePaths.HOME}/>
        <MenuButton path={RoutePaths.EXPENSES}/>
        <MenuButton path={RoutePaths.INCOMES}/>
        <MenuButton path={RoutePaths.BUDGETS}/>
      </nav>
    </div>
  )
}
