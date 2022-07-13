/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-var */
// eslint-disable-next-line import/no-extraneous-dependencies
var express = require('express');
var formData = require('./formData');
const fs = require('fs');

var optionsData = [
  { text: 'Text 1', value: '1' },
  { text: 'Text 2', value: '2' },
  { text: 'Text 3', value: '3' },
];

var app = express();

app.route('/formdata')
  .get((req, res) => {
    // console.log('get formdata: ', formData.data);
    res.send(formData.data.task_data);
  })
  .post((req, res) => {
    debugger
    formData.data = req.body;
    let formName = formData.data.form_name;

    fs.writeFile("Forms\\"+formData.data.form_name+".json",JSON.stringify(formData.data.task_data),function(err){
      if(err)
      {
        console.log("An error occured while uploading file");
        return console.log(err);
      }
      console.log("JSOn file has been saved");
    })
    console.log('post formdata: ', formData.data);
    res.status(200).send();
  });

  // app.route('/formdata/?formName={0}')
  // // .get((req, res) => {
  // //   // console.log('get formdata: ', formData.data);
  // //   res.send(formData.data.task_data);
  // // })
  // .post((req, res) => {
  //   debugger
  //   formData.data = req.body;
  //   let formName = req.get('formName');

  //   fs.writeFile("Forms\\"+formName+".json",JSON.stringify(formData.data),function(err){
  //     if(err)
  //     {
  //       console.log("An error occured while uploading file");
  //       return console.log(err);
  //     }
  //     console.log("JSOn file has been saved");
  //   })
  //   console.log('post formdata: ', formData.data);
  //   res.status(200).send();
  // });

app.route('/optionsdata/')
  .get((req, res) => {
    res.send(optionsData);
  });

module.exports = app;