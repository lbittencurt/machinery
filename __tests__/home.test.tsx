import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as useAttachmentFinderModalHook from '../hooks/useAttachmentFinderModal'


import Home from '@/app/page'
import ModalProvider from '@/providers/ModalProvider'

// CTA: Means call to action

describe('Breakers page', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('Should render heading correctly', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /New Breakers For Sale/i,
    })

    expect(heading).toBeInTheDocument()
  })

  it('Should render CTA buttons correctly', () => {
    render(<Home />)

    const talkToAnExpertTodayButton = screen.getByRole('button', {
      name: 'Talk to an expert today',
    })
    expect(talkToAnExpertTodayButton).toBeInTheDocument()

    const attachmentFinderButton = screen.getByRole('button', {
      name: 'Attachment Finder',
    })
    expect(attachmentFinderButton).toBeInTheDocument()
  })

  it('Should open Attachment modal when related CTA button was clicked', async () => {
    const user = userEvent.setup()

    render(
      <>
        <ModalProvider />
        <Home />
      </>
    )

    await user.click(await screen.findByRole('button', { name: /Attachment Finder/ }))
    expect(await screen.findByText('Attachment Finder - Step 1')).toBeInTheDocument()
    expect(await screen
      .findByText('What type of machine this attachment will be installed on?')
    ).toBeInTheDocument()
  })
})