import EnumFilterOption from "@/components/enum-filter-option";
import {
  translateCourse,
  translateMajor,
  trnaslateGender,
} from "@/lib/utils/translate";
import { Course, Gender, Major, Prisma } from "@prisma/client";

interface props {
  field: "Course" | "Major" | "Gender";
  fieldText: string;
  whereInput:
    | Prisma.EnumCourseFilter[]
    | Prisma.EnumMajorFilter[]
    | Prisma.EnumGenderFilter[];
  setWhereInput: any;
}

export default function WhereInputEnum({
  field,
  fieldText,
  whereInput,
  setWhereInput,
}: props) {
  let options: string[] = [];
  const handleAddWhereString = (input: (typeof whereInput)[number]) => {
    const nextWhereField: any = [input, ...whereInput];
    setWhereInput(nextWhereField);
  };
  if (field === "Course") {
    options = Object.values(Course).map(translateCourse);
    return (
      <div>
        <div className="flex justify-center">
          <span className="my-3 mx-6  w-24 text-center font-bold badge badge-lg badge-outline">
            {fieldText}
          </span>
          <EnumFilterOption
            addWhere={handleAddWhereString}
            field={field}
            options={options}
          />
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
            WHERE {fieldText} {Object.keys(where)}{" "}
            {Object.values(where).map(translateCourse)}
          </div>
        ))}
      </div>
    );
  } else if (field === "Major") {
    options = Object.values(Major).map(translateMajor);
    return (
      <div>
        <div className="flex justify-center">
          <span className="my-3 mx-6 w-24 text-center font-bold badge badge-lg badge-outline">
            {fieldText}
          </span>
          <EnumFilterOption
            addWhere={handleAddWhereString}
            field={field}
            options={options}
          />
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
            WHERE {fieldText} {Object.keys(where)}{" "}
            {Object.values(where).map(translateMajor)}
          </div>
        ))}
      </div>
    );
  } else if (field === "Gender") {
    options = Object.values(Gender).map(trnaslateGender);
    return (
      <div>
        <div className="flex justify-center">
          <span className="my-3 mx-6  w-24 text-center font-bold badge badge-lg badge-outline">
            {fieldText}
          </span>
          <EnumFilterOption
            addWhere={handleAddWhereString}
            field={field}
            options={options}
          />
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
            WHERE {fieldText} {Object.keys(where)}{" "}
            {Object.values(where).map(trnaslateGender)}
          </div>
        ))}
      </div>
    );
  } else {
    return <div></div>;
  }
}
