import React, { useState } from "react";
import apiClient from "../api/axios-client";
const defaultMBIState = { css: "alert-danger", text: "Invalid" };
const validMBIState = { css: "alert-info", text: "Valid" };
const Verify = () => {
  const [mbi, setMbi] = useState("1PY9Q33CQ63");
  const [verified, setVerified] = useState(false);
  const [mbiState, setMbiState] = useState(defaultMBIState);
  const handleChange = (e) => {
    setMbi(e.target.value);
    setVerified(false);
  };
  const verifyMBI = async (e) => {
    e.preventDefault();
    const res = await apiClient.post("/mbi/verify", { mbi });
    setMbiState(res.data.isValid ? validMBIState : defaultMBIState);
    setVerified(true);
  };
  return (
    <div>
      <h1>Verify</h1>
      <form onSubmit={verifyMBI}>
        <div className="mb-3">
          <label htmlFor="mbiInput" className="form-label">
            Medicare Beneficiary Identifier
          </label>
          <input
            type="text"
            className="form-control"
            id="mbiInput"
            value={mbi}
            placeholder="0AA9-A99-AA99"
            onChange={handleChange}
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Verify
        </button>
      </form>
      {verified && (
        <div className={"mt-3 alert " + mbiState.css}>
          <span>{mbiState.text} MBI</span>
        </div>
      )}
    </div>
  );
};

export default Verify;
