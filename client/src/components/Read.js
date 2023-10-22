import React, {useEffect, useState} from 'react'
import axios from "axios";

function Read() {

  let [serverData, setServerData] = useState("");

  useEffect(() => {

    const fetchData = async () => {
      const responseServer = await axios.get("http://localhost:5000/randomroute");
      const sentenceFromServer = responseServer.data.mymessage;
      setServerData(sentenceFromServer);
    }
    fetchData();

  }, [])
  

  return (
    <div>
      {serverData}
    </div>
  )
}

export default Read;