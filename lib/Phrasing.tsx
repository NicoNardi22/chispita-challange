import { useRouter } from "next/router";

const Phrasing = () => {
  const router = useRouter();

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-white">
      {router.locale != undefined && router.locale === "es-AR" ? (
        <p className="text-center px-4 xmd:px-48 font-light text-4xl xmd:text-7xl tracking-tight xmd:tracking-wider">
          Un hogar con espacio para coworkear, conectarte con{" "}
          <span className="bg-primary text-white font-semibold">
            aventuras locales
          </span>{" "}
          y personas increíbles.
        </p>
      ) : (
        <p className="text-center px-4 xmd:px-48 font-light text-4xl xmd:text-7xl tracking-tight xmd:tracking-wider">
          A home with space to cowork, connect with{" "}
          <span className="bg-primary text-white font-semibold">
            local adventures
          </span>{" "}
          and amazing people.
        </p>
      )}
    </div>
  );
};

export default Phrasing;
