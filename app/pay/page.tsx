import type { Metadata } from 'next';
import PayLanding from '@/components/PayLanding';

export const metadata: Metadata = {
  title: 'Pay with Bold Wallet',
  description:
    'Open a Bitcoin payment in Bold Wallet. Send to an address with an optional amount pre-filled.',
  robots: { index: false, follow: false },
};

export default function PayPage() {
  return <PayLanding />;
}
