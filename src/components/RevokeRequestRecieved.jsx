import { motion } from 'framer-motion'

export function RevokeRequestReceivedMessage({ onGoBack }) {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-10 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Blurred background */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-lg rounded-lg bg-white bg-opacity-70 p-8 shadow-lg backdrop-blur-sm"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
      >
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
          Request Received
        </h2>
        <p className="mb-8 text-center text-gray-700">
          Your request to revoke your data from Doorbell Zatheka has been
          received. Our team will process this within the standard retention
          period of 30 days.
        </p>
        <div className="text-center">
          <motion.button
            onClick={onGoBack}
            className="inline-block rounded-md bg-blue-500 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-blue-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Go Back
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}
