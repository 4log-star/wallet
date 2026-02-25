import { TransactinLayout } from "@/components/layouts/TransactionLayout";
import { SwapCard } from "./components/SwapCard";


export function SwapScreen(){
    return(
        <TransactinLayout title="Swap">
            <SwapCard/>
        </TransactinLayout>
    )
}