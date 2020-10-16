import axios from 'axios';

export async function client(url, { data, ...customConfig } = {}) {
  const config = {
    method: data ? 'post' : 'get',
    url,
    data,
  };

  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

client.get = function (url, customConfig = {}) {
  return client(url, { ...customConfig });
};

client.post = function (url, data, customConfig = {}) {
  return client(url, { ...customConfig, data });
};
