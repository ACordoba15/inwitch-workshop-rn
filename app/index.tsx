import WalletMasterBalance from "@/components/Balances";
import MasterWalletEntity from "@/components/Entities";
import { FilterBalance } from "@/components/Filter";
import { SafeAreaViewWrapper } from "@/components/SafeAreaViewWrapper";


export default function Home() {
  return (
		<SafeAreaViewWrapper>
			<MasterWalletEntity />
			<WalletMasterBalance />
		</SafeAreaViewWrapper>
  );
}