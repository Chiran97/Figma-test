import axios from 'axios';

export const fetchVideoDetails = async () => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    };

    const response = await axios.get(
      'https://backend.correctlearner.com/api/editor-pick-videos',
      config
    );

    return response.data;
  } catch (err) {
    return(err);
  }
};