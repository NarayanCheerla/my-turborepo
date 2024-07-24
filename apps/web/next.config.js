/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
  images: {
    remotePatterns : [{
      protocol: "https",
      hostname:"raw.githubusercontent.com",
      pathname: "/PokeAPI/sprites/master/sprites/pokemon/**"
    }]
  }
};
