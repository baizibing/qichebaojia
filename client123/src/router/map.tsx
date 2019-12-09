import React, { Component } from "react";
import { Router, Route, Switch, Redirect } from "dva/router";
export default class map extends Component {
  public render() {
    const { routes, history }: any = this.props;
    let redirect = <Redirect from="/" to="/home" />;
    return (
      <Router history={history}>
        <Switch>
          {routes
            .map((item: any, index: number) => {
              return (
                <Route
                  key={index}
                  path={item.path}
                  component={() => {
                    return (
                      <item.component routes={item.children} {...history} />
                    );
                  }}
                />
              );
            })
            .concat([redirect])}
        </Switch>
      </Router>
    );
  }
}
