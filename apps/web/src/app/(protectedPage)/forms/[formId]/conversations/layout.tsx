import type { Metadata } from "next";

import { ConversationsSidebar } from "./_components/conversationsSidebar";

type Props = {
  children: React.ReactNode;
  params: { formId: string };
};

export const metadata: Metadata = {
  title: "Responses",
};

export default function Layout({ children, params: { formId } }: Props) {
  return (
    <div className="flex h-full">
      <div className="w-[400px] min-w-[400px]">
        <ConversationsSidebar formId={formId} />
      </div>
      <div className="grow p-3">{children}</div>
    </div>
  );
}
