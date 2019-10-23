// Basic unit test
import React from 'react'
import ReactDOM from 'react-dom'
import Login from '../login'

test('calls onSubmit with the username and password when submitted', () => {
  // Arrange
  // 🐨 create a fake object to hold the form field values (username and password)
  const fields = {username: 'name', password: 'pass'}

  // 🐨 create a jest.fn() for your submit handler
  const handleSubmit = jest.fn()

  // 🐨 render the Login component to a div
  const div = document.createElement('div')
  ReactDOM.render(<Login onSubmit={handleSubmit} />, div)

  // 🐨 get the field nodes
  const inputs = div.querySelectorAll('input')
  const form = div.querySelector('form')

  // 🐨 fill in the field values
  inputs[0].value = fields.username
  inputs[1].value = fields.password

  // Act
  // 🐨 submit the form:
  form.dispatchEvent(new window.Event('submit'))
  //
  // Assert
  // 🐨 ensure your submit handler was called properly
  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(handleSubmit).toHaveBeenCalledWith(fields)
})
