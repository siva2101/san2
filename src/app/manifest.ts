import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Sanskriti Architects',
        short_name: 'Sanskriti',
        description: 'Sanskriti Architects is a leading architectural firm in Kochi, Kerala, specializing in sustainable residential and commercial designs.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#E35336',
        icons: [
            {
                src: '/icon.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
