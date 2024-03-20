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
      'X-RapidAPI-Key': 'd5c2cec884mshe479a0bb5604893p149fd3jsne33416b10ce7',
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



