import TwinProtocol from "twin-protocol-staging";
import dotenv from "dotenv";
dotenv.config();

class StreamService {
  constructor() {
    this.twinProtocol = new TwinProtocol({
      // TP_ACCESS_KEY: process.env.TP_ACCESS_KEY,
      // TP_SECRET_KEY: process.env.TP_SECRET_KEY,
      // TP_CLIENT_ID: process.env.TP_CLIENT_ID,
      // TP_BASE_URL: process.env.TP_BASE_URL,
      // TP_WS_URL: process.env.TP_WS_URL,
      accessKey: "urW5Be7TH79CwX1mqciARxnvI6iF5b51",
      secretKey: "493KulisjFLfvaY6DJlTWCzgu4G7xyHDnmcXGWMdT0Xy2l4KLk53LCUli3DmUj",
      clientId: "6799d287076370f267783d79",
      baseUrl: "https://stagingsdk.twns.ai/",
      wsUrl: "wss://stagingsdk.twns.ai/ws/"
      // TP_ACCESS_KEY: "8345731fb49949ff2276ac972931d188",
      // TP_SECRET_KEY: "a8cd32d0d5435610298c4fe2bcc3cf3a897b2f2bf33bd89103ca8084e7c869c0",
      // TP_CLIENT_ID: "67e237c2fe1b649615e6cbd4",
      // TP_BASE_URL: "https://sdk.twinprotocol.ai/",
      // TP_WS_URL: "wss://sdk.twinprotocol.ai/"
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
