import { screen, render } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('Deve renderizar um h1', () => {
    render(<Main />)
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
  })
})
