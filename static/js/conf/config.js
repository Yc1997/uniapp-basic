let baseApi=process.env.CUSTOM_ENV==='test'?"http://test.lucklnlk.com":(process.env.NODE_ENV==='development'?'http://dev.lucklnk.com':process.env.NODE_ENV==='production'?'http://www.lucklnk.com':"");
export default {
    baseApi
}
