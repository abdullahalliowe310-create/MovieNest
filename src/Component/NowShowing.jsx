import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MovieCard from './MovieCard';

const NowShowing = () => {


const movies = [
  { id: 1, 
    title: "Avengers: Doomsday",
    rating: "16+",
    duration: "3h 00min",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYaT6IHyHfx89hyFLymUyZRrgbvUOur2LlhsPLN7IxjA&s=10"
  },

  { id: 2, 
    title: "Avengers: Endgame",
    rating: "16+",
    duration: "3h 00min",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBHuijcDqq1e-2kRx2RbZqHAItrnpksbsA7eK8rTdoow&s=10"
  },

  { id: 3, 
    title: "Lupin",
    rating: "18+",
    duration: "3h 00min",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUr9gzzHMJqv56dly7ACralo7DpwqaMzGqnQLx4G2UFA&s=10"
  },

  { id: 4, 
    title: "Spider man brand new day",
    rating: "18+",
    duration: "2h 50min",
    poster: "https://tse2.mm.bing.net/th/id/OIP.Qi5POdBYYcIXbDHvc8VXSAAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },

  { id: 5, 
    title: "Whalefall",
    rating: "16+",
    duration: "2h 00min",
    poster: "https://thefilmstage.com/wp-content/uploads/2026/06/Whalefall-poster.jpg"
  },
  { id: 6, 
    title: "Sonic4",
    rating: "16+",
    duration: "2h 10min",
    poster: "https://tse2.mm.bing.net/th/id/OIP.nUPbPduKE3-NkLpVwNzUHgHaK-?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  { id: 7, 
    title: "Mortal Kombat II",
    rating: "15+",
    duration: "2h 40min",
    poster: "https://tse3.mm.bing.net/th/id/OIP.kYRdrvV4zYE_J4m2ktXXiQHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  { id: 7, 
    title: "Game of thrones",
    rating: "15+",
    duration: "2h 40min",
    poster: "https://tse2.mm.bing.net/th/id/OIP.txOBqUTIuFRE7OCocKp_qwAAAA?r=0&pid=ImgDet&w=178&h=267&c=7&dpr=1.5&o=7&rm=3"
  }
]




  return (
    <div>
        <section>
          <Container>
<div>
  <p>Experience the Magik</p>
  <h2>Now Showing</h2>
</div>





      <Row>
        {movies.map((movie) => (

          <Col key={movie.id}>
            
            <MovieCard movie={movie}/>
          </Col>
        ))
}
      </Row>
    </Container>




        </section>
    </div>
  )
}

export default NowShowing