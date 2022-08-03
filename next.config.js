/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath:'',
  reactStrictMode: true,
  env: {
    CLIENT_ID_MAIL:'service_sesk29j',
    TEMPLATE_ID:'template_mrl1rml',
    USER_ID:'user_qleOqLo1lNSDkawXHPaLy',
  },
  
  images: {
    domains: ['media.graphcms.com', 'static.sonovente.com', 'static.fnac-static.com', 'www.musiconvinyl.com', 'i.ytimg.com', 'm.media-amazon.com', 'get.pxhere.com', 'cdn.pixabay.com', 'us.123rf.com', 'dfxqtqxztmxwe.cloudfront.net', "www.mesdisquesvinyles.com", "www.abondance.com",'trxprds3.s3.amazonaws.com'],
  },
}

module.exports = nextConfig
