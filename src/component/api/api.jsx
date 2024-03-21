import axios from 'axios';

export async function getCostofLiving (country, city) {
  const options = {
    method: 'GET',
    url: 'https://cities-cost-of-living-and-average-prices-api.p.rapidapi.com/cost_of_living',
    params: {
      country: country,
      city: city,
    },
    headers: {
      'X-RapidAPI-Key': '5c8071e7c6msh626656d69751305p1921f6jsnb3bb33558b0f',
      'X-RapidAPI-Host': 'cities-cost-of-living-and-average-prices-api.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};



