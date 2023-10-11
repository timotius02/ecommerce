import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import SettingsForm from "./components/settings-form";
import { headers } from "next/headers";

interface SettingsPageProps {
  params: {
    storeId: string;
  };
}

export default async function SetingsPage({ params }: SettingsPageProps) {
  const { userId } = auth();
  const headersList = headers();
  const host = headersList.get("host");

  if (!userId) {
    redirect("/sign-in");
  }

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    },
  });

  if (!store) {
    redirect("/");
  }

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SettingsForm initialData={store} host={host ?? ""} />
      </div>
    </div>
  );
}