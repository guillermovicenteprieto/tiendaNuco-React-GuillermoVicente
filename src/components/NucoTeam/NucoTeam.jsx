import { useEffect, useState } from "react";
import { Box, Avatar } from "@mui/material";

const NucoTeam = () => {
  const [team, setTeam] = useState([]);
  //Incorporo una Api para mostrar nuestro equipo: NucoTeam
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=8")
      .then((response) => response.json())
      .then((data) => setTeam(data.results));
  }, [setTeam]);

  return (
    <div className="nucoTeamContainer">
      <h3 className="titleTeamComponent">
        <i>NUCO Team: </i> nosotr@s
      </h3>
      {
        <div className="styleContainer">
          {team?.map((team) => {
            const { first, last } = team.name;
            return (
              <Box key={team.login.uuid} className=" listCards teamListCard">
                <Avatar
                  key={team.picture.large}
                  src={team.picture.large}
                  sx={{ width: 80, height: 80 }}
                />
                <h3>{first} {last}</h3>
                <h5>Email: {team.email}</h5>
                <h5>Tel: {team.phone}</h5>
                <h5>Dirección: {team.location.street.name} Nº{" "}
                  {team.location.street.number}
                </h5>
                <h5>Ciudad: {team.location.city} - {team.location.state}</h5>
                <h4>País: {team.location.country}</h4>
              </Box>
            );
          })}
        </div>
      }
    </div>
  );
};

export default NucoTeam;
