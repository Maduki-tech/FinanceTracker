import { type AppType } from 'next/dist/shared/lib/utils'

import '@/styles/globals.css'
import Navigation from '@/components/fullcomponent/Navigation'

const MyApp: AppType = ({ Component, pageProps }) => {
    return (
        <>
            <Navigation />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
