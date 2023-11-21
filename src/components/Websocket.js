import React, {useState, useEffect} from 'react'

export const Websocket = () => {
  const [connectionStatus, setConnectionStatus] = useState('Disconnected');

  useEffect(() => {
    const socket = new WebSocket('wss://ws.bitstamp.net');

    socket.onopen = () => {
      console.log("connected")
      setConnectionStatus('Connected');
    };

    socket.onclose = () => {
      console.log("dissconnected")
      setConnectionStatus('Disconnected');
    };

    socket.onerror = (err) => {
      console.log("err", err)
    }

    // Clean-up function
    return () => {
      if (socket.readyState === 1) {
        console.log("closed")
        socket.close();
    }
    };
  }, []);

  const octagonStyle = {
    width: '200px', /* Adjust size as needed */
    height: '60px', /* Adjust size as needed */
    backgroundColor: '#ffcc00', /* Change color as desired */
    clipPath: 'polygon(10% 0%, 90% 0%, 100% 25%, 100% 75%, 90% 100%, 10% 100%, 0% 70%, 0% 30%)',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin:'20px 0px',
  }

  return (
    <div style={octagonStyle}>
      <h3>{connectionStatus}</h3>
    </div>
  );
}
