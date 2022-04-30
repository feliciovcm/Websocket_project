import { server } from "./http";
import './websocket/ChatService';

server.listen(8000, () => {
  console.log('server is running on port 8000');
})