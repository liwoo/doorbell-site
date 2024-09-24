import { Cross1Icon } from '@radix-ui/react-icons'
import { useEffect } from 'react'

const Toast = ({ toast, onDismiss }) => {
  useEffect(() => {
    if (toast.duration && toast.duration > 0) {
      const timer = setTimeout(() => {
        onDismiss(toast.id)
      }, toast.duration)

      return () => clearTimeout(timer)
    }
  }, [toast.id, toast.duration, onDismiss])

  const getBorderStyles = (type) => {
    switch (type) {
      case 'success':
        return 'border-b-4 border-green-500'
      case 'warning':
        return 'border-b-4 border-yellow-500'
      case 'error':
        return 'border-b-4 border-red-500'
      default:
        return 'border-b-4 border-gray-300'
    }
  }

  return (
    <div
      className={`
        flex max-w-sm transform items-start gap-2 rounded-lg p-4 shadow-md
        transition-all duration-300 ease-in-out
        ${getBorderStyles(toast.type)}
        ${
          toast.open
            ? 'translate-x-0 opacity-100'
            : '-translate-x-full opacity-0'
        }
      `}
      style={{ backgroundColor: 'white' }} // Keep background white or transparent
    >
      <div className="flex-grow">
        <h3 className="font-semibold text-gray-800">{toast.title}</h3>
        <p className="mt-1 text-gray-600">{toast.description}</p>
      </div>
      <button
        onClick={() => onDismiss(toast.id)}
        className="text-gray-400 transition-colors duration-200 hover:text-gray-600"
      >
        <Cross1Icon size={16} />
      </button>
    </div>
  )
}

export default Toast
