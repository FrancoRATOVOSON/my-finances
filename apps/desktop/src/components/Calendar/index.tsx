import { Component } from "solid-js";
import { CycleDisplay } from "./CycleDisplay";

export const Calendar:Component = () => {
  return (
    <div class="p-4 flex flex-col gap-4 text-gray text-center w-fit bg-primary rounded-2xl">
      <h3 class="text-xl font-semibold">Current Cycle</h3>
      <CycleDisplay/>
      <h5 class="text-base">February 16th 2023</h5>
    </div>
  )
}
