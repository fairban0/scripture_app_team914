import React, { useState, useEffect } from "react";

const ShareButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [friends, setFriends] = useState<{ id: number; name: string }[]>([]);
  const [selectedFriend, setSelectedFriend] = useState<string | null>(null);

  // Fetch friends from backend
  useEffect(() => {
    fetch("https://localhost:5001/api/friends") // Adjust backend URL if needed
      .then((res) => res.json())
      .then((data) => setFriends(data))
      .catch((error) => console.error("Error fetching friends:", error));
  }, []);

  // Open modal
  const openModal = () => setIsModalOpen(true);

  // Close modal
  const closeModal = () => setIsModalOpen(false);

  // Share chat with selected friend
  const shareWithFriend = async (friendId: number, friendName: string) => {
    setSelectedFriend(friendName);

    const response = await fetch("https://localhost:5001/api/shareChat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ friendId, chatId: 123 }), // Replace with actual chat ID
    });

    if (response.ok) {
      alert(`Chat shared with ${friendName}!`);
      closeModal();
    } else {
      alert("Failed to share chat.");
    }
  };

  return (
    <div>
      {/* Share Button */}
      <button className="mt-2" onClick={openModal}>
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[24px] h-[24px] mt-[10px]"><path d="M8.59 13.51L15.42 17.49M15.41 6.51L8.59 10.49M21 5C21 6.65685 19.6569 8 18 8C16.3431 8 15 6.65685 15 5C15 3.34315 16.3431 2 18 2C19.6569 2 21 3.34315 21 5ZM9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12ZM21 19C21 20.6569 19.6569 22 18 22C16.3431 22 15 20.6569 15 19C15 17.3431 16.3431 16 18 16C19.6569 16 21 17.3431 21 19Z" stroke="#4A90E2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
          }}
        />
      </button>

      {/* Modal for Friend Selection */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-semibold mb-3">Share Chat With</h2>
            <ul>
              {friends.map((friend) => (
                <li
                  key={friend.id}
                  className="p-2 cursor-pointer hover:bg-gray-200 rounded"
                  onClick={() => shareWithFriend(friend.id, friend.name)}
                >
                  {friend.name}
                </li>
              ))}
            </ul>
            <button
              className="mt-3 w-full bg-red-500 text-white p-2 rounded"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareButton;
