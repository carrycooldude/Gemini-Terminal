const dotenv = require('dotenv');
//import { GoogleGenerativeAI } from "@google/generative-ai";
const { GoogleGenerativeAI } = require('@google/generative-ai');
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run(){
    const model = genAI.getGenerativeModel({
        model:"gemini-pro"
    });
    const prompt = "Write a Rap with the pen writing of an Indian Rapper KR$NA"
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
}

run();