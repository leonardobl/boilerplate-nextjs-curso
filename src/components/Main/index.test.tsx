import { screen, render } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('Deve renderizar um h1', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
