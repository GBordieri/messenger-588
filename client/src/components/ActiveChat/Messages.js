import React from "react";
import { Box } from "@material-ui/core";
import { SenderBubble, OtherUserBubble } from "../ActiveChat";
import moment from "moment";
import { connect, useSelector } from "react-redux";

const Messages = (props) => {
  const { messages, otherUser, userId } = useSelector(messagesSelector);

  return (
    <Box>
      {messages.sort((messageA, messageB) => (messageA.createdAt > messageB.createdAt) ? 1 : -1).map((message) => {
        const time = moment(message.createdAt).format("h:mm");

        return message.senderId === userId ? (
          <SenderBubble key={message.id} text={message.text} time={time} />
        ) : (
          <OtherUserBubble key={message.id} text={message.text} time={time} otherUser={otherUser} />
        );
      })}
    </Box>
  );
};

const messagesSelector = (state) => {
  const conversation = 
  state.conversations &&
  state.conversations.find(
    (conversation) => conversation.otherUser.username === state.activeConversation
  )
  return { 
    messages : conversation.messages, 
    otherUser : conversation.otherUser,
    userId : state.user.id
  };
};

export default Messages;