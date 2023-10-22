"use client";

import ChatWindow from "@/components/chatPage/chatWindow";
import ChatInput from "@/components/chatPage/chatInput";
import ChatHeader from "@/components/chatPage/chatHeader";
import { useParams } from "next/navigation";

export default function ChatPage() {
  const params = useParams();
  return (
    <>
      <ChatHeader />
      <ChatWindow id={params.id} />
      <ChatInput id={params.id} />
    </>
  );
}
