import React, { useEffect, useState } from "react";
import type { ApiData } from "../types/index.type";
import TableComponent from "./TableComponent";

const Table: React.FC = () => {
  const [data, setData] = useState<ApiData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://3snet.co/js_test/api.json");
        const res = await response.json();
        setData(res);
      } catch (err) {
        setError(`Ошибка при загрузке данных ${err}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <p className="text-lg text-gray-600">Загрузка данных...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <p className="text-lg text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center py-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="28px"
          viewBox="0 -960 960 960"
          width="28px"
          fill="#3d3d3d"
        >
          <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
        </svg>
        <span className="text-2xl text-blue-950">Affiliate manager</span>
      </div>
      <nav>
        <ul className="flex items-center space-x-6 px-5 pt-6 border-b-1 border-gray-100">
          <li className="hover:border-b-1 border-blue-900 text-gray-500">
            Scheme
          </li>
          <li className="hover:border-b-1 border-blue-900 text-gray-500">
            Plan
          </li>
          <li className="hover:border-b-1 border-blue-900 text-gray-500">
            Payment
          </li>
        </ul>
      </nav>
      <TableComponent data={data!} />
    </>
  );
};

export default Table;
