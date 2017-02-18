import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import * as Enzyme from 'enzyme';
import 'sinon-as-promised';

chai.use(sinonChai);
const { expect } = chai;

const React = require('react');
const ReactDOM = require('react-dom');

const PromiseHelper = {
  success(promiseObj, expectationsFunction, doneFunction) {
    if (!promiseObj) {
      throw new Error('Promise undefined');
    }

    new Promise((resolve, reject) => {
      promiseObj.then(result => {
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
