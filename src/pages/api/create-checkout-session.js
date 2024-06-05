const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
import { Currency } from 'react-currency-formatter';

export default async (req, res) => {
    const { items, email } = req.body;
    const transformedItems = items.map(item => ({
        quantity: 1,
        price_data: {
            currency: 'gbp',
            unit_amount: item.price * 100,
            product_data: {
                name: item.title,
                description: item.description,
                images: [item.image]
            },

        },
    }));

    // console.log("transformedItems:",transformedItems);

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        shipping_options: [{
            shipping_rate: "shr_1PMpL5A9dwSXzI8JNJwjsCh0"
        }],
        shipping_address_collection: {
            allowed_countries: ['GB', 'US', 'CA']
        },
        line_items: transformedItems,
        mode: "payment",
        success_url: process.env.HOST + "/success",
        cancel_url: process.env.HOST + "/checkout",
        metadata: {
            email: email,
            images: JSON.stringify(items.map(item => item.image))
        }
    })

    console.log("session:", session);

    res.status(200).json({ id: session.id })

};