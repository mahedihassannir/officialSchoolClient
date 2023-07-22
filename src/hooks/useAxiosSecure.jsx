import { ContexM } from '../Authentication/AuProvider';
import { useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';


const useAxiosSecure = () => {
  const { Logout } = useContext(ContexM);
  const navigate = useNavigate();

  const axiosSecure = axios.create({
    baseURL: 'https://server-nine-ecru.vercel.app/',
  });

  useEffect(() => {

    axiosSecure.interceptors.request.use((config) => {

      const token = localStorage.getItem('jwtToken');


      if (token) {

        config.headers.authorization = `Bearer ${token}`;

      }

      return config;

    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      // async (error) => {
      //   if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      //     await Logout();
      //     navigate('/login');
      //   }
      //   return Promise.reject(error);


      // }

    );
  }, [Logout, navigate, axiosSecure]);

  return [axiosSecure];
};

export default useAxiosSecure;