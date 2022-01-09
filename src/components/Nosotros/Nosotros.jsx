import { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./Nosotros.css";

const Nosotros = () => {
  const [team, setTeam] = useState([]);
  //Trago una Api para mostrar a nuestro equipo
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=6")
      .then((response) => response.json())
      //la respuesta en formato json la guardo en setTeam
      .then((data) => setTeam(data.results));
  }, []);

  return (
    <div className="nosotrosContainer">
      <h3 className="titleComponent"><i>NUCO Team: </i> nosotr@s</h3>
      {
        <div
          style={{
            margin: "30px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",          
          }}
        >
          {team?.map((team) => {
            const { first, last } = team.name;
            return (
              <CardContent className="teamListCard listCards">
                <Avatar key={team.id}
                  className="main"
                  src={team.picture.large}
                  sx={{ width: 60, height: 60 }}
                  style={{
                    alignSelf: "center",
                    margin: "10px",
                    justifyContent: "space-around",          
                  }}
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

export default Nosotros;
