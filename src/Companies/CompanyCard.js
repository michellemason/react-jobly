import React, { Link } from "react";
import "./CompanyCard.css";
import { Card, CardTitle, CardSubtitle, CardText } from "reactstrap";

const CompanyCard = ({ name, description, handle }) => {
    return (
        // <Link className="CompanyCard card" to={`/companies/${handle}`}>
<Card className="m-4 p-4" style={{ width: '50%'}}>
    <CardTitle tag="h5">{name}</CardTitle>
    <CardSubtitle className="mb-2 text-muted" tag="h6">{handle}</CardSubtitle>
    <CardText>{description}</CardText>
</Card>

        // <div className="card-body">
        //     <h6 className="card-title">
        //         {name}
        //         {handle}
        //     </h6>
        //     <p><small>{description}</small></p>
        // </div>
        // </Link>
    );
}

export default CompanyCard;