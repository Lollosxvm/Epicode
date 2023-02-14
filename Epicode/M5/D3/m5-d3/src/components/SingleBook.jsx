import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function SingleBook({props}) {
  const {title,img } = props
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
  
export default SingleBook;