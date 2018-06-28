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

### Input
    import { Input } from 'react-newbie';

    <Input type="checkbox" valueName="checked" parent={this} />
    <div>{'checked:' + this.state.checked}</div>

    <Input type="text" valueName="message" parent={this} />
    <div>{'message:' + this.state.message}</div>

### Switch
    import { Switch, Case, Break, Default } from 'react-newbie';

    <Switch expression={this.state.foo}>
      <Case value="a"/>
      <div>it was a</div>
      <Break />
      <Case value="b" />
      <div>it was b</div>
      <Case value="c" />
      <div>it was c</div>
      <Break />
      <Default />
      <div>it was none of those</div>
      <Break/>
    </Switch>

