import axios from 'axios';

const KEY = 'AIzaSyCJeX9ZjSyoTQefQjAzlO3OeYl6SLNJ9js';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
});