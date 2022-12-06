import { useState } from 'react'
import { BiSend, BiCheckDouble } from 'react-icons/bi'

export const SendButton = () => {
  const [isSending, setIsSending] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const handleClick = () => {
    setIsSending(true)
    setTimeout(() => {
      setIsSending(false)
      setIsSent(true)
    }, 2000)
  }

  return (
    <button
      onClick={handleClick}
      id='sendButton'
      className={`${isSending || isSent ? 'sending' : ''}`}
    >
      <span className='iconButton'>
        {isSent ? <BiCheckDouble /> : <BiSend />}
      </span>
      <span className='textButton'>
        {isSending ? 'Sending...' : isSent ? 'Sent' : 'Send Message'}
      </span>
    </button>
  )
}
