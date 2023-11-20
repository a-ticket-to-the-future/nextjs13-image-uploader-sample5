/** @type {import('next').NextConfig} */
const nextConfig = {

images : {
    domains:["nextjs13-imageuploader-sample4.appspot.com"],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
    ],
},


    }
  




module.exports = nextConfig
