"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function ChatHeader() {
  const router = useRouter();
  return (
    <>
      <div className="flex gap-3 item h-12 items-center fixed z-10 top-0 right-0 left-0  bg-bg-white p-2">
        <div className="" onClick={() => router.back()}>
          <Image
            src={"https://img.icons8.com/ios/50/back--v1.png"}
            height={25}
            width={25}
            className=" h-6 w-6"
          />
        </div>

        <div className="flex-1">
          <Link href={"/info/1"}>
            <div className="flex gap-2">
              <Image
                src={
                  "https://static.tildacdn.com/tild3366-6230-4162-b636-353136366132/99367B6E-B05B-467A-9.JPG"
                }
                height={40}
                width={40}
                className=" w-10 h-10 rounded-full"
                alt="Yoga"
              />
              <div>
                <div className=" text-base font-semibold">Наруто</div>
                <div className=" text-xs text-text-gray">Описание</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="text-xl font-bold px-2">
          <Image
            src={"https://img.icons8.com/ios-filled/25/ellipsis.png"}
            height={25}
            width={25}
            className=" h-6 w-6"
          />
        </div>
      </div>
    </>
  );
}
