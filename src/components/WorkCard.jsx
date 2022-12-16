import { IconButton } from "@mui/material";
import { Col } from "react-bootstrap";
import InfoIcon from '@mui/icons-material/Info';

export const WorkCard = ({ role, company, description, imgUrl, infoLink}) => {

  return (
    <Col size={16} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl}/>
        <div className="proj-txtx">
          <h5>{role}</h5>
          <h6><i>{company}</i></h6>
          <span>{description}</span>
          <br></br>
          <span>
          <IconButton onClick = {() => window.open(infoLink)}>
            <InfoIcon />
          </IconButton>
          </span>
        </div>
      </div>
    </Col>
  )
}