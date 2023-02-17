import { Component } from "solid-js";


const SummaryTitle:Component<{children:string}> = (props) => {
  return (
    <h3 class="font-medium">{props.children}</h3>
  )
}

const SummaryValue:Component<{children:string}> = (props) => {
  return (
    <p class="font-light">{props.children}</p>
  )
}

export const Summary:Component = () => {
  return (
    <aside
      class="bg-primary rounded-2xl text-gray text-center flex flex-col p-4 gap-4"
    >
      <div>
        <SummaryTitle>Incomes</SummaryTitle>
        <SummaryValue>3 650 000 Ar</SummaryValue>
      </div>
      <div>
        <SummaryTitle>Expenses</SummaryTitle>
        <SummaryValue>2 150 000 Ar</SummaryValue>
      </div>
    </aside>
  )
}
