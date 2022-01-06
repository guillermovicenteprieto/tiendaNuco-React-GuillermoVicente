import "./ItemDetail.css";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const ItemDetail = ({ id, title, image, stock, price, description }) => {
  return (
    <div className="itemDetail">
          <p className="itemDetailTitle">
        <i>ItemDetail component</i>
      </p>
      <Grid container>
        <Box m={1} p={1}>
          <Card
            sx={{ maxWidth: "700px" }}
            style={{ borderRadius: "10px", margin: "10px", padding: "10px" }}
          >
            <Typography variant="subtitle" color="primary" component="div">
              id: {id} | producto: {title}
            </Typography>
            <CardMedia
              component="img"
              image={image}
              title={title}
              width="700"
              height="350"
              alt={title}
            />
            <Typography variant="h5" component="div">
              {title} NUCO
            </Typography>
            <Typography variant="h6" component="div">
              $ {price}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {description}
            </Typography>
          </Card>
        </Box>
      </Grid>
    </div>
  );
};

export default ItemDetail;
