import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
const url = "https://backend.tripzygo.in/travelgpt";

function gptSearch() {
  const router = useRouter();
  // const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef("null");
  // const [resp, setResp] = useState("");
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const sendMessage = () => {
    if (userInput.trim() !== "") {
      const userMessage = { type: "user", content: userInput };
      setMessages([...messages, userMessage]);
      axios
        .post(url, {
          searchQuery: userInput,
        })
        .then(function (response) {
          console.log(response.data);
          // setResp(response.data);
          const gptResponse = {
            type: "ChatGPT",
            content: response.data.trim(),
          };
          setMessages((prevMessages) => [...prevMessages, gptResponse]);
        })
        .catch(function (error) {
          console.log(error);
        });
      setUserInput("");

      // Send userInput to backend and receive model response here (API call).
      // For now, we'll simulate a response.
      // setTimeout(() => {
      // }, );
    }
  };

  const handleEnterClick = async (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      sendMessage();
      scrollToBottom();
    }
  };

  const messagesRef = useRef();

  const scrollToBottom = () => {
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  };

  return (
    <div>
      <div className="chat-box" id="gpt-container" ref={messagesRef}>
        {messages.map((message, index) => (
          <div key={index} className="d-flex flex-row" style={{ padding: "2px" }}>
            <div className="p-2" style={{ width:"80px" }}>
              {message.type === "user" ? "User" : "TravelGPT"}
            </div>
            <div className="p-2">:</div>
            <div className="p-2">
              {message.content.split("\n").map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <br />
      <table style={{ width: "115.5%" }}>
        <tr>
          <td>
            <input
              type="text"
              value={userInput}
              style={{ height: "45px", fontSize: "16px" }}
              onKeyDown={handleEnterClick}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type a message..."
            />
          </td>
          <td>
            <button
              id="submitbtn"
              className="btn btn-light"
              style={{
                height: "40px",
                width: "80px",
                marginLeft: "10px",
                border: "#d9d9d9",
                backgroundColor: "white",
                display: "grid",
                placeItems: "right",
                position: "relative",
              }}
              onClick={sendMessage}
            >
              Send
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default gptSearch;
