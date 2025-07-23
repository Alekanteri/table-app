import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-950 text-white">
      <div className="flex items-center justify-between px-4 py-6">
        <div className="flex items-center justify-around space-x-10">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-cyan-400">3S</span>
            <span className="text-sm font-medium">CPA NETWORK</span>
          </div>

          <nav className="hidden md:block space-x-8">
            <a href="/#" className="hover:text-gray-300">
              PAYMENT SYSTEMS
            </a>
            <a href="/#" className="hover:text-gray-300">
              REFERRALS
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-14">
          <div className="flex items-center space-x-1">
            <span className="text-xl">$500</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e3e3e3"
            >
              <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>
          </div>

          <div className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e3e3e3"
            >
              <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
            </svg>
            <span className="text-sm font-medium">8</span>
          </div>

          <div className="flex items-center  space-x-1">
            <span className="text-sm font-medium">profile@mail.ru</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e3e3e3"
            >
              <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>
          </div>

          <div className="flex items-center space-x-1">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
              alt="UK Flag"
              className="h-5 w-5"
            />
            <span className="text-sm font-medium">ENG</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e3e3e3"
            >
              <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>
          </div>
        </div>
      </div>

      <nav className="bg-white">
        <ul className="flex items-center justify-around px-4 py-3">
          <li>
            <a
              href="/#"
              className="text-sm font-medium text-black hover:text-blue-500"
            >
              DASHBOARD
            </a>
          </li>
          <li>
            <a
              href="/#"
              className="text-sm font-medium text-black hover:text-blue-500"
            >
              STATISTICS
            </a>
          </li>
          <li>
            <a
              href="/#"
              className="text-sm font-medium text-black hover:text-blue-500"
            >
              OFFERS
            </a>
          </li>
          <li>
            <a
              href="/#"
              className="text-sm font-medium text-black hover:text-blue-500"
            >
              ADVERTISERS
            </a>
          </li>
          <li>
            <a
              href="/#"
              className="text-sm font-medium text-black hover:text-blue-500"
            >
              PARTNERS
            </a>
          </li>
          <li>
            <a
              href="/#"
              className="text-sm font-medium text-black hover:text-blue-500"
            >
              TICKETS
            </a>
          </li>
          <li>
            <a
              href="/#"
              className="text-sm font-medium text-black hover:text-blue-500"
            >
              BILLING
            </a>
          </li>
          <li>
            <a
              href="/#"
              className="text-sm font-medium text-black hover:text-blue-500"
            >
              TASKS
            </a>
          </li>
          <li>
            <a
              href="/#"
              className="text-sm font-medium text-black hover:text-blue-500"
            >
              NEWS
            </a>
          </li>
          <li>
            <a
              href="/#"
              className="text-sm font-medium text-black hover:text-blue-500 hover:border-b-1"
            >
              SETTINGS
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
