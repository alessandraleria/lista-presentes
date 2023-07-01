import Card from "@/components/home/card";
import Balancer from "react-wrap-balancer";
import Image from "next/image";

export default async function Home() {
  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text pb-3 text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{
            animationDelay: "0.15s",
            animationFillMode: "forwards",
            color: "#531D13",
          }}
        >
          <Balancer>Angelo & Malu</Balancer>
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu orci
            in dui rutrum efficitur sed ac libero. Nunc tempus erat arcu, nec
            gravida nibh ultrices ac.
          </Balancer>
        </p>

        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
            <strong>PIX Angelo:</strong> angelo.bz.souza@gmail.com
          </Balancer>
        </p>

        <p
          className="animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
            <strong>PIX Malu:</strong> 491.749.118-56
          </Balancer>
        </p>
      </div>
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features.map(({ title, link, price, demo, selected }) => (
          <Card
            key={title}
            title={title}
            link={link}
            price={price}
            demo={demo}
            selected={selected}
          />
        ))}
      </div>
    </>
  );
}

const features = [
  {
    key: 1,
    title: "Cafeteira",
    link: "[Ver online](https://www.google.com)",
    price: "R$10,00",
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="Cafeteira" src="/cafeteira.jpg" width={210} height={210} />
      </div>
    ),
    selected: false,
  },
  {
    key: 2,
    title: "Cafeteira",
    link: "[Ver online](https://www.google.com)",
    price: "R$10,00",
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="Cafeteira" src="/cafeteira.jpg" width={210} height={210} />
      </div>
    ),
    selected: true,
  },
  {
    key: 3,
    title: "Cafeteira",
    link: "[Ver online](https://www.google.com)",
    price: "R$10,00",
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="Cafeteira" src="/cafeteira.jpg" width={210} height={210} />
      </div>
    ),
    selected: false,
  },
  {
    key: 4,
    title: "Cafeteira",
    link: "[Ver online](https://www.google.com)",
    price: "R$10,00",
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="Cafeteira" src="/cafeteira.jpg" width={210} height={210} />
      </div>
    ),
    selected: false,
  },
  {
    key: 5,
    title: "Cafeteira",
    link: "[Ver online](https://www.google.com)",
    price: "R$10,00",
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="Cafeteira" src="/cafeteira.jpg" width={210} height={210} />
      </div>
    ),
    selected: false,
  },
  {
    key: 6,
    title: "Cafeteira",
    link: "[Ver online](https://www.google.com)",
    price: "R$10,00",
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="Cafeteira" src="/cafeteira.jpg" width={210} height={210} />
      </div>
    ),
    selected: true,
  },
];