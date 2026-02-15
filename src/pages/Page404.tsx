import Helmet from 'react-helmet'

export default function Page404(){
    return (
        <div>
            <Helmet>
                <title>Page 404 - not found</title>
                <meta name="robots" content="noindex, nofollow"/>
            </Helmet>
            <p className='text-center text-[50px]'>Page is not found</p>
            <p className='text-center text-[60px]'>Error 404</p>
         </div>
    )
}