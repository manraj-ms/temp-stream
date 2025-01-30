import TwinProtocol from "twin-protocol-dev";
import dotenv from "dotenv";
dotenv.config();

class StreamService {
  constructor() {
    this.twinProtocol = new TwinProtocol({
      accessKey: process.env.ACCESS_KEY,
      secretKey: process.env.ACCESS_KEY,
      clientId: process.env.CLIENT_ID,
    });
  }

  async setupConnection(twinId, responseResolution) {

    try{
        const response = await this.twinProtocol.setupConnection(twinId, responseResolution)
        return response
    }
    catch(error){
        throw new Error(error.message)
    }
  }

  async startStream(streamId, input, twinId) {
    try{
        const response = await this.twinProtocol.startStream(streamId, input, twinId)
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

  async sendNetworkInfo(streamId, sessionId, event) {
    try{
        const response = await this.twinProtocol.sendNetworkInfo(streamId, sessionId, event)
        return response
    }
    catch(error){
        throw new Error(error.message)
    }
  }
}

export default new StreamService();
