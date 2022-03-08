import { useEffect, useState } from "react";
import DataList from "./components/DataList";
import SelectTypeForm from "./components/SelectTypeForm";
import "./styles.css";

export default function App() {
  const [dataType, setDataType] = useState("");

  const [data, setData] = useState(null);
  const string = "planets"

  useEffect(() => dataType && fetch(`https://swapi.dev/api/${dataType}/`)
                .then(res => res.json())
                .then(res => {
                  console.log(res.results);
                  setData(() => res)})
                ,[dataType])

  console.log({ data });

  // Write code here.
  //

  return (
    <div>
      <SelectTypeForm setDataType={setDataType}/>
      {data && <DataList dataType={dataType} data={data.results} />}
    </div>
  );
}
