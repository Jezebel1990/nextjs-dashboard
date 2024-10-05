import { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';
import { fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;

  };
  }) {
    const query = searchParams?.query || '';
    const customers = await fetchFilteredCustomers(query);
  
  return (
    <div className={`${lusitana.className} w-full`}>
      <CustomersTable  customers={customers} />
    </div>
  );
  }