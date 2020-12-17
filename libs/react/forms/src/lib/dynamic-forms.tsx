import React, { Fragment, useState } from 'react';

import './dynamic-forms.module.scss';
import { FormView } from './models/form-view';
import { FormData } from './models/data';

/* eslint-disable-next-line */
export interface DynamicFormsProps {
  data: FormData;
  view: FormView
  onSubmit: (form: unknown) => void
}

export function DynamicForms(props: DynamicFormsProps) {
  const mapping = () => {
    return Object.keys(props.view.children).reduce((prev, key) => {
      const view = props.view.children[key];
      const type = view.component?.toLowerCase();
      prev.push({
        type,
        label: view.label || view.text,
        name: view.name,
        value: type === 'date' ? new Date(props.data[view.path] as string).toISOString().substr(0,10) : props.data[view.path],
      });
      return prev;
    }, []) as {type: string, label: string, name: string, value: string}[];
  }
  const [form, setForm] = useState(mapping());

  const onSubmit = (value) => {
    debugger;
    props.onSubmit(value)
  }

  return (
    <form onSubmit={onSubmit}>
      <h1>{props.view.title}</h1>
      {
        form.map((item, index) => {
          if (item.type === 'command') {
            return (
              <button key={index} type="submit">{ item.label }</button>
            )
          } else {
            return (
              <div key={index}>
                <label htmlFor={item.name}>{ item.label }</label>
                <input type={item.type} name={item.name} onChange={() => {}} defaultValue={item.value}></input>
              </div>
            )
          }
        })
      }
    </form>
  );
}

export default DynamicForms;
