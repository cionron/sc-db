import NumberFilterOption from "@/components/number-filter-option";
import { Prisma } from "@prisma/client";

interface props {
  field: string;
  aggregateType: string;
  havingInput: Prisma.IntNullableFilter[];
  setHavingInput: any;
}

export default function HavingInputNumber({
  field,
  aggregateType,
  havingInput,
  setHavingInput,
}: props) {
  const handleAddHavingString = (input: Prisma.IntNullableFilter) => {
    const nextHavingField: Prisma.IntNullableFilter[] = [input, ...havingInput];
    setHavingInput(nextHavingField);
  };
  return (
    <div>
      <div>
        <div className="flex justify-center">
          <span className="my-3 mx-6  w-32 text-center font-bold badge badge-lg badge-outline">
            {field}
          </span>
          <NumberFilterOption addWhere={handleAddHavingString} />
        </div>
        {havingInput.map((having, index) => (
          <div
            key={index}
            onClick={() =>
              setHavingInput([
                ...havingInput.slice(0, index),
                ...havingInput.slice(index + 1),
              ])
            }
            className="btn btn-sm  mx-3 my-1  hover:bg-red-500 hover:border-red-500"
          >
            HAVING {aggregateType} {field} {Object.keys(having)}{" "}
            {Object.values(having).toString()}
          </div>
        ))}
      </div>
    </div>
  );
}
