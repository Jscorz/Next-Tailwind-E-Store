/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
	env: {
		STRIPE_PUBLIC: process.env.STRIPE_PUBLIC,
		STRIPE_SECRET: process.env.STRIPE_SECRET,
	},
};
