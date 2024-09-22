import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Pomotime',
        short_name: 'Pomotime',
        description: 'Pomotime app',
        start_url: '/',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#fff',
        "icons": [
            { "purpose": "maskable", "sizes": "512x512", "src": "icons/icon512_maskable.png", "type": "image/png" },
            { "purpose": "any", "sizes": "512x512", "src": "icons/icon512_rounded.png", "type": "image/png" }
        ],
    }
}