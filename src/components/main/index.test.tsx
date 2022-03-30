import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('Verificar render Heading', () => {
    render(<Main />)

    expect(screen.getByRole('Heading', { name: /react avançado/i }))
  })
})
