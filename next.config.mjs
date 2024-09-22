/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.mp3$/,  // This is the rule to handle .mp3 files
            use: {
                loader: 'file-loader',  // Use file-loader to process the file
                options: {
                    publicPath: '/_next/static/sounds',  // Path to serve MP3 files
                    outputPath: 'static/sounds',         // Output directory for MP3 files
                    name: '[name].[hash].[ext]',         // Naming convention for the files
                    esModule: false,                     // Disable ES modules to handle file imports properly
                },
            },
        });

        return config;  // Return the updated Webpack config
    },
};

export default nextConfig;
