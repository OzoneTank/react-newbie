React-Newbie
============

Easy components for building react apps

## Install

    npm install react-newbie

## Components

### If, Then, Else
    import { If, Then, Else } from 'react-newbie';

    <If when={true}>this will show up</If>
    <If when={false}>this will not show up</If>

    <If when={true}>
      <Then>this will show up</Then>
      <Else>this will not show up</Then>
    </If>

    <If when={false}>
      <Then>this will not show up</Then>
      <Else>this will show up</Then>
    </If>

