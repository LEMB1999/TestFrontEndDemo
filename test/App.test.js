// coverage
// commands to execute

import { cleanup, screen, render, waitFor, act } from '@testing-library/react'
import App from '../src/App'
// import { act } from 'react'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ todos: [{ id: 1, completed: true, todo: 'Test Todo' }] })
  })
)

afterEach(cleanup)

test('render paragraph hello world', async () => {
  await act(async () => {
    render(<App />)
  })
  const p = screen.getByText(/HelloWorld/)
  expect(p).toBeInTheDocument()
})

test('the button should have the class active', async () => {
  await act(async () => {
    render(<App />)
  })
  const button = screen.getByTestId('btn-save-status')
  expect(button).toHaveClass('active-test')
})

test('the button delete should be disabled ', async () => {
  await act(async () => {
    render(<App />)
  })
  const button = screen.getByText(/delete/, { selector: 'button' })
  expect(button).toBeDisabled()
})

test('renders todos', async () => {
  render(<App />)
  // Espera a que los todos sean cargados y verifica que el primer todo esté en el documento
  await waitFor(() => expect(screen.getByText('Test Todo')).toBeInTheDocument())
})
