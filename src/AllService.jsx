import { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const AllService = () => {
  const getCategories = async () => {
    return await axios.get(`http://localhost:8000/api/categories`);
  }
}

export default AllService
