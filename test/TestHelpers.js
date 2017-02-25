import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import * as Enzyme from 'enzyme';
import Radium from 'radium';
import jsdomify from 'jsdomify';

chai.use(sinonChai);
const { expect } = chai;

jsdomify.create('<!DOCTYPE html><html><head></head><body><div id="app"></div></body></html>');

const React = require('react');
const ReactDOM = require('react-dom');

Radium.TestMode.enable();

/* eslint-disable no-console */
const consoleError = console.error;
console.error = (error, ...args) => {
  if (/(Invalid prop|Failed propType|Failed prop type|unique "key" prop)/.test(error)) {
    throw new Error(error);
  }
  consoleError.apply(console, args);
};
/* eslint-enable no-console */

const PromiseHelper = {
  success(promiseObj, expectationsFunction, doneFunction) {
    if (!promiseObj) {
      throw new Error('Promise undefined');
    }

    new Promise((resolve, reject) => {
      promiseObj.then((result) => {
        try {
          expectationsFunction(result);
          resolve();
        } catch (e) {
          reject(e);
        }
      }, () => {
        reject('Promise Rejected');
      });
    }).then(doneFunction, doneFunction);
  }
};

const Sandbox = () => sinon.sandbox.create();

global.XMLHttpRequest = sinon.useFakeXMLHttpRequest();

export {
  React,
  ReactDOM,
  Enzyme,
  expect,
  sinon,
  PromiseHelper,
  Sandbox
};
