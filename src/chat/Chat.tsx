import React from 'react';
import { Button, ChatBox } from './styled';
import WellcomeBox from './WellcomeBox';

export default function Chat() {
  return (
    <ChatBox>
      <WellcomeBox />
      <Button />
    </ChatBox>
  );
}
