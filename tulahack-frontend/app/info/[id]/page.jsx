"use client";
import Navigation from "@/components/mainPage/header/navigation";
import TagUI from "@/ui/tag/tag";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import ChatList from "@/components/mainPage/chatList/chatListFavorite";
import { useQuery } from "react-query";
import axios from "axios";

async function getInfo() {
  const { data } = await axios.get(`http://94.103.86.64:8080/chat/${id}`);
  return data;
}

export default function ChatPage() {
  const params = useParams();
  const router = useRouter();
  const { isSuccess, data } = useQuery({
    queryKey: ["infoItem", params.id],
    queryFn: () => getMessage(id),
  });
  return (
    <>
      <div className="flex gap-3 justify-between h-12  bg-bg-white p-2">
        <div className="" onClick={() => router.back()}>
          <Image
            src={"https://img.icons8.com/ios/50/back--v1.png"}
            height={25}
            width={25}
            className=" h-6 w-6"
          />
        </div>
      </div>
      <div className=" bg-bg-white p-2">
        <div className="flex gap-2 mb-2">
          <Image
            src={
              "https://static.tildacdn.com/tild3366-6230-4162-b636-353136366132/99367B6E-B05B-467A-9.JPG"
            }
            height={50}
            width={50}
            className=" w-12 h-12 rounded-full"
            alt="Yoga"
          />
          <div>
            <div className=" text-base font-semibold">Наруто</div>
            <div className=" text-xs text-text-gray">67 участников</div>
          </div>
        </div>
        <div className=" text-base mb-2">
          Это сообщество для фанатов аниме и манги Наруто авторства Масаши
          Кишимото
        </div>
        <div className="flex gap-1">
          <TagUI text="Хакатон" />
          <TagUI text="Онлайн" />
          <TagUI text="Образование" />
          <TagUI text="IT" />
        </div>
      </div>
      <Navigation />
      <ChatList nameList={""} />
    </>
  );
}
