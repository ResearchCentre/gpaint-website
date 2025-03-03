let env_name;

if (process.env.NODE_ENV === "development") {
  // Local PC
  env_name = "local";
} else {
  // Server Url
  env_name = "dev";
}

export { env_name };


// Live
export const login_url = 'https://www.access.dummy.com/';              // Login 
export const signup_url = 'http://localhost:3000/register';    // Sign Up 
