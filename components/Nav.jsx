"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const isUserLoggedIn = true;
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(true);

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };

    setProviders();
  }, []);
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="Logo"
          width={30}
          height={30}
        />
        <p className="logo_text">Promptopia</p>
      </Link>
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link className="black_btn" href="/create-prompt">
              Create Post
            </Link>
            <button className="outline_btn" type="button" onClick={signOut}>
              Sign Out
            </button>
            <Link href="/profile" className="">
              <Image
                className="rounded-full"
                src="/assets/images/logo.svg"
                alt="profile"
                width={37}
                height={37}
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map(
                (p = (
                  <button
                    className="black_btn"
                    type="button"
                    onClick={() => signIn(p.id)}
                    key={p.name}
                  >
                    Sign In
                  </button>
                ))
              )}
          </>
        )}
      </div>
      <div className="sm:hidden flex relative">
        {isUserLoggedIn ? (
          <div className="flex">
            <Image
              className="rounded-full"
              src="/assets/images/logo.svg"
              alt="profile"
              width={37}
              height={37}
              onClick={() => signIn(p.id)}
            />
            {toggleDropdown && (
              <div className="dropdawn">
                <Link
                  href={"/profile"}
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map(
                (p = (
                  <button
                    className="black_btn"
                    type="button"
                    onClick={() => setToggleDropdown((state) => !state)}
                    key={p.name}
                  >
                    Sign In
                  </button>
                ))
              )}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
