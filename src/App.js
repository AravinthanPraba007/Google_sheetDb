import { useEffect, useState } from "react";
import Tabletop from "tabletop";
import './App.css';
import { Jumbotron, Button, Table } from 'react-bootstrap';
import Entries from "./Entries";
const { REACT_APP_SHEET_URL } = process.env;

function App() {

  const [data, setData] = useState([]);
  const [dataLoadingStatus, setDataLoadingStatus] = useState('Fetching the data .....');
  const [dataSuccess, setDataSuccess] = useState(false)
  const [dataFailure, setDataFailure] = useState(false)

  useEffect(() => {
    setData([])
    setDataFailure(false)
    setDataSuccess(false)

    Tabletop.init({
      key: REACT_APP_SHEET_URL,
      callback: showInfo,
      error: showError,
      simpleSheet: true
    })

  }, []);

  function showInfo(data, tabletop) {
    console.log("showInfo called")
    setData(data)
    setDataLoadingStatus('')
    setDataFailure(false)
    setDataSuccess(true)
    console.log(dataLoadingStatus)
    console.log(data)
  }

  function showError(data, tabletop) {
    console.log("showInfo called")
    setData([])
    setDataLoadingStatus('Error occured, Please try again later !!')
    setDataSuccess(false)
    setDataFailure(true)
    console.log(dataLoadingStatus)
    console.log(data)
  }


  return (
    <div className="App">
      <Jumbotron>
        <h1>Google Sheet Data</h1>
        <p>
          Resource details
        </p>
        <p>
          {dataLoadingStatus && <Button variant="primary" disabled={true}>{dataLoadingStatus}</Button>}
        </p>
        {dataSuccess && <Table striped bordered hover>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>

            {data.map(item => (
              <Entries key={item.Sno} item={item} />
            ))}
          </tbody>
        </Table>
        }


      </Jumbotron>
    </div>
  );
}

export default App;
