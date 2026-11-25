import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Offcanvas from 'react-bootstrap/Offcanvas';

const MovieCard = ({ movie }) => {
  return (
    <Card className='movie-card position-relative border-0'>

      {/* Movie Poster */}
      <Card.Img variant="top" src={movie.poster} alt='{movie.title}'/>

      {/* Top-right age rating badge */}
      <Badge bg="dark" className='movie-rating position-absolute top-0 end-0 m-2 p-3'>{movie.rating}</Badge>

      {/* overlay badge */}
      <div className='movie-overlay'>
<div className='text-center'>
        <Button variant='danger' size='sm' className='button text-white' >
          <span>▶</span>Play Trailer
        </Button>
</div>


<div className='bg-black text-white h-100 mt-2 '>
  
  {/* Movie Title */}
  <Card.Title className='text-center'>{movie.title}</Card.Title>
  
  
  {/* Duration and Rating now */}
  <div className='channel'>
    <span>⏱️ {movie.duration}</span> | 
    <span>{movie.rating}</span>
    <span>{movie.trailer}</span>
  </div>
  
  <div className='text-center border-top border-secondary mt-0 py-3 '>
  {/* Buy Tickets */}
  <div className='buy'>
  <Button className='text-white'>Buy Ticket</Button>
  </div>

  <div>
  {/* More Info */}
  <a href="">More Info ➔</a>
  </div>
  </div>
  
        </div>
</div>

    </Card>


    
  )
}

export default MovieCard