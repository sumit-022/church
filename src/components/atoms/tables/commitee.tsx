import React from "react";

const CommiteeTable = () => {
  return (
    <table className="border w-full">
      <thead className="border">
        <tr>
          <th className="border-2 text-primary-grey px-4 py-2 w-[37%]">
            Name of the Commitee
          </th>
          <th className="border-2 text-primary-grey px-4 py-2">Convener</th>
          <th className="border-2 text-primary-grey px-4 py-2 w-[37%]">
            Members
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border-2 text-center text-primary-grey px-4 py-2">
            Commitee
          </td>
          <td className="border-2 text-center text-primary-grey px-4 py-2">
            Position
          </td>
          <td className="border-2 text-center text-primary-grey px-4 py-2">
            Term
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CommiteeTable;
