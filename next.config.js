module.exports = {
    /* images: {
         domains: ["links.papareact.com","fakestoreapi.com","encrypted-tbn0.gstatic.com"]
     },*/
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'links.papareact.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'fakestoreapi.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'encrypted-tbn0.gstatic.com',
                pathname: '**',
            },
        ],
    },
    env: {
        stripe_public_key: process.env.STRIPE_PUBLIC_KEY
    }
}