import TwinProtocol from "twin-protocol-staging";
import dotenv from "dotenv";
dotenv.config();

class StreamService {
  constructor() {
    this.twinProtocol = new TwinProtocol({
      accessKey: process.env.TP_ACCESS_KEY,
      secretKey: process.env.TP_SECRET_KEY,
      clientId: process.env.TP_CLIENT_ID,
      baseUrl: process.env.TP_CLIENT_ID
    });
  }

  async setupConnection(twinId,responseResolution) {

    try{
        const response = await this.twinProtocol.setupConnection(twinId, responseResolution)
        console.log(response, 19)
        return response
    }
    catch(error){
        throw new Error(error.message)
    }
  }

  async startStream(streamId, input, twinId, sessionId) {
    try{
        const response = await this.twinProtocol.startStream(streamId, input, twinId, sessionId)
        return response
    }
    catch(error){
        throw new Error(error.message)
    }
  }

  async startConnection(streamId, answer, sessionId) {
    try{
        const response = await this.twinProtocol.startConnection(streamId, answer, sessionId)
        return response
    }
    catch(error){
        throw new Error(error.message)
    }
  }

  async sendNetworkInfo(streamId, sessionId, candidate, sdpMid, sdpMLineIndex) {
    try{
        const response = await this.twinProtocol.sendNetworkInfo(streamId, sessionId, candidate, sdpMid, sdpMLineIndex)
        return response
    }
    catch(error){
        throw new Error(error.message)
    }
  }
}

export default new StreamService();
