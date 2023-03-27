import axios from "axios";

const API_URL = "https://random-data-api.com/api/v2/users";

async function loadUsers(size: number): Promise<any[]> {
  const params = {
    size: size,
  };

  try {
    const response = await axios.get(API_URL, { params });
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export { loadUsers };
