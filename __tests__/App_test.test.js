import React from 'react'
import '@babel/polyfill'
import App from '../src/App/App'
import { create } from 'react-test-renderer'
import renderer from 'react-test-renderer'

require('react-router-dom')
jest.mock('react-router-dom')

test('App renders correctly', () => {
  const app = create(<App />).toJSON()
  expect(app).toMatchSnapshot()
})

test('formatDate()', () => {
  const component = renderer.create(<App />)
  const componentInstance = component.getInstance()
  const formattedDate = 'Apr 19th, 2019'
  expect(componentInstance.formatDate('2019-04-19')).toEqual(formattedDate)
})