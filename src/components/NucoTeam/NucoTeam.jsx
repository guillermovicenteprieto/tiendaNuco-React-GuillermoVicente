import { useEffect, useState } from "react";
import { Avatar, CardContent, Typography } from "@mui/material";
import "./NucoTeam.css";

const NucoTeam = () => {
  const [team, setTeam] = useState([]);
  //Incorporo una Api para mostrar nuestro equipo: NucoTeam
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=9")
      .then((response) => response.json())
      .then((data) => setTeam(data.results));
  }, []);

  return (
    <div className="nucoTeamContainer">
      <h5 className="titleComponent">
        <i>NUCO Team: </i> nosotr@s
      </h5>
      {
        <div className="styleContainer">
          {team?.map((team) => {
            const { first, last } = team.name;
            return (
              <CardContent className="teamListCard listCards">
                <Avatar
                  key={team.id}
                  src={team.picture.large}
                  sx={{ alignItems: "center", justifyContent: "center", width: 80, height: 80 }}
                />
                <Typography gutterBottom variant="p" component="div">
                  {first} {last}
                </Typography>
              </CardContent>
            );
          })}
        </div>
      }
    </div>
  );
};

export default NucoTeam;
