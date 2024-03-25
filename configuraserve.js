const express = require('express');
const ejs = require('ejs');

module.exports = function configuraServe(app) {
  app.set('view engine', 'ejs');
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static('public'));
};