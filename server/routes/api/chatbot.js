import express from 'express';
import structjson from './structjson.js';
import dialogflow from 'dialogflow';
import uuid from 'uuid';
import Chat from '../../models/chat.js';
import config from '../../config/index.js';

const router = express.Router();
const projectId = config.googleProjectID;
const sessionId = config.dialogFlowSessionID;
const languageCode = config.dialogFlowSessionLanguageCode;

const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.sessionPath(projectId, sessionId);

router.post('/textQuery', async (req, res) => {
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: req.body.text,

                languageCode: languageCode,
            },
        },
    };

    const responses = await sessionClient.detectIntent(request);
    console.log('Detected intent');
    const result = responses[0].queryResult;
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);
    console.log(result);
    if (result.allRequiredParamsPresent) {
        const chat = new Chat({
            name: result.parameters.fields.name.stringValue,
            email: result.parameters.fields.email.stringValue,
            opinion: result.parameters.fields.opinion.stringValue,
        });
        chat.save((err, doc) => {});
    }
    res.send(result);
});

router.post('/eventQuery', async (req, res) => {
    const request = {
        session: sessionPath,
        queryInput: {
            event: {
                name: req.body.event,

                languageCode: languageCode,
            },
        },
    };

    const responses = await sessionClient.detectIntent(request);
    console.log('Detected intent');
    const result = responses[0].queryResult;
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);
    res.send(result);
});

export default router;
