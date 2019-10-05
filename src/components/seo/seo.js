import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import SchemaOrg from './schema-org';

const SEO = () => (
    <StaticQuery
        query={graphql`
            {
                site {
                    siteMetadata {
                        title
                        description
                        keywords
                        canonicalUrl
                        image
                        organization {
                            name
                            legalName
                            email
                            phone
                            address {
                                streetAddress
                                city
                                county
                                postcode
                            }
                        }
                        social {
                            twitter
                            fbAppID
                        }
                    }
                }
            }
    `}
    render={data => (
        <React.Fragment>
            <Helmet>
                {/* General tags */}
                <title>{data.site.siteMetadata.title}</title>
                <meta name="description" content={data.site.siteMetadata.description} />
                <meta name="image" content={data.site.siteMetadata.image} />
                <meta name="keywords" content={data.site.siteMetadata.keywords} />
                <link rel="canonical" href={data.site.siteMetadata.canonicalUrl} />

                {/* OpenGraph tags */}
                <meta property="og:url" content={data.site.siteMetadata.canonicalUrl} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={data.site.siteMetadata.title} />
                <meta property="og:description" content={data.site.siteMetadata.description} />
                <meta property="og:image" content={data.site.siteMetadata.image} />
                <meta property="fb:app_id" content={data.site.siteMetadata.social.fbAppID} />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content={data.site.siteMetadata.social.twitter} />
                <meta name="twitter:title" content={data.site.siteMetadata.title} />
                <meta name="twitter:description" content={data.site.siteMetadata.description} />
                <meta name="twitter:image" content={data.site.siteMetadata.image} />
            </Helmet>
            <SchemaOrg
                canonicalUrl={data.site.siteMetadata.canonicalUrl}
                description={data.site.siteMetadata.description}
                image={data.site.siteMetadata.image}
                organization={data.site.siteMetadata.organization}
                title={data.site.siteMetadata.title}
                url={data.site.siteMetadata.canonicalUrl}
            />
        </React.Fragment>  
    )}
   />
)

export default SEO;