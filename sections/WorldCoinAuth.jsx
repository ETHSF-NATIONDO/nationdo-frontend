import { WidgetProps } from '@worldcoin/id'
import dynamic from "next/dynamic";
const WorldIDWidget = dynamic(
    () => import('@worldcoin/id').then((mod) => mod.WorldIDWidget),
    { ssr: false }
)

export default function WorldCoinAuth() {
    return (
        <WorldIDWidget
            actionId="wid_staging_b1dcbc65295b1f46a4d64fc96473c36b" // obtain this from developer.worldcoin.org
            signal="my_signal"
            enableTelemetry
            onSuccess={(verificationResponse) => console.log(verificationResponse)}
            onError={(error) => console.error(error)}
            debug={true} // to aid with debugging, remove in production
        />
    )

}

