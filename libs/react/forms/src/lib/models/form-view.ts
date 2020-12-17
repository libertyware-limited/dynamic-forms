export interface FormView {
  title: string;
  children: {
    [key: string]: {
      component: string,
      label?: string;
      name?: string;
      path?: string;
      text?: string;
    }
  }
}
