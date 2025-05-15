import TwinProtocol from "twin-protocol-prod";
import dotenv from "dotenv";
dotenv.config();

class StreamService {
  constructor() {
    this.twinProtocol = new TwinProtocol({
      TP_ACCESS_KEY: process.env.TP_ACCESS_KEY,
      TP_SECRET_KEY: process.env.TP_SECRET_KEY,
      TP_CLIENT_ID: process.env.TP_CLIENT_ID,
      TP_BASE_URL: process.env.TP_BASE_URL,
      TP_WS_URL: process.env.TP_WS_URL,
      // accessKey: process.env.TP_ACCESS_KEY,
      // secretKey: process.env.TP_SECRET_KEY,
      // clientId: process.env.TP_CLIENT_ID,
      // baseUrl: process.env.TP_BASE_URL,
      // wsUrl: process.env.TP_WS_URL,
    });
  }

  async setupConnection(twinId, responseResolution, stitch, session_timeout) {
    console.log("hello")
    stitch = true
    session_timeout = 300
    try {
      const response = await this.twinProtocol.setupConnection(twinId, responseResolution, stitch, session_timeout)
      console.log(response, 19)
      return response
    }
    catch (error) {
      throw error
    }
  }

  async startStream(streamId, input, twinId, sessionId) {
    try {
      const response = await this.twinProtocol.startStream(streamId, input, twinId, sessionId)
      return response
    }
    catch (error) {
      throw error
    }
  }

  async startConnection(streamId, answer, sessionId) {
    try {
      const response = await this.twinProtocol.startConnection(streamId, answer, sessionId)
      return response
    }
    catch (error) {
      throw error
    }
  }

  async sendNetworkInfo(streamId, sessionId, candidate, sdpMid, sdpMLineIndex) {
    try {
      const response = await this.twinProtocol.sendNetworkInfo(streamId, sessionId, candidate, sdpMid, sdpMLineIndex)
      return response
    }
    catch (error) {
      throw error
    }
  }
}

export default new StreamService();
