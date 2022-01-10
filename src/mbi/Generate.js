import React, { useState } from "react";
import apiClient from "../api/axios-client";
const Generate = () => {
  const [mbiList, setMbiList] = useState([]);
  const generateMBI = async () => {
    const res = await apiClient.get("/mbi/generate");
    const { mbi } = res.data;
    setMbiList([mbi, ...mbiList]);
  };
  const renderMBI = (m) => {
    return `${m.substr(0, 4)}-${m.substr(4, 3)}-${m.substr(7)}`;
  };
  const reset = () => {
    setMbiList([]);
  };
  return (
    <div>
      <h1>Generate MBI</h1>
      <button className="mt-3 btn btn-primary" onClick={generateMBI}>
        Generate MBI
      </button>

      <button className="mt-3 mx-3 btn btn-warning" onClick={reset}>
        Reset
      </button>
      <ul className="mt-3 list-group">
        {mbiList.map((m) => {
          return (
            <li className="list-group-item" key={m}>
              <span className="font-monospace">{renderMBI(m)}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Generate;
