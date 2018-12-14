import channels from "./channels.json";
import messages from "./messages.json";

// use fake timeouts to simulate API call

export const getChannels = () =>
  new Promise(resolve => setTimeout(resolve, 2000, channels.data));

export const getChannelMessages = channelId =>
  new Promise(resolve =>
    setTimeout(resolve, 3000, messages.filter(m => m.channel === channelId))
  );
