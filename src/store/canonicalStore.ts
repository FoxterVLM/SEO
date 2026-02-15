import {create} from 'zustand'

type Props = {
    serviceDB: string,
    bookingDB: string,
    servicesPATH: string,
    bookingPATH: string,
    setServices: () => void,
    setBooking: () => void,
}


export const useCanonicalStore = create<Props>((set, get) =>({
    serviceDB: 'https://seoapp1.netlify.app/services?lang=uk&category=web-development&service=seo-optimization&region=ukraine&city=kyiv&price_from=100&price_to=1000&sort=popular&page=2&ref=google&utm_source=search&utm_medium=cpc&utm_campaign=seo_promo',
    bookingDB: '',
    servicesPATH: '',
    bookingPATH: '',
    setServices: async () => {
        const {serviceDB} = get();
        const url = new URL(serviceDB);

        const seoParams = ['category', 'sort', 'page'];

        const cleanParams = new URLSearchParams();

        if (seoParams) {
           seoParams.forEach(key => {
                if (url.searchParams.has(key)) {
                url.searchParams.getAll(key).forEach(v => cleanParams.append(key, v));
                }
            });
        }
        const queryString = cleanParams.toString();

       set({servicesPATH: `/services${queryString ? '?' + queryString : ''}`});
    },
    setBooking: () => {},
}))