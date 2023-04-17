import { Component, JSX, Show } from "solid-js";
import { Calendar } from "./Calendar";

interface LayoutProps  {
  title: string;
  subtitle?:string | JSX.Element;
  children: JSX.Element;
  aside?: JSX.Element;
}

export const Layout:Component<LayoutProps> = (props) => {
  return (
    <div class="p-8 flex flex-row justify-between w-full">
      <div class="flex flex-col gap-3 w-full h-full">
        <header>
            <h1 class="text-5xl font-semibold">{props.title}</h1>
            <Show when={props.subtitle}>
              <p>{props.subtitle}</p>
            </Show>
        </header>
        <main>{props.children}</main>
      </div>
      <aside class="w-48 flex flex-col gap-6">
        <Calendar/>
        {props.aside}
      </aside>
    </div>
  )
}
