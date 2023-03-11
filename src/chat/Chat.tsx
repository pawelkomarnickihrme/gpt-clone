import React, { useState } from 'react';
import { Button, ChatBoxCointener } from './styled';
import WellcomeBox from './WellcomeBox';
import ChatBox from './ChatBox';

export default function Chat() {
  const [showWellcomeBox, setShowWellcomeBox] = useState(true);
  const [showChatBox, setShowChatBox] = useState(false);
  function openHandler() {
    if (showWellcomeBox === false) setShowChatBox(true);
  }
  return (
    <ChatBoxCointener>
      {showWellcomeBox && (
        <WellcomeBox
          setShowWellcomeBox={setShowWellcomeBox}
          setShowChatBox={setShowChatBox}
        />
      )}
      {showChatBox && (
        <ChatBox
          setShowWellcomeBox={setShowWellcomeBox}
          setShowChatBox={setShowChatBox}
        />
      )}
      <Button onClick={openHandler} />
    </ChatBoxCointener>
  );
}
