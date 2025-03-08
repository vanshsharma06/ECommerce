"use client"

import { useEffect } from "react"
import ProductListing from "../ProductListing/ProductListing"

const CategoryPanel = ({ isOpen, onClose, selectedCategory }) => {
  // Close panel with escape key
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleEscKey)
    return () => window.removeEventListener("keydown", handleEscKey)
  }, [onClose])

  // Prevent body scroll when panel is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[1000] flex justify-center items-center">
      {/* Overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-[1001]" onClick={onClose}></div>

      {/* Panel */}
      <div className="fixed top-0 left-0 w-full h-full bg-white z-[1002] overflow-y-auto animate-slideIn md:top-[5%] md:left-[5%] md:w-[90%] md:h-[90%] md:rounded-lg">
        {/* Header */}
        <div className="sticky top-0 flex justify-between items-center p-4 border-b border-gray-200 bg-white z-10">
          <h2 className="text-xl font-bold m-0">Shop by Categories</h2>
          <button
            onClick={onClose}
            className="bg-transparent border-none text-xl cursor-pointer w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="md:p-4">
          <ProductListing initialCategory={selectedCategory} />
        </div>
      </div>
    </div>
  )
}

export default CategoryPanel

