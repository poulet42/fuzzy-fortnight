import channels from "./channels.json";
import messages from "./messages.json";
import uuid from "uuid/v1";

// use fake timeouts to simulate API call

export const getChannels = () =>
  new Promise(resolve => {
    setTimeout(resolve, 2000, channels.data);
  });

export const getChannelMessages = channelId =>
  new Promise(resolve => {
    setTimeout(
      resolve,
      2000,
      messages.data.filter(m => m.channel === channelId)
    );
  });

export const sendMessageToChannel = ({ channel, content }) => {
  const newMessage = { id: uuid(), ts: Date.now(), content, channel };
  messages.data = [...messages.data, newMessage]; // can mutate import properties
  return new Promise(resolve => {
    setTimeout(resolve, 0, newMessage); // a "POST" query should return the newly created item
  });
};
