import * as React from 'react'

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000 * 60 * 10 // 10 minutes

const actionTypes = {
  ADD_TOAST: 'ADD_TOAST',
  UPDATE_TOAST: 'UPDATE_TOAST',
  DISMISS_TOAST: 'DISMISS_TOAST',
  REMOVE_TOAST: 'REMOVE_TOAST',
}

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

const toastTimeouts = new Map()

const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    clearTimeout(toastTimeouts.get(toastId))
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: actionTypes.REMOVE_TOAST,
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TOAST:
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case actionTypes.UPDATE_TOAST:
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case actionTypes.DISMISS_TOAST:
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toastId || action.toastId === undefined
            ? { ...t, open: false }
            : t
        ),
      }

    case actionTypes.REMOVE_TOAST:
      return {
        ...state,
        toasts: action.toastId
          ? state.toasts.filter((t) => t.id !== action.toastId)
          : [],
      }

    default:
      return state
  }
}

const listeners = []
let memoryState = { toasts: [] }

function dispatch(action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => listener(memoryState))
}

function addToast(toast) {
  const id = genId()
  const { duration = 5000 } = toast // Default duration of 5 seconds

  dispatch({
    type: actionTypes.ADD_TOAST,
    toast: {
      ...toast,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismissToast(id)
      },
    },
  })

  if (duration > 0) {
    setTimeout(() => dismissToast(id), duration)
  }

  return id
}

function updateToast(toastId, toast) {
  dispatch({
    type: actionTypes.UPDATE_TOAST,
    toast: { ...toast, id: toastId },
  })
}

function dismissToast(toastId) {
  dispatch({ type: actionTypes.DISMISS_TOAST, toastId })

  if (toastId) {
    addToRemoveQueue(toastId)
  } else {
    memoryState.toasts.forEach((toast) => addToRemoveQueue(toast.id))
  }
}

function removeToast(toastId) {
  dispatch({ type: actionTypes.REMOVE_TOAST, toastId })
}

function toast(props) {
  const id = addToast(props)

  return {
    id,
    dismiss: () => dismissToast(id),
    update: (props) => updateToast(id, props),
  }
}

function useToast() {
  const [state, setState] = React.useState(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [])

  return {
    ...state,
    toast,
    dismiss: (toastId) =>
      dispatch({ type: actionTypes.DISMISS_TOAST, toastId }),
  }
}

export { useToast, toast }
