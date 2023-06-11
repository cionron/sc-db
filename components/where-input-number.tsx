import NumberFilterOption from "@/components/number-filter-option";
import { Prisma } from "@prisma/client";

interface props {
  field: string;
  whereInput: Prisma.DecimalFilter[];
  setWhereInput: any;
}

export default function WhereInputNumber({
  field,
  whereInput,
  setWhereInput,
}: props) {
  const handleAddWhereString = (input: Prisma.DecimalFilter) => {
    const nextWhereField: Prisma.DecimalFilter[] = [input, ...whereInput];
    setWhereInput(nextWhereField);
  };
  return (
    <div>
      <div className="flex justify-center">
        <span className="my-3 mx-6  w-24 text-center font-bold badge badge-lg badge-outline">
          {field}
        </span>
        <NumberFilterOption addWhere={handleAddWhereString} />
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
          WHERE {field} {Object.keys(where)} {Object.values(where).toString()}
        </div>
      ))}
    </div>
  );
}
