import React from 'react'
import { Toast } from 'react-bootstrap'

interface IToast {
  show: boolean
  message: string
  colors?: string
  onClose: () => void
}

export const CustomToast: React.FC<IToast> = ({ show, message, onClose, colors }) => {
  return (
    <Toast
      onClose={onClose}
      show={show}
      delay={3000}
      bg={colors ? colors : 'sucess'}
      autohide
      style={{
        position: 'absolute',
        zIndex: 99,
        right: 0
      }}
    >
      <Toast.Body style={{ color: '#fff' }}>
        {message}
      </Toast.Body>
    </Toast>
  )
}