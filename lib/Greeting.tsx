import { useRouter } from "next/router";

const Greeting = () => {
  const router = useRouter();

  return (
    <div className="bg-primary container py-12 flex justify-center items-center">
      <p className="text-center text-white text-3xl xmd:text-7xl font-light leading-10 xmd:leading-none tracking-tight xmd:tracking-tighter">
        {router.locale != undefined && router.locale === "es-AR"
          ? "Gracias por scrollear :)"
          : "Thanks for scrolling :)"}
      </p>
    </div>
  );
};

export default Greeting;
