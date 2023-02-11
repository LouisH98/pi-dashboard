import { type NextPage } from "next";
import Head from "next/head";
import Button from "./components/Button";
import Service, { ServiceProps } from "./components/Service";
import { BiPlus } from "react-icons/bi";
import { api } from "../utils/api";

const mockService: ServiceProps = {
  title: "Service",
  description: "Description",
  icon: "Icon",
};

const Home: NextPage = () => {
  const { data: services, error } = api.services.getAll.useQuery();

  return (
    <>
      <Head>
        <title>Pi Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen w-screen bg-white dark:bg-neutral-900 dark:text-neutral-50">
        <header className="flex flex-row items-center justify-between p-12">
          <h1 className="text-3xl font-bold">Pi Services</h1>
          <Button icon={<BiPlus className="text-1xl" />}>Add Service</Button>
        </header>
        <main>
          <div className="grid grid-flow-row grid-cols-1 justify-center gap-3 px-12 md:grid-cols-3 lg:grid-cols-5">
            {services?.map((service) => (
              <Service key={service.id} {...service} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;