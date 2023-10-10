import prismadb from "@/lib/prismadb";

interface DashBoardPageProps {
  params: { storeId: string };
}
export default async function DashBoardPage({ params }: DashBoardPageProps) {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });
  return <div>Active Store: {store?.name}</div>;
}
