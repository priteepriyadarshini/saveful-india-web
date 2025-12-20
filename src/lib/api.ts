export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export const AUTH_API = {
  // Admin / Chef login
  LOGIN: `${API_BASE_URL}/auth/login`,
  CREATE_ADMIN: `${API_BASE_URL}/auth/admin/signup`,
  CREATE_CHEF: `${API_BASE_URL}/auth/chef/signup`,
};


export const ADMIN_API = {
  GET_ADMINS: `${API_BASE_URL}/admin/admins`,
  GET_CHEFS: `${API_BASE_URL}/admin/chefs`,
};

export const INGREDIENT_API = {
  CREATE: `${API_BASE_URL}/ingrediants`,
  
};
