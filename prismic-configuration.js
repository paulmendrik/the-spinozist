import Prismic from "prismic-javascript";

export const apiEndpoint = 'https://spinozist.cdn.prismic.io/api/v2'
export const accessToken = process.env.PRISMIC_TOKEN;
export const client = Prismic.client(apiEndpoint, { accessToken })


export const linkResolver = (doc) => {
  if (doc.type === 'home') {
    return `/`
  }

  if (doc.type === 'post') {
    return `/blog/${doc.uid}`
  }
  return '/'
}


export const hrefResolver = (doc) => {
  if (doc.type === 'home') {
    return `/`
  }

  if (doc.type === 'post') {
    return `/blog/${doc.uid}`
  }
  return '/'
}
