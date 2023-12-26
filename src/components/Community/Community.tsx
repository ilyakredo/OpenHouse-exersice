import React, { useState } from 'react';

// Import Bootstrap components
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";

// Interface import
import iCommunity from '../../interfaces/ICommunity';

// Styles import
import classes from './Community.module.css';

// Default image
import defaultImage from "../../assets/images/no_image.jpg"

interface CommunityProps {
  community: iCommunity;
  averageHomePrice: String;
}

const Community: React.FC<CommunityProps> = ({ community, averageHomePrice }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };
  return (
    <Card className={classes.community} key={community.id}>
      <Card.Img 
      src={imageError ? defaultImage : community.imgUrl}
      alt={community.name}  
      onError={handleImageError}
      />
      <Card.Body>
        <Card.Title style={{ marginBottom: '1vw' }}>{community.name.toUpperCase()}</Card.Title>
        <Card.Text style={{ marginBottom: '1vw' }}>Location: {community.group}</Card.Text>
        <Card.Text style={{ marginBottom: '1vw' }}>Average home price: <span className={classes.price}>{averageHomePrice}</span> CAD</Card.Text>
        <div className="text-center">
          <Button variant="primary">Show details</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Community;
