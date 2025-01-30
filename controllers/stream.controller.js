import StreamService from "../services/stream.service.js";

const setupConnection = async (req, res) => {
    try {
        const { twinId, responseResolution } = req.body;
        const response = await StreamService.setupConnection(twinId, responseResolution);
        return res.json(response);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const startStream = async (req, res) => {
    try {
        const { streamId, input, twinId } = req.body;
        const response = await StreamService.startStream(streamId, input, twinId);
        return res.json(response);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const startConnection = async (req, res) => {
    try {
        const { streamId, answer, sessionId } = req.body;
        const response = await StreamService.startConnection(streamId, answer, sessionId);
        return res.json(response);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const sendNetworkInfo = async (req, res) => {
    try {
        const { streamId, sessionId, event } = req.body;
        const response = await StreamService.sendNetworkInfo(streamId, sessionId, event);
        return res.json(response);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export { setupConnection, startStream, startConnection, sendNetworkInfo };
