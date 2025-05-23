const BASE_URL = 'https://api.rawg.io/api';
const API_KEY = '4c5809da54254500bdbb4b11d94decee';

/**
 * Search for games by name
 * @param {string} query - The name of the game to search for
 * @param {number} [page=1] - Page number for pagination
 * @returns {Promise<Object>} - JSON response with game results
 */
export const searchGames = async (query, page = 1) => {
  try {
    const response = await fetch(
      `${BASE_URL}/games?search=${encodeURIComponent(query)}&page=${page}&key=${API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch games');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error searching games:', error);
    throw error;
  }
};

/**
 * Fetch all games with optional pagination
 * @param {number} [page=1] - Page number for pagination
 * @param {number} [pageSize=20] - Number of games per page
 * @returns {Promise<Object>} - JSON response with game results
 */
export const getAllGames = async (page = 1, pageSize = 20) => {
  try {
    const response = await fetch(
      `${BASE_URL}/games?page=${page}&page_size=${pageSize}&key=${API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch games');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching games:', error);
    throw error;
  }
};
