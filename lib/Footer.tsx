import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { FooterData } from "../pages/api/footer";
import { useRouter } from "next/router";
import UserContext from "./UserContext";

const Footer = ({ footerData }: { footerData: FooterData }) => {
  const router = useRouter();
  const { screen } = useContext(UserContext);

  return (
    <div className="pt-20 container bg-white">
      {/* Divisor */}
      <div className="flex items-center">
        <div className="h-px w-1/5 bg-primary"></div>
        <div className="h-px w-1/5 bg-[#ADC22F]"></div>
        <div className="h-px w-1/5 bg-[#AA2275]"></div>
        <div className="h-px w-1/5 bg-[#17A3AB]"></div>
        <div className="h-px w-1/5 bg-[#FF8429]"></div>
      </div>
      <div className="py-20">
        <div className="grid grid-cols-1 xmd:grid-cols-3 gap-y-20 xmd:gap-y-0 gap-x-0 xmd:gap-x-32 lg:gap-x-48 xl:gap-x-60 place-content-stretch">
          <div>
            <div className="flex items-center justify-center xmd:justify-start">
              <Image
                src={footerData.logo.url}
                alt={footerData.logo.alt}
                width={
                  screen.width != undefined && screen.width >= 768 ? 95 : 71
                }
                height={
                  screen.width != undefined && screen.width >= 768 ? 16 : 12
                }
              />
            </div>
            <div className="mt-7">
              <p className="text-base leading-6 text-center xmd:text-left tracking-wider">
                {footerData.wording}
              </p>
            </div>
            <div className="mt-6 flex items-center justify-center xmd:justify-start">
              <div className="flex items-center">
                <Image
                  src={footerData.networkIcons.youtube.url}
                  alt={footerData.networkIcons.youtube.alt}
                  width={20.02}
                  height={14.01}
                />
              </div>
              <div className="ml-9 flex items-center">
                <Image
                  src={footerData.networkIcons.facebook.url}
                  alt={footerData.networkIcons.facebook.alt}
                  width={20}
                  height={19.88}
                />
              </div>
              <div className="ml-9 flex items-center">
                <Image
                  src={footerData.networkIcons.twitter.url}
                  alt={footerData.networkIcons.twitter.alt}
                  width={20.92}
                  height={16.99}
                />
              </div>
              <div className="ml-9 flex items-center">
                <Image
                  src={footerData.networkIcons.instagram.url}
                  alt={footerData.networkIcons.instagram.alt}
                  width={18.01}
                  height={18.04}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-2xl font-semibold text-center xmd:text-left">
              {router.locales != undefined && router.locale === "es-AR"
                ? "Contactá con nosotros"
                : "Contact us"}
            </p>
            <div className="mt-4">
              <p className="text-lg tracking-wider text-center xmd:text-left">
                T:{footerData.us.telephone}
              </p>
              <p className="text-lg tracking-wider text-center xmd:text-left">
                E:{footerData.us.email}
              </p>
            </div>
          </div>
          <div className="hidden xmd:flex items-center">
            <ul>
              {footerData.urls.map((item, index) => {
                return (
                  <li key={index} className="capitalize text-lg tracking-wider">
                    <Link href={item}>
                      <a>{item.replace("/", "")}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
