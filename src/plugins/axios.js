import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGUxOTk5ZjE1NTBiMTk5ZGQzMTU3NDg2OWYwZGU0YSIsInN1YiI6IjY1NWUzODRlN2YyZDRhMDBhYzY0MzExNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zuCwxPVI3X9X-KKQZ5YgsdzQCNGbAE6uQv2WcnVZsAo`
  }
})

export default api
  