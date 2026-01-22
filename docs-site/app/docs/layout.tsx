import { Sidebar } from "@/components/Sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <main className="flex-1 overflow-auto">
        <div className="max-w-4xl mx-auto px-6 py-12">
          {children}
        </div>
      </main>
    </div>
  );
}
