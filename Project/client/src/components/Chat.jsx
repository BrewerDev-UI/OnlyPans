import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';


const Chat = () => {
    const [approve, setApprove] = useState(false)
    const [username, setUserName] = useState("")
    const [input, setInput] = useState("")
    const [messages, setMessages] = useState([])

    const [socket] = useState(() => io(':8000'));
    useEffect(() => {
        console.log('Is this running?');
        // socket.on('Welcome', data => console.log(data));
        socket.on("post chat", (msg) => {
            setMessages(prevMsgState => [...prevMsgState, msg]);
        })

        return () => socket.removeAllListeners();
    }, [socket]);

    const userNameHandler = (e) => {
        e.preventDefault();
        if (username) {
            setApprove(true)
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        socket.emit("chat", { username: username, content: input })
        setInput("")

    }

    return (
        <div>
            <h1 className='onlyHeader'>Hot Pans are waiting....</h1>
            {
                !approve ?
                    <form onSubmit={userNameHandler} className="m-5">
                        <label className='pansHeader'>Enter User Name:</label>
                        <input type="text" style={{ width: 200 }} className='form-control mt-3 mb-3' onChange={(e) => setUserName(e.target.value)} value={username} />
                        <button className='btn btn-outline-dark'>Enter</button>


                    </form> :
                    <div className='text-center m-4 d-flex '>
                        <form onSubmit={submitHandler} className="m-5" >
                            <input type="text" className='form-control' style={{ width: 250 }} onChange={(e) => setInput(e.target.value)} value={input} />
                            <button className='btn btn-outline-success m-3'>Talk</button>

                        </form>
                        <div className='className="m-5"'>
                            <div className='card text-center'>
                                <div className='card-header'>
                                    OnlyPans Chat Log:
                                </div>
                                <div className='card-body'>
                                    {
                                        messages.map((msg, i) => (<p key={i}>{msg.username}: {msg.content}</p>))
                                    }

                                </div>
                                <div className='card-footer'>
                                    Ask other Pans for help, cleaning, or recipes
                                </div>

                            </div>

                        </div>
                    </div>
            }
        </div>
    )
}

export default Chat