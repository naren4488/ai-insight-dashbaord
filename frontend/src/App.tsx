import { useEffect, useState } from "react";
import { getAIData } from "../../mock_backend/index";

function App() {
  const [aiData, setAiData] = useState();
  console.log("aidata", aiData);
  useEffect(() => {
    // getting data from mock-backend
    const getData = async () => {
      const data = await getAIData()
        .then((data) => data)
        .catch((err) => console.log(err));
      setAiData(data);
    };

    getData();
  }, []);
  return <>hello world</>;
}

export default App;
