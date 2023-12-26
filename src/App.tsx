import React, { useEffect, useState } from 'react';

// import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

// import Bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';

// interfaces imports
import ICommunity from './interfaces/ICommunity';
import IHome from './interfaces/IHome';

// helpers function import
import { calculateAverageHomePrice } from './helpers';

// Components import
import Header from './components/Header/Header';
import Community from './components/Community/Community';


function App() {
  // States
  const [communities, setCommunities] = useState<ICommunity[]>([]);
  const [homes, setHomes] = useState<IHome[]>([]);
  const [displayedCommunities, setDisplayedCommunities] = useState<ICommunity[]>([]);
  const [visibleCards, setVisibleCards] = useState(6);
  
  useEffect(() => {
    const fetchCommunities = async () => {
      try {
        const requestOptions: RequestInit = {
          method: 'GET',
          redirect: 'follow'
        };
        const response = await fetch('https://storage.googleapis.com/openhouse-ai-fe-coding-test/communities.json',requestOptions);
        const data = await response.json();
        console.log(data)
        setCommunities(data.sort((a: ICommunity, b: ICommunity) => a.name.localeCompare(b.name)));
      } catch (error) {
        console.error('Error fetching communities data:', error);
      }
    };
    const fetchHomes = async () => {
      try {
        const requestOptions: RequestInit = {
          method: 'GET',
          redirect: 'follow'
        };
        const response = await fetch('https://storage.googleapis.com/openhouse-ai-fe-coding-test/homes.json',requestOptions);
        const data = await response.json();
        console.log(data)
        setHomes(data);
      } catch (error) {
        console.error('Error fetching homes data:', error);
      }
    };
    fetchCommunities();
    fetchHomes();
  }, []);

  useEffect(() => {
    setDisplayedCommunities(communities.slice(0, visibleCards));
  }, [communities, visibleCards]);

  const handleLoadMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 6);
  };

  return (
    <div className="App">
      <Header />
      <Container fluid="md">
        <Row>{displayedCommunities.map((community) => (
          <div key={community.id} className="col-md-4">
            <Community community={community} averageHomePrice={calculateAverageHomePrice(community.id, homes)} />
          </div>
        ))}</Row>
        {visibleCards < communities.length && (
          <div className="text-center">
            <Button style={{ margin: '2vw 0' }} variant="secondary" onClick={handleLoadMore}>
              Load More
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
}

export default App;
