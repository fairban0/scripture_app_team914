import { useState } from "react";
import { motion } from "framer-motion";

export default function CommentBox() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded absolute bottom-0 right-0 z-10"
      >
        Annotate
      </button>

      {isOpen && (
        <motion.div
          initial={{ y: "100%" }} // Start below the screen
          animate={{ y: 0 }} // Move to its final position
          exit={{ y: "100%" }} // Slide out of view
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="fixed bottom-0 right-0 w-full h-1/2 bg-white shadow-lg p-4 flex flex-col justify-between z-50 border-t border-gray-300"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Your Comments</h2>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-green-500 text-white rounded">
                Save
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded"
              >
                Close
              </button>
            </div>
          </div>
          <textarea
            className="w-full h-full border p-4 text-lg resize-none"
            placeholder="Type your comment..."
          />
        </motion.div>
      )}
    </div>
  );
}
