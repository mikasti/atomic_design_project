export interface IMessage {
  messageUID: string, // uniq message id
  timestamp: string, // time when message created
  author: {
    userUID: string, // uniq user id
    userName: string, // username
    userNick?: string, // user nickname
  },
  content: {
    message?: string, // store user message here
    messageStyle?: 'REGULAR' | 'BOLD' | 'ITALIC', // add new styles here
    photos?: string[], // store links to images
    mapCoordinates?: { latitude: string, longitude: string }, // we can add coordinates too
  },
  replies?: IMessage,
}
