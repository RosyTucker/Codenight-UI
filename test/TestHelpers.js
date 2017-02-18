import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import * as Enzyme from 'enzyme';
import 'sinon-as-promised';

chai.use(sinonChai);
const { expect } = chai;

const React = require('react');
const ReactDOM = require('react-dom');

const Sandbox = () => sinon.sandbox.create();

global.XMLHttpRequest = sinon.useFakeXMLHttpRequest();

export {
  React,
  ReactDOM,
  Enzyme,
  expect,
  sinon,
  Sandbox
};
