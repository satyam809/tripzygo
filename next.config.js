/** @type {import('next').NextConfig} */
const webpack = require('webpack')
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

}
rewrites: async () => [
  {
    source: "/public/package-detail.html",
    destination: "/pages/api/package-detail.js",

  },
  {
    source: "/public/a-fun-bangkok-and-pattaya-tour-from-india.html",
    destination: "/pages/api/a-fun-bangkok-and-pattaya-tour-from-india.js",

  },
],

  module.exports = nextConfig


  module.exports = {
    images: {
      domains: ['packages.tripzygo.travel','tripzygo.travel'], // Add your hostname to the domains array
    },
  };
  