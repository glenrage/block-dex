import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import "./DetailCard.css";

const DetailCard = ({ data }) => {
  return (
    <Card sx={{ width: 350, margin: 2 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {data.name}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Link to={`/book-details`} state={{ data }}>
          <Button size="small">Learn More</Button>
        </Link> */}
      </CardActions>
    </Card>
  );
};

export default DetailCard;
