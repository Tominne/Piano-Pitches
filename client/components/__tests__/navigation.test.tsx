// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
import { renderRoute, screen } from '../../test/utils'
import readFile from '../../apis/getRandomQuote'

vi.mock('../../apis/getRandomQuote')

describe('Navigation', () => {
  it('renders navigation links', async () => {
    vi.mocked(readFile).mockResolvedValue({
      quote:
        '`Music is a therapy. It is a communication far more powerful than words, far more immediate, far more efficient.` - Yehudi Menuhin.',
    })

    renderRoute('/')

    const links = await screen.findAllByRole('link')

    links.forEach((link) => {
      expect(link).toBeTruthy()
    })

    expect(links.map((link) => link.textContent)).toMatchInlineSnapshot(`
      [
        "Play Piano",
        "Become A Singer",
        "Playground",
      ]
    `)
  })
})

it('navigates to the correct routes when clicked', () => {
  renderRoute('/')

  const playPianoLink = screen.getByRole('link', { name: 'Play Piano' })
  const becomeASingerLink = screen.getByRole('link', {
    name: 'Become A Singer',
  })
  const playgroundLink = screen.getByRole('link', { name: 'Playground' })

  expect(playPianoLink.getAttribute('href')).toBe('/WhaiPiano')
  expect(becomeASingerLink.getAttribute('href')).toBe('/BecomeASinger')
  expect(playgroundLink.getAttribute('href')).toBe('/Playground')
})
