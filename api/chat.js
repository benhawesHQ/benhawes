export default async function handler(req, res) {

const OPENAI_KEY = process.env.OPENAI_API_KEY

const response = await fetch("https://api.openai.com/v1/chat/completions",{

method:"POST",

headers:{
"Content-Type":"application/json",
"Authorization":`Bearer ${OPENAI_KEY}`
},

body: JSON.stringify({

model:"gpt-4o-mini",

messages:req.body.messages

})

})

const data=await response.json()

res.status(200).json(data)

}
