import Document, { Html, Head, Main, NextScript } from 'next/document';
export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* Global Site Tag (gtag.js) - Google Analytics */}

                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}

                                //this defaults to denying
                                gtag('consent', 'default', {
                                'analytics_storage': 'denied'
                                });

                                gtag('js', new Date());
                                
                                function getCookie(cname) {
                                    let name = cname + "=";
                                    let decodedCookie = decodeURIComponent(document.cookie);
                                    let ca = decodedCookie.split(';');
                                    for(let i = 0; i <ca.length; i++) {
                                        let c = ca[i];
                                        while (c.charAt(0) == ' ') {
                                        c = c.substring(1);
                                        }
                                        if (c.indexOf(name) == 0) {
                                        return c.substring(name.length, c.length);
                                        }
                                    }
                                    return "";
                                }

                                //check for consent, you'll need to write your own function here, but you get the idea
                                
                                let concent = getCookie("concent")
                                
                                if(concent == "true" ){
                                    gtag('consent', 'update', {
                                    'analytics_storage': 'granted'
                                    });
                                }
                                
                                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                                page_path: window.location.pathname,
                                });
                            `,
                        }}
                    />
                </Head>
                
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}