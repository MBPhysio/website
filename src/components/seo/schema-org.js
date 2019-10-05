import React from 'react';
import Helmet from 'react-helmet';

export default React.memo(
    ({
        canonicalUrl,
        description,
        image,
        organization,
        title,
        url,
    }) => {
        const schema = [
            {
                '@context': 'http://schema.org',
                '@type': 'Physiotherapy',
                '@id': 'https://www.melaniebettsphysiotherapy.com/',
                'name': organization.name,
                'legalName': organization.legalName,
                'url': url,
                'email': organization.email,
                'image': image,
                'telephone': organization.phone,
                'openingHours' : [
                    'Mo,We,Th 09:00-20:00',
                    'Fr 09:00-18:00',
                    'Sa 09:00-16:00'
                ],
                'priceRange': '$$',
                'paymentAccepted': 'Cash, Credit Card, Visa, Master Card',
                'currenciesAccepted': 'GBP',
                'address': {
                    '@type': 'PostalAddress',
                    'addressLocality': organization.address.city,
                    'addressRegion': organization.address.county,
                    'postalCode': organization.address.postcode,
                    'streetAddress': organization.address.streetAddress,
                    'addressCountry': 'GBR',
                },
                'geo': {
                    '@type': 'GeoCoordinates',
                    'latitude': 0.00,
                    'longitude': -0.0000
                },
                'sameAs': [
                    'https://twitter.com/',
                    'https://www.facebook.com//'
                ]
            },
        ];

        return (
            <Helmet>
                <script type="application/ld+json">{JSON.stringify(schema)}</script>
            </Helmet>
        );
    },
);