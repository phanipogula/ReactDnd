import React from 'react';
import ReactDOM from 'react-dom';
import DemoBar from './demobar';
import LeftSideMenu from './leftsidemenu';
// eslint-disable-next-line no-unused-vars
import FormBuilder, { Registry } from './src/index';
import * as variables from './variables';

// Add our stylesheets for the demo.
require('./scss/application.scss');

const url = '/api/formdata';
const saveUrl = '/api/formdata/';

const TestComponent = () => <h2>Hello</h2>;



// const MyInput = React.forwardRef((props, ref) => {
//   const { name, defaultValue, disabled } = props;
//   return (
//     <>
//       <label style={{ marginRight: '1rem' }}><b>{ props.data.label }</b></label>
//       <input ref={ref} name={name} defaultValue={defaultValue} disabled={disabled} />
//     </>
//   );
// });

// const MyTable = React.forwardRef((props, ref) => {
//   const { name, defaultValue, disabled } = props;
//   return (
//     <div>
//     <table style = {{borderCollapse:'collapse',width:'10%',fontFamily:'arial,sans-serif'}}>
//       <tbody style={{border:'1px solid #dddddd'}}>
//       <tr style={{border:'1px solid #dddddd',width:'100%',height:'10%'}} placeholder= ''>
//         <td style={{border:'1px solid #dddddd',width:'100%',height:'10%'}}>
//           India
//         </td>
//         <td style={{border:'1px solid #dddddd',width:'100%',height:'10%'}}>
//           USA
//         </td>
//         <td style={{border:'1px solid #dddddd',width:'100%',height:'10%'}}>
//           Germany
//        </td>
//       </tr>
//       <tr style={{border:'1px solid #dddddd',width:'100%',height:'10%'}}>
//         <td style={{border:'1px solid #dddddd',width:'100%',height:'10%'}}>
//           Canada
//         </td>
//         <td style={{border:'1px solid #dddddd',width:'100%',height:'10%'}}>
//           Russia
//         </td>
//         <td style={{border:'1px solid #dddddd',width:'100%',height:'10%'}}>
//           Sweden
//        </td>
//       </tr>
//       <tr style={{border:'1px solid #dddddd',width:'100%',height:'10%'}}>
//         <td style={{border:'1px solid #dddddd',width:'100%',height:'10%'}}>
//           spain
//         </td>
//         <td style={{border:'1px solid #dddddd',width:'100%',height:'10%'}}>
//           France
//         </td>
//         <td style={{border:'1px solid #dddddd',width:'100%',height:'10%'}}>
//           Iran
//        </td>
//       </tr>
//       </tbody>
//     </table>
//       {/* <label style={{ marginRight: '1rem' }}><b>{ props.data.label }</b></label> */}
//       {/* <table ref={ref} name={name} defaultValue={defaultValue} disabled={disabled} />; */}
//     </div>
//   );
// });

// Registry.register('MyInput', MyInput);
// Registry.register('TestComponent', TestComponent);
// Registry.register('MyTable',MyTable);

// const items = [{
//     key: 'Header',
//   }, {
//     key: 'TextInput',
//   }, {
//     key: 'TextArea',
//   }, {
//     key: 'RadioButtons',
//   }, {
//     key: 'Checkboxes',
//   }, {
//     key: 'Image',
//   },
//   {
//     key: 'TwoColumnRow'
//   },
//   {
//     key: 'ThreeColumnRow'
//   },
//   {
//     key: 'FourColumnRow'
//   },
//   {
//     key: 'TestComponent',
//     element: 'CustomElement',
//     component: TestComponent,
//     type: 'custom',
//     field_name: 'test_component',
//     name: 'Something You Want',
//     icon: 'fa fa-cog',
//     static: true,
//     props: { test: 'test_comp' },
//     label: 'Label Test',
//   },
//   {
//     key: 'MyInput',
//     element: 'CustomElement',
//     component: MyInput,
//     type: 'custom',
//     forwardRef: true,
//     bare: true,
//     field_name: 'my_input_',
//     name: 'My Input',
//     icon: 'fa fa-cog',
//     props: { test: 'test_input' },
//     label: 'Label Input',
//   },
//   {
//     key: 'MyTable',
//     element: 'CustomElement',
//     component: MyTable,
//     type: 'custom',
//     forwardRef: true,
//     bare: true,
//     field_name: 'my_table_',
//     name: 'Table',
//     icon: 'fa fa-cog',
//     props: { test: 'test_input' },
//     //label: 'Label Input',
//   },
// ];

const App = () => (
  <FormBuilder.ReactFormBuilder
    variables={variables}
    url={url}
    saveUrl={saveUrl}
    locale='en'
    // toolbarItems={items}
  />);

ReactDOM.render(
  <App />,
  document.getElementById('form-builder'),
);

ReactDOM.render(
  <DemoBar variables={variables} />,
  document.getElementById('demo-bar'),
);
ReactDOM.render(
  <LeftSideMenu variables={variables} />,
  document.getElementById('form'),
);