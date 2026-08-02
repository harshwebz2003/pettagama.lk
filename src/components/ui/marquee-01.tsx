import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee-01-utils/marquee";

const reviews = [
  {
    name: "Kavindi Wickramasinghe",
    username: "@kavindi_arts",
    body: "“The crystal-clear epoxy resin from Pettagama.lk is unmatched! Zero bubbles and crystal mirror finish on my coaster sets.”",
    profile: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    district: "Galle",
  },
  {
    name: "Dinuka Perera",
    username: "@dinuka_crafts",
    body: "“Super fast 24h delivery to Colombo! The 3D silicone flower moulds are extremely durable and flexible.”",
    profile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
    district: "Colombo",
  },
  {
    name: "Amaara Fernando",
    username: "@amaara_diy",
    body: "“The DIY Pipe Cleaner Flower Kit had everything I needed. My bouquet turned out gorgeous! Highly recommend Pettagama.”",
    profile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    district: "Kandy",
  },
  {
    name: "Sachith Alwis",
    username: "@sachith_woodcraft",
    body: "“Ordered air-dry clay and gold leaf flakes. Packaged safely and prompt delivery right to my doorstep in Kalutara.”",
    profile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    district: "Kalutara",
  },
  {
    name: "Nipuni Jayawardena",
    username: "@nipuni_pearls",
    body: "“The 18K gold plated freshwater pearl necklace gift set exceeded my expectations! Beautiful luxury box packaging.”",
    profile: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    district: "Kurunegala",
  },
  {
    name: "Tharindu Silva",
    username: "@tharindu_resin",
    body: "“Best craft supply store in Sri Lanka! Friendly WhatsApp customer support always helps with resin mixing ratios.”",
    profile: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80",
    district: "Negombo",
  },
  {
    name: "Dilini Senanayake",
    username: "@dilini_creations",
    body: "“Extremely impressed with the embroidery thread quality and punch needle kit. Delivery was super fast to Matara!”",
    profile: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=150&q=80",
    district: "Matara",
  },
  {
    name: "Roshan Jayasinghe",
    username: "@roshan_artstudio",
    body: "“Pettagama.lk has been my go-to store for bulk resin moulds and pigment powders for over 2 years now!”",
    profile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    district: "Gampaha",
  },
];

const firstRow = reviews.slice(0, 4);
const secondRow = reviews.slice(4);

const ReviewCard = ({
  profile,
  name,
  username,
  body,
  district,
}: {
  profile: string;
  name: string;
  username: string;
  body: string;
  district?: string;
}) => {
  return (
    <Card className="relative h-full w-72 sm:w-80 cursor-pointer overflow-hidden border border-sky-200/80 bg-white/95 backdrop-blur-md shadow-sm hover:shadow-md p-4 transition-all hover:scale-[1.02]">
      <CardContent className="p-0 flex flex-col gap-3">
        <div className="flex flex-row items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="rounded-full object-cover border-2 border-sky-300 shrink-0 w-11 h-11"
            alt={name}
            src={profile}
          />
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5">
              <p className="text-xs font-black text-slate-800 truncate">{name}</p>
              <span className="text-[10px] text-amber-500 font-extrabold">★ 5.0</span>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-[11px] font-semibold text-sky-600 truncate">{username}</p>
              {district && (
                <span className="text-[9px] bg-sky-100/80 text-[#0277BD] px-2 py-0.5 rounded-full font-black uppercase">
                  {district}
                </span>
              )}
            </div>
          </div>
        </div>
        <p className="text-xs leading-relaxed text-slate-600 font-medium line-clamp-3">{body}</p>
      </CardContent>
    </Card>
  );
};

export default function TestimonialMarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-4">
      <Marquee pauseOnHover className="[--duration:28s]">
        {firstRow.map((review, idx) => (
          <ReviewCard key={idx} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:28s] mt-3">
        {secondRow.map((review, idx) => (
          <ReviewCard key={idx} {...review} />
        ))}
      </Marquee>
      {/* Side Vignette Fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#DFF7FF]/90 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#DFF7FF]/90 to-transparent" />
    </div>
  );
}
