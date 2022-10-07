import React from "react";
import { getProviders, signIn } from "next-auth/react";

function login({ providers }) {
  return (
    <div className="flex flex-col items-center justify-center bg-black min-h-screen w-full">
      <img
        className="w-52 mb-9"
        src="https://links.papareact.com/9xl"
        alt="spotify-logo"
      />
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="bg-[#18D860] text-white py-3 px-5 rounded-full hover:opacity-50 transition-opacity duration-200"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
