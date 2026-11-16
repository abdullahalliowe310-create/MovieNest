import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

const MovieCard = ({ movie }) => {
  return (
    <Card style={{ width: '18rem' }}>

      {/* Movie Poster */}
      <Card.Img variant="top" src={movie.poster} />

      {/* Top-right age rating badge */}
      <Badge bg="dark">New</Badge>

      {/* overlay badge */}
      <div className=''>


        <button>
          <span>▶</span>Play Trailer
        </button>


{/* Movie Title */}
<Card.Title>Movie Title</Card.Title>


{/* Duration and Rating now */}
<div>
  <span>⏱️ {movie.duration}</span>/ | 
  <span>{movie.rating}</span>
</div>


{/* Buy Tickets */}
<Button>Buy Ticket</Button>

{/* More Info */}
<a href="">More Info ➔</a>

      </div>
    </Card>

    
  )
}

export default MovieCard