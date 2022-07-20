/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  target: 'serverless',
  images: {
    domains: ['media.graphcms.com', 'static.fnac-static.com', 'i.ytimg.com', 'm.media-amazon.com', 'get.pxhere.com', 'cdn.pixabay.com', 'us.123rf.com', 'dfxqtqxztmxwe.cloudfront.net', "www.mesdisquesvinyles.com", "www.abondance.com"],
  },
}

module.exports = nextConfig
