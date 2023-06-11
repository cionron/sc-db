import { C, Course, Gender, Major, Prisma } from "@prisma/client";
import { faker } from "@faker-js/faker/locale/zh_CN";
import { prisma } from "@/lib/utils/client";

const StudentSum = 2000;
const GradeMin = 50;
const GradeMax = 100;

const snoArray: any[] = [];
for (let index = 0; index < 445320; index++) {
  const randSno = faker.helpers.fromRegExp("[A-Z]{2}[0-9]{8}");
  snoArray.push(randSno);
}

function createRandomStudentMale(index: number): Prisma.SCreateInput {
  return {
    sno: snoArray[index],
    sname: faker.person.fullName({ sex: "male" }),
    sex: "Male",
    age: faker.number.int({ min: 18, max: 25 }),
    dept: faker.helpers.enumValue(Major),
    phone_num: faker.phone.number("+86 1##########"),
    email: faker.internet.email(),
    address: `${faker.location.state()} ${faker.location.city()} ${faker.location.streetAddress()}`,
  };
}

function createRandomStudentFemale(index: number): Prisma.SCreateInput {
  return {
    sno: snoArray[index],
    sname: faker.person.fullName({ sex: "female" }),
    sex: "Female",
    age: faker.number.int({ min: 18, max: 25 }),
    dept: faker.helpers.enumValue(Major),
    phone_num: faker.phone.number("+86 1##########"),
    email: faker.internet.email(),
    address: `${faker.location.state()} ${faker.location.city()} ${faker.location.streetAddress()}`,
  };
}

const creditsArray = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

const courseNames = Object.values(Course);
const ANames = courseNames.slice(30, 50);
const BNames = courseNames.slice(10, 30);
const CNames = courseNames.slice(0, 10);

const cnoA: any[] = [];
const cnoB: any[] = [];
const cnoC: any[] = [];
for (let index = 0; index < 20; index++) {
  const randCno = faker.helpers.fromRegExp("A[0-9]{4}");
  cnoA.push(randCno);
}
for (let index = 0; index < 20; index++) {
  const randCno = faker.helpers.fromRegExp("B[0-9]{4}");
  cnoB.push(randCno);
}
for (let index = 0; index < 10; index++) {
  const randCno = faker.helpers.fromRegExp("C[0-9]{4}");
  cnoC.push(randCno);
}

const cnoArray = cnoA.concat(cnoB).concat(cnoC);

const createCrouseA = (name: Course, index: number) =>
  ({
    cno: cnoA[index],
    cname: name,
    credit: faker.helpers.arrayElement(creditsArray),
  } satisfies Prisma.CCreateInput);

const createCrouseB = (name: Course, index: number) =>
  ({
    cno: cnoB[index],
    cname: name,
    credit: faker.helpers.arrayElement(creditsArray),
  } satisfies Prisma.CCreateInput);

const createCrouseC = (name: Course, index: number) =>
  ({
    cno: cnoC[index],
    cname: name,
    credit: faker.helpers.arrayElement(creditsArray),
  } satisfies Prisma.CCreateInput);

const cpSet = (cno: string) =>
  ({
    cno: cno,
  } satisfies Prisma.CWhereUniqueInput);

const cpSetC = cnoA.map(cpSet).concat(cnoB.map(cpSet));
const cpSetB = cnoA.map(cpSet);

const createAInput = ANames.map((name, index) => createCrouseA(name, index));
const createBInput = BNames.map((name, index) => createCrouseB(name, index));
const createCInput = CNames.map((name, index) => createCrouseC(name, index));

async function main() {
  // 1/2 Student SUM
  for (let i = 0; i < StudentSum / 2; i++) {
    const s1 = createRandomStudentMale(2 * i);
    await prisma.s.create({
      data: s1,
    });
    const s2 = createRandomStudentFemale(2 * i + 1);
    await prisma.s.create({
      data: s2,
    });
  }

  // Course

  await prisma.c.createMany({ data: createAInput });

  await prisma.c.createMany({ data: createBInput });

  await prisma.c.createMany({ data: createCInput });

  for (let i = 0; i < 10; i++) {
    await prisma.c.update({
      where: {
        cno: cnoC[i],
      },
      data: {
        cpre: {
          set: faker.helpers.arrayElements(cpSetC, { min: 1, max: 3 }),
        },
      },
    });
  }
  for (let i = 0; i < 20; i++) {
    await prisma.c.update({
      where: {
        cno: cnoB[i],
      },
      data: {
        cpre: {
          set: faker.helpers.arrayElements(cpSetB, { min: 1, max: 3 }),
        },
      },
    });
  }

  // SC
  for (let i = 0; i < StudentSum; i++) {
    const sno = snoArray[i];
    const randomSelectCourse = faker.helpers.arrayElements(cnoArray, {
      min: 0,
      max: 50,
    });

    const gradeNullCursor = faker.number.int({
      min: 0,
      max: randomSelectCourse.length,
    });

    for (let j = 0; j < gradeNullCursor; j++) {
      const cno = randomSelectCourse[j];
      await prisma.sC.create({
        data: {
          sno: sno,
          cno: cno,
        },
      });
    }

    for (let j = gradeNullCursor; j < randomSelectCourse.length; j++) {
      const cno = randomSelectCourse[j];
      await prisma.sC.create({
        data: {
          sno: sno,
          cno: cno,
          grade: faker.number.int({ min: GradeMin, max: GradeMax }),
        },
      });
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
function cpConnect(id: number): any {
  throw new Error("Function not implemented.");
}
