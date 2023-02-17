import { A } from "@solidjs/router";
import { Component, Match, Switch } from "solid-js";
import { getPathLabel, RoutePaths } from "../../utils";
import { Icon } from "./Icon";

interface MenuButtonProps {
  path: RoutePaths
}

export const MenuButton:Component<MenuButtonProps> = (props) => {
  return (
    <A
    href={props.path}
    class="flex gap-6 px-6 py-3 w-64"
    activeClass="bg-gray text-black"
    inactiveClass="bg-primary text-gray hover:bg-secondary"
    >
      <span><Icon path={props.path} size={24}/></span>
      <span>{getPathLabel(props.path)}</span>
    </A>
  );
};
