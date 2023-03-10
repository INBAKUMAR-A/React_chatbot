import { Button } from 'bootstrap';
import React, { useState } from 'react';
import ChatMessage from './ChatMessages';
import { analyze } from '../utils';



export default function Chatbot(){
    const [messages,setMessages]= useState([
        {
            messages:'Hai,May I have your Name ?'
        }
    ]);
    const [text,setText]=useState('');

    const onSend =()=>{
        let list=[...messages,{messages: text,user: true}];
        if(list.length>2){
            const reply =analyze(text)
            list=[...list,{messages:reply}]
        }
        else {
            list = [
                ...list,
                {
                    messages: `Hai, ${text}`,
                },
                {
                    messages:`Please give your order id ?`,
                },
            ];
        }
        setMessages(list)
        setText("")
        setTimeout(()=>{
            document.querySelector("#copyright").scrollIntoView();
        },5);
    };

    return(
        <div>
            <div className='d-flex align-items-center justify-content-center'>
            <img src="https://img.freepik.com/free-vector/cute-robot-flying-cartoon-illustration-people-technology-icon-concept_138676-1892.jpg?w=740&t=st=1678448790~exp=1678449390~hmac=b549ad182b3724cf77991909c605593980f27697ecf5908edfed1d3a78e97b06"
            alt='logo' 
            width={200}
            height={200}></img>
            </div>
            <h1 className='text-primary'>Chatbot</h1>
            <div className='chat-message'>
            {
                messages.length>0 && messages.map((data)=><ChatMessage{...data}/>)
            }
            <div className="d-flex mt-2"  >
                <input type='text' placeholder='Enetr your message' className='form-control' value={text} onChange={(e) => setText(e.target.value)} />
                <button type='primary' className='button'  onClick={onSend}>Send</button>
            </div>
            
            <div id='copyright'className='mt-3'>Copyrights resvered by Team Inba</div>
            </div>
        </div>
    )
}