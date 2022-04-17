import React, { useEffect, useState } from "react";
import axios from "axios";
import { logApi } from "../api";

export default function UserSearchLogs() {
  const [userLogs, setUserLogs] = useState([]);

  async function getAllLogs() {
    await axios
      .get(logApi + "api/getLogs")
      .then((res) => {
        console.log(res);
        setUserLogs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getAllLogs();
  }, []);

  return (
    <div className="ml-2">
      <h1 className="mt-2 mb-4">User search history</h1>
      <hr />
      {userLogs.map((l, i) => {
        console.log("user logd..", l);
        return (
          <>
            <p>
              User <b>{l.userName}</b> searched for <b>{l.searchQuery}</b> at{" "}
              <b>{l.createdAt}</b>
            </p>
            <hr />
          </>
        );
      })}
    </div>
  );
}
