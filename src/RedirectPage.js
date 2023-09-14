import React, { useEffect } from 'react';

const RedirectPage = () => {
    useEffect(() => {
        const navigateToHref = () => {
            const url = window.location.href;
            const fragmentIndex = url.indexOf('#data=');

            console.log('URL:', url);

            if (fragmentIndex !== -1) {
                console.log('Fragment Index:', fragmentIndex);
                const encodedHref = url.slice(fragmentIndex + 6);
                console.log('Encoded HREF:', encodedHref);
                const decodedHref = decodeURIComponent(encodedHref);
                console.log('Decoded HREF:', decodedHref);

                if (decodedHref.startsWith('repetition://')) {
                    console.log('Navigating to:', decodedHref);
                    // Additional logic for handling repetition:// URLs
                    window.location.href = decodedHref; // Redirect to the extracted URL
                }
            }
        };

        navigateToHref();
    }, []);

    return null; // No need to render anything for this component
};

export default RedirectPage;




// import React, { useEffect } from 'react';

// const RedirectPage = () => {
//     useEffect(() => {
//         const navigateToHref = () => {
//             const url = window.location.href;
//             const fragmentIndex = url.indexOf('#data=');

//             if (fragmentIndex !== -1) {
//                 const encodedHref = url.slice(fragmentIndex + 6);
//                 const decodedHref = decodeURIComponent(encodedHref);

//                 if (decodedHref.startsWith('repetition://Video?query=')) {
//                     const params = new URLSearchParams(decodedHref.slice(24)); // Start after 'repetition://Video?query='
//                     const query = params.get('query');
//                     const startTime = params.get('startTime');
//                     const endTime = params.get('endTime');

//                     if (query && startTime && endTime) {
//                         const redirectURL = `repetition://Video?query=${query}&startTime=${startTime}&endTime=${endTime}`;
//                         window.location.href = redirectURL;
//                     }
//                 }
//             }
//         };

//         navigateToHref();
//     }, []);

//     return null;
// };

// export default RedirectPage;