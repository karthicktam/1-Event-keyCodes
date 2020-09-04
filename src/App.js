import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [eventObj, setEvent] = useState(null);

  const eventHandler = (e) => {
    setEvent(e);
  };

  useEffect(() => {
    window.addEventListener("keydown", eventHandler);
    return () => window.removeEventListener("keydown", eventHandler);
  });

  return (
    <div className="insert">
      {eventObj === null ? (
        <div className="key">Press any key to get the event keyCode.</div>
      ) : (
        <>
          <div className="key">
            {eventObj.key === " " ? "space" : eventObj.key}
            <small>event.key</small>
          </div>
          <div className="key">
            {eventObj.keyCode}
            <small>event.keyCode</small>
          </div>
          <div className="key">
            {eventObj.code}
            <small>event.code</small>
          </div>
        </>
      )}
    </div>
  );
}
