require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const contentfulConfig = {
  spaceId: process.env.MBP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.MBP_CONTENTFUL_DELIVERY_TOKEN,
  host: process.env.MBP_CONTENTFUL_HOST,
}

const siteConfig = {
  baseUrl: process.env.MBP_BASE_URL,
  gaCode: process.env.MBP_GA
}

const { spaceId, accessToken } = contentfulConfig
const { baseUrl, gaCode } = siteConfig

if (!spaceId || !accessToken ) {
  throw new Error(
    'Contentful spaceId and delivery token need to be provided.'
  )
}

if (!baseUrl || !gaCode) {
  throw new Error(
    'Base url and GA code need to be provided'
  )
}

const robotsPolicy = { userAgent: '*', allow: '/' }


module.exports = {
  siteMetadata: {
    title: `Melanie Betts Physiotherapy`,
    description: `Spinal & Sports Injury Specialists`,
    keywords: 'physiotherapy, warwickshire, worcestershire, physiotherapist, stratford upon avon, Back, neck, shoulder, hip, foot, joint, disc, prolapse, disc, problem, Knee, shoulder, ligament, sports, injury, sports medicine, Whiplash, headaches, rehabilitation, exercise, posture, Acupuncture, Manipulation, MACP, Olympic, performance, specialist, Ultrasound',
    canonicalUrl: 'http://www.melaniebettsphysiotherapy.com/',
    siteUrl: `https://${siteConfig.baseUrl}`,
    image: `https://${siteConfig.baseUrl}/logo.png`,
    contactUsUrl: `https://${siteConfig.baseUrl}/contactus`,
    organization: {
      name: 'Melanie Betts Physiotherapy',
      legalName: 'Melanie Betts Physiotherapy',
      email: 'info@melaniebettsphysiotherapy.co.uk',
      phone: '+44',
      address: {
        streetAddress: '',
        city: '',
        county: '',
        postcode: '',
      },
    },
    social: {
      twitter: '',
      fbAppID: ''
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [robotsPolicy]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Melanie Betts Physiotherapy`,
        short_name: `Melanie Betts Physiotherapy`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, 
        include_favicon: true,
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `${siteConfig.gaCode}`,
        head: true,
      },
    }
  ],
}
