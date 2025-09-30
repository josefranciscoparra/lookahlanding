import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
import Link from "next/link";

export const metadata = {
  title: "Página no encontrada | Lookah",
  description: "Lookah - Probador Virtual con IA",
};

export default function NotFoundPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <div className="section panel overflow-hidden">
            <div className="section-outer panel py-6 xl:py-9">
              <div className="container max-w-lg">
                <div className="section-inner panel text-center">
                  <div className="panel vstack gap-4 sm:gap-6 xl:gap-8">
                    <div className="panel vstack gap-2">
                      <h1 className="h1 sm:display-6 xl:display-5 m-0">404</h1>
                      <p className="fs-5 sm:fs-4 text-dark text-opacity-70">
                        Página no encontrada
                      </p>
                    </div>
                    <div className="panel">
                      <p className="fs-6 sm:fs-5">
                        Lo sentimos, la página que buscas no existe o ha sido movida.
                      </p>
                    </div>
                    <div className="panel">
                      <Link
                        href="/"
                        className="btn btn-md sm:btn-lg btn-primary text-white"
                      >
                        Volver al inicio
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer2 />
      </div>
    </>
  );
}
