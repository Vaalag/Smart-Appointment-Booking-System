import { useState } from "react";

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([]);

  const send = () => {
    setChat([...chat, { u: msg, b: "Please visit appointment page." }]);
    setMsg("");
  };

  return (
    <>
      <button onClick={() => setOpen(!open)}>💬</button>
      {open && (
        <div>
          {chat.map((c, i) => (
            <p key={i}>You: {c.u} <br/>Bot: {c.b}</p>
          ))}
          <input value={msg} onChange={e => setMsg(e.target.value)} />
          <button onClick={send}>Send</button>
        </div>
      )}
    </>
  );
}

export default Chatbot;
