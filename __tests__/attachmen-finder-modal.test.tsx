import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useAttachmentFinderModal } from '../hooks/useAttachmentFinderModal'


import AttachmentFinderModal from '@/components/AttachmentFinderModal'
import { useEffect } from 'react'
import useAttachmentFinderStore from '@/store/useAttachmentFinderStore'

// CTA: Means call to action

const user = userEvent.setup()

function RenderModalOpen() {
  const { onOpen } = useAttachmentFinderModal()
  const store = useAttachmentFinderStore()

  useEffect(() => {
    onOpen()

    return () => {
      store.clear()
    }
  }, [])

  return (
    <AttachmentFinderModal />
  )
}

describe('Attachment finder modal', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('should render machine step corretly', async () => {
    render(<RenderModalOpen />)

    expect(
      await screen.findByText('Attachment Finder - Step 1')
    ).toBeInTheDocument()
    expect(
      await screen.findByText('What type of machine this attachment will be installed on?')
    ).toBeInTheDocument()
    expect(
      await screen.findByRole('button', { name: 'Excavator'})
    ).toBeInTheDocument()
    expect(
      await screen.findByRole('button', { name: 'Skid Steer'})
    ).toBeInTheDocument()

    expect(
      await screen.findByRole('button', { name: 'Next'})
    ).toBeInTheDocument()
    expect(
      await screen.findByText('Not sure? Talk to an expert!')
    ).toBeInTheDocument()
  })

  it('should next button be disabled if current step has no option selected', async () => {
    render(<RenderModalOpen />)

    expect(
      await screen.findByRole('button', { name: 'Next'})
    ).toHaveAttribute('disabled')
  })

  it('should enable next button when an option is selected', async () => {
    render(<RenderModalOpen />)

    await user.click(await screen.findByRole('button', { name: 'Skid Steer'}))

    expect(
      await screen.findByRole('button', { name: 'Next'})
    ).not.toHaveAttribute('disabled')
  })

  it('should render first step corretly', async () => {
    render(<RenderModalOpen />)

    await user.click(await screen.findByRole('button', { name: 'Skid Steer'}))
    await user.click(await screen.findByRole('button', { name: 'Next'}))

    expect(
      await screen.findByText('Attachment Finder - Step 1')
    ).toBeInTheDocument()
    expect(
      await screen.findByText('What is the weight category of the skid steer?')
    ).toBeInTheDocument()
    expect(
      await screen.findByRole('button', { name: `Mini - Standon (less than x lbs)`})
    ).toBeInTheDocument()
    expect(
      await screen.findByRole('button', { name: `Medium (between x lbs and y lbs)`})
    ).toBeInTheDocument()
    expect(
      await screen.findByRole('button', { name: `Large (between x lbs and y lbs)`})
    ).toBeInTheDocument()

    expect(
      await screen.findByRole('button', { name: 'Back'})
    ).toBeInTheDocument()
    expect(
      await screen.findByRole('button', { name: 'Next'})
    ).toBeInTheDocument()
    expect(
      await screen.findByText('Not sure? Talk to an expert!')
    ).toBeInTheDocument()
  })

  it('should back a step when back button was clicked', async () => {
    render(<RenderModalOpen />)

    await user.click(await screen.findByRole('button', { name: 'Skid Steer'}))
    await user.click(await screen.findByRole('button', { name: 'Next'}))

    expect(
      await screen.findByText('What is the weight category of the skid steer?')
    ).toBeInTheDocument()

    await user.click(await screen.findByRole('button', { name: 'Back'}))

    expect(
      await screen.findByText('What type of machine this attachment will be installed on?')
    ).toBeInTheDocument()
  })

  it('should not back button in the first step', async () => {
    render(<RenderModalOpen />)

    expect(
      screen.queryByRole('button', { name: 'Back'})
    ).not.toBeInTheDocument()
  })

  it('should render second step corretly', async () => {
    render(<RenderModalOpen />)

    // Machine step
    await user.click(await screen.findByRole('button', { name: 'Skid Steer'}))
    await user.click(await screen.findByRole('button', { name: 'Next'}))
    // Weight step
    await user.click(
      await screen.findByRole('button', { name: `Medium (between x lbs and y lbs)`})
    )
    await user.click(await screen.findByRole('button', { name: 'Next'}))

    expect(
      await screen.findByText('Attachment Finder - Step 2')
    ).toBeInTheDocument()
    expect(
      await screen.findByText('What is the Hydraulic Flow of your skid steer in GPM (Gallons per Minute)?')
    ).toBeInTheDocument()
    expect(
      await screen.findByRole('button', { name: `Standard Flow (17-25 GPM)`})
    ).toBeInTheDocument()
    expect(
      await screen.findByRole('button', { name: `High Flow (30-45 GPM)`})
    ).toBeInTheDocument()

    expect(
      await screen.findByRole('button', { name: 'Back'})
    ).toBeInTheDocument()
    expect(
      await screen.findByRole('button', { name: 'Next'})
    ).toBeInTheDocument()
    expect(
      await screen.findByText('Not sure? Talk to an expert!')
    ).toBeInTheDocument()
  })

  it('should render third step corretly', async () => {
    render(<RenderModalOpen />)

    // Machine step
    await user.click(await screen.findByRole('button', { name: 'Skid Steer'}))
    await user.click(await screen.findByRole('button', { name: 'Next'}))
    // Weight step
    await user.click(
      await screen.findByRole('button', { name: `Medium (between x lbs and y lbs)`})
    )
    await user.click(await screen.findByRole('button', { name: 'Next'}))
    // Hydraulic Flow
    await user.click(
      await screen.findByRole('button', { name: `Standard Flow (17-25 GPM)`})
    )
    await user.click(await screen.findByRole('button', { name: 'Next'}))

    expect(
      await screen.findByText('Attachment Finder - Step 3')
    ).toBeInTheDocument()
    expect(
      await screen.findByText('What is the length of the material you want to split?')
    ).toBeInTheDocument()
    expect(
      await screen.findByRole('button', { name: `Short (ex: small trunks...)`})
    ).toBeInTheDocument()
    expect(
      await screen.findByRole('button', { name: `Medium (ex: small trees)`})
    ).toBeInTheDocument()
    expect(
      await screen.findByRole('button', { name: `Large (ex: large trees)`})
    ).toBeInTheDocument()

    expect(
      await screen.findByRole('button', { name: 'Back'})
    ).toBeInTheDocument()
    expect(
      await screen.findByRole('button', { name: 'Next'})
    ).toBeInTheDocument()
    expect(
      await screen.findByText('Not sure? Talk to an expert!')
    ).toBeInTheDocument()
  })

  it('should render result step corretly', async () => {
    render(<RenderModalOpen />)

    // Machine step
    await user.click(await screen.findByRole('button', { name: 'Skid Steer'}))
    await user.click(await screen.findByRole('button', { name: 'Next'}))
    // Weight step
    await user.click(
      await screen.findByRole('button', { name: `Medium (between x lbs and y lbs)`})
    )
    await user.click(await screen.findByRole('button', { name: 'Next'}))
    // Hydraulic Flow
    await user.click(
      await screen.findByRole('button', { name: `Standard Flow (17-25 GPM)`})
    )
    await user.click(await screen.findByRole('button', { name: 'Next'}))
    // Lenght
    await user.click(
      await screen.findByRole('button', { name: `Medium (ex: small trees)`})
    )
    await user.click(await screen.findByRole('button', { name: 'Next'}))

    expect(
      await screen.findByText(/Loading/)
    ).toBeInTheDocument()

    expect(
      await screen.findByText('3 Wood Splitters match your equipment')
    ).toBeInTheDocument()
    expect(
      await screen.findAllByRole('button', { name: 'Buy Now'})
    ).toBeTruthy()
    expect(
      await screen.findByRole('button', { name: 'Compare models'})
    ).toBeInTheDocument()
    expect(
      await screen.findByText('Not sure? Talk to an expert!')
    ).toBeInTheDocument()
  })
})