import { Prisma } from "@prisma/client";
import NumberNullableFilterOption from "./number-nullable-filter-option";

interface props {
  field: string;
  whereInput: Prisma.IntNullableFilter[];
  setWhereInput: any;
}

export default function WhereInputNumberNullable({
  field,
  whereInput,
  setWhereInput,
}: props) {
  const handleAddWhereString = (input: Prisma.IntNullableFilter) => {
    const nextWhereField: Prisma.IntNullableFilter[] = [input, ...whereInput];
    setWhereInput(nextWhereField);
  };
  return (
    <div>
      <div className="flex justify-center">
        <span className="my-3 mx-6  w-24 text-center font-bold badge badge-lg badge-outline">
          {field}
        </span>
        <NumberNullableFilterOption addWhere={handleAddWhereString} />
      </div>
      {whereInput.map((where, index) => (
        <div
          key={index}
          onClick={() =>
            setWhereInput([
              ...whereInput.slice(0, index),
              ...whereInput.slice(index + 1),
            ])
          }
          className="btn btn-sm  mx-3 my-1  hover:bg-red-500 hover:border-red-500"
        >
          WHERE {field} {Object.keys(where)}{" "}
          {Object.values(where)[0] === null
            ? "NULL"
            : Object.values(where).toString()}
        </div>
      ))}
    </div>
  );
}
