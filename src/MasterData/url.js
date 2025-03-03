let env_name;

if (process.env.NODE_ENV === "development") {
  // Local PC
  env_name = "local";
} else {
  // Server Url
  env_name = "dev";
}

export { env_name };

// Local
export const site_local_url = "http://localhost:2000";         // Website: User's Landing page
export const ua00_local_url = "http://localhost:3000";         // User Auth: All User Login & Register flow
export const ht01_local_url = "http://localhost:3001";         // HireTalent: Employee can hire the resource
export const ct02_local_url = "http://localhost:3002";         // ConnectTalent: Agent can supply the resource for Employer
export const wu03_local_url = "http://localhost:3003";         // WatchUser: Live Attendance Monitor system
export const uc04_local_url = "http://localhost:3004";         // UserCheck: Worker or Employee Check In App
// export const login_url = 'http://localhost:3000';              // Login 
// export const signup_url = 'https://enquiry.d3j7dyxxptzhtn.amplifyapp.com/';    // Sign Up 

// Development
export const site_dev_url = "https://main.d3p4tyi259o91a.amplifyapp.com/";         // Website: User's Landing page
export const ua00_dev_url = "https://dev.d17gy4jc01ptfj.amplifyapp.com";           // User Auth: All User Login & Register flow
export const ht01_dev_url = "https://dev.dd270wz9ixu2l.amplifyapp.com/";           // HireTalent: Employee can hire the resource
export const ct02_dev_url = "https://dev.du8ap7z2w1g7r.amplifyapp.com/";           // ConnectTalent: Agent can supply the resource for Employer
export const wu03_dev_url = "https://dev-new.d3jwqbidw03v3k.amplifyapp.com/";      // WatchUser: Live Attendance Monitor system
export const uc04_dev_url = "https://dev.d3jhzguz2bd40d.amplifyapp.com/";          // UserCheck: Worker or Employee Check In App
// export const login_url = 'https://dev.d17gy4jc01ptfj.amplifyapp.com/';          // Login 
// export const signup_url = 'https://dev.d17gy4jc01ptfj.amplifyapp.com/register'; // Sign Up 


// Live
export const login_url = 'https://www.access.newebon.com/';              // Login 
export const signup_url = 'https://enquiry.d3j7dyxxptzhtn.amplifyapp.com/';    // Sign Up 
