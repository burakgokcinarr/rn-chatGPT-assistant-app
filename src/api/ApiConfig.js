import axios from "axios";
import { GPT_API_KEY } from './Key';

const chatgptUrl = 'https://api.openai.com/v1/chat';

const instance = axios.create({
    baseURL: chatgptUrl,
    timeout: 1000,
    headers: {
        "Authorization": "Bearer " + GPT_API_KEY,
        "Content-Type": "application/json"
    }
});

export const chatgptApiCall = async (uri, messages) => {
    try{
        const res = await instance.post(uri, {
            model: "gpt-3.5-turbo",
            messages
        })

        let answer = res.data?.choices[0]?.message?.content;
        messages.push({role: 'assistant', content: answer});
        // console.log('got chat response', answer);
        return Promise.resolve({success: true, data: messages}); 

    }catch(err){
        console.log('error: ',err);
        return Promise.resolve({success: false, msg: err.message});
    }
}
