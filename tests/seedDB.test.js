const React = require('react');
const { shallow, mount, render } = require('enzyme');
const { seedDB, find, Recommendations, dropDB } = require('../database/seedDB');
const { expect, test, describe } = require('jest');

describe('Seeding database', () => {
  
  test('add 1 + 2', () => {
    expect(1).toBe(1);
  });
});
