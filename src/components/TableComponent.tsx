import React, { useState } from "react";
import type { ApiData } from "../types/index.type";

const TableComponent: React.FC<ApiData> = ({ data }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [currentStartIndex, setCurrentStartIndex] = useState(0);

  const displayedMonths = Array.from({ length: 12 }, (_, i) => {
    const index = (currentStartIndex + i) % months.length;
    return months[index];
  });

  const handleLeft = () => {
    setCurrentStartIndex((prev) => (prev - 1 + months.length) % months.length);
  };

  const handleRight = () => {
    setCurrentStartIndex((prev) => (prev + 1) % months.length);
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="flex justify-between items-center px-4 py-6 border-b border-gray-200">
        <select
          className="rounded-md border-1 border-gray-400 py-2 px-1"
          id="year"
          name="year"
        >
          <option value="2023">Year 2023</option>
          <option value="2024">Year 2024</option>
          <option value="2025" selected>
            Year 2025
          </option>
        </select>
        <div className="flex space-x-2">
          <button
            onClick={handleLeft}
            className="rounded-md border-1 border-gray-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28px"
              viewBox="0 -960 960 960"
              width="28px"
              fill="#73a9dd"
            >
              <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
            </svg>
          </button>
          <button
            onClick={handleRight}
            className="rounded-md border-1 border-gray-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28px"
              viewBox="0 -960 960 960"
              width="28px"
              fill="#73a9dd"
            >
              <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
            </svg>
          </button>
          <button className="rounded-md px-2 py-1 bg-blue-950 text-white text-xl">
            + Add plan
          </button>
        </div>
      </div>
      <table className="min-w-full divide-y divide-gray-200 border-none">
        <thead className="bg-gray-50">
          <tr>
            <th colSpan={2}></th>
            {displayedMonths.map((month) => (
              <th
                key={month}
                colSpan={2}
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {month}
              </th>
            ))}
          </tr>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
            {displayedMonths.map((month) => (
              <>
                <th
                  key={`${month}-plan`}
                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Plan:
                </th>
                <th
                  key={`${month}-fact`}
                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Fact:
                </th>
              </>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-gray-200">
          <tr>
            <th
              rowSpan={2}
              className="px-6 py-3 text-left text-xs font-medium text-blue-900 uppercase tracking-wider"
            >
              Manager
            </th>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-900">
              Total income:
            </td>
            {displayedMonths.map((_, i) => {
              const totalMonth = data.data.total[i];
              const hasIncomePlan = totalMonth?.plan?.income != null;
              const hasIncomeFact = totalMonth?.fact?.income != null;
              const hasActivePlan = totalMonth?.plan?.activePartners != null;
              const hasActiveFact = totalMonth?.fact?.activePartners != null;

              const hasAnyData =
                hasIncomePlan ||
                hasIncomeFact ||
                hasActivePlan ||
                hasActiveFact;

              if (!hasAnyData) {
                return (
                  <td
                    key={`income-${i}`}
                    colSpan={4}
                    className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500 bg-gray-50 italic"
                  >
                    No data
                  </td>
                );
              }

              return (
                <>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-700">
                    {hasIncomePlan ? `$${totalMonth.plan.income}` : "—"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-700">
                    {hasIncomeFact ? `$${totalMonth.fact.income}` : "—"}
                  </td>
                </>
              );
            })}
          </tr>

          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-900">
              Total active partners:
            </td>
            {displayedMonths.map((_, i) => {
              const totalMonth = data.data.total[i];
              const hasIncomePlan = totalMonth?.plan?.income != null;
              const hasIncomeFact = totalMonth?.fact?.income != null;
              const hasActivePlan = totalMonth?.plan?.activePartners != null;
              const hasActiveFact = totalMonth?.fact?.activePartners != null;

              const hasAnyData =
                hasIncomePlan ||
                hasIncomeFact ||
                hasActivePlan ||
                hasActiveFact;

              if (!hasAnyData) {
                return null;
              }

              return (
                <>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-700">
                    {hasActivePlan ? totalMonth.plan.activePartners : "—"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-700">
                    {hasActiveFact ? totalMonth.fact.activePartners : "—"}
                  </td>
                </>
              );
            })}
          </tr>

          {data.data.table.map((manager) => (
            <React.Fragment key={manager.adminId}>
              <tr>
                <td
                  rowSpan={2}
                  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                >
                  {manager.adminName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Income:
                </td>
                {displayedMonths.map((_, i) => {
                  const monthIndex = (currentStartIndex + i) % 12;
                  const monthData = manager.months[monthIndex];

                  const hasIncomePlan = monthData?.plan?.income != null;
                  const hasIncomeFact = monthData?.fact?.income != null;
                  const hasActivePlan = monthData?.plan?.activePartners != null;
                  const hasActiveFact = monthData?.fact?.activePartners != null;

                  const hasAnyData =
                    hasIncomePlan ||
                    hasIncomeFact ||
                    hasActivePlan ||
                    hasActiveFact;

                  if (!hasAnyData) {
                    return (
                      <td
                        key={i}
                        colSpan={2}
                        rowSpan={2}
                        className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500 bg-gray-50 italic"
                      >
                        No data
                      </td>
                    );
                  }

                  return (
                    <>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-700">
                        {hasIncomePlan
                          ? `$${monthData.plan.income}`
                          : "No data"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-700">
                        {hasIncomeFact
                          ? `$${monthData.fact.income}`
                          : "No data"}
                      </td>
                    </>
                  );
                })}
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Active partners:
                </td>
                {displayedMonths.map((_, i) => {
                  const monthIndex = (currentStartIndex + i) % 12;
                  const monthData = manager.months[monthIndex];

                  const hasActivePlan = monthData?.plan?.activePartners != null;
                  const hasActiveFact = monthData?.fact?.activePartners != null;
                  const hasIncomePlan = monthData?.plan?.income != null;
                  const hasIncomeFact = monthData?.fact?.income != null;

                  const hasAnyData =
                    hasIncomePlan ||
                    hasIncomeFact ||
                    hasActivePlan ||
                    hasActiveFact;

                  if (!hasAnyData) {
                    return null;
                  }

                  return (
                    <>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-700">
                        {hasActivePlan
                          ? monthData.plan.activePartners
                          : "No data"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-700">
                        {hasActiveFact
                          ? monthData.fact.activePartners
                          : "No data"}
                      </td>
                    </>
                  );
                })}
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
