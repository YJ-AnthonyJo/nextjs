import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <RecoilRoot>
                <MantineProvider
                    withGlobalStyles
                    withNormalizeCSS
                    theme={{
                        /** Put your mantine theme override here */
                        colorScheme: "dark",
                    }}
                >
                    <Component {...pageProps} />
                </MantineProvider>
            </RecoilRoot>
        </>
    );
}
export default MyApp;
