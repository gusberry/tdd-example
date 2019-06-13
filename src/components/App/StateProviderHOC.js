import React from "react";

export default function(Component) {
  return function StateProviderHoc({ store, Provider }) {
    return (
      <Provider store={store}>
        <Component />
      </Provider>
    );
  };
}
