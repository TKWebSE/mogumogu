const DEFAULT_URL = 'http://localhost:3000/api/v1'
const API_V1 = "${DEFAULT_URL}/API/V1" 

//foodのURL
export const foodsIndex = `${DEFAULT_URL}/foods`;
export const foodShow = (food_id) => `${DEFAULT_URL}/foods/${food_id}`;
export const foodShowHistory = (food_id) => `/foods/${food_id}`;
export const foodCreate = `${DEFAULT_URL}/foods`;
export const foodUpdate = (food_id) => `${DEFAULT_URL}/foods/${food_id}`
export const foodUpdateHistory = (food_id) => `/foods/${food_id}/edit`;
export const foodDelete = (food_id) => `${DEFAULT_URL}/${food_id}/foods`;

//userのURL
export const userShow = (user_id) => `${DEFAULT_URL}/users/${user_id}`;
export const userEdit = () => '${DEFAULT_URL}/users/edit';
export const userUpdate = (user_id) => `${DEFAULT_URL}/users/${user_id}/update`;
export const userDelete = (user_id) => `${DEFAULT_URL}/users/${user_id}/delete`;
export const orederIndex = '/orders';
