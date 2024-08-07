import React from 'react'

import { motion } from "framer-motion";
function NavbarButtons() {
  return (
    <ul className="flex gap-4 items-center pl-4">
        <li>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className="border border-primary-green rounded-full px-6 py-2  "
          >
            Login
          </motion.button>
        </li>
        <li>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className="bg-primary-green text-white rounded-full px-6 py-2  "
          >
            Sign Up
          </motion.button>
        </li>
      </ul>
  )
}

export default NavbarButtons