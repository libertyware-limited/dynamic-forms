import React, { useState } from 'react'
import { DynamicForms } from '@ngx-form/react-form';
import { viewService } from './view.service';

export function ViewContainer() {
  const [state, setState] = useState(null);
  const [view, setView] = useState(null);
  const [data, setData] = useState(null);
  // go fetch the data
  // would move to redux or hooks

  if (state === null) {
    setState('loading');
    viewService.getView().then(result => {
      const key = Object.keys(result.view)[0];
      const viewData = result.view[key];
      const apiData = result.data[key];
      setView(viewData);
      setData(apiData);
      setState('loaded');
    })
  }

  const submit = (value) => {
    console.log(value);
  }

  if (state !== 'loaded') {
    return <div>LOADING</div>
  } else {
    return (
      <DynamicForms data={data} view={view} onSubmit={submit}></DynamicForms>
    )
  }
}
