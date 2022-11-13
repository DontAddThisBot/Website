import React, { useEffect, useState } from "react";
import styled from "styled-components";
import fetch from "node-fetch";

async function fetchLeaderboard() {
  const { topUsers } = await fetch(
    `https://api.poros.lol/api/bot/leaderboard`,
    {
      method: "GET",
    }
  ).then((res) => res.json());
  return topUsers;
}

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  useEffect(() => {
    fetchLeaderboard().then((topUsers) => setLeaderboard(topUsers));
  }, []);

  return (
    <Wrapper>
      <h1>Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((user, index) => (
            <tr key={index}>
              <td>{user}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: white;
  color: #fff;
  font-size: 2rem;

  h1 {
    color: #000;
  }

  td {
    color: #000;
  }
`;

export default Leaderboard;
