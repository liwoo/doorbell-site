import React from 'react'
import Toast from './toast'
import { useToast } from './use-toast'

const ToastContainer = () => {
  const { toasts, dismiss } = useToast()
  return (
    <div className="fixed bottom-4 left-4 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} onDismiss={dismiss} />
      ))}
    </div>
  )
}

export default ToastContainer
