/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath:'',
  reactStrictMode: true,
  
  images: {
    domains: ['media.graphcms.com', 'static.sonovente.com', 'static.fnac-static.com', 'www.musiconvinyl.com', 'i.ytimg.com', 'm.media-amazon.com', 'get.pxhere.com', 'cdn.pixabay.com', 'us.123rf.com', 'dfxqtqxztmxwe.cloudfront.net', "www.mesdisquesvinyles.com", "www.abondance.com",'trxprds3.s3.amazonaws.com'],
  },
}

module.exports = nextConfig
