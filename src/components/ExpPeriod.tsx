import { Experience } from "../cv-reducer/types";
import { months } from "../utils/monthsArray";

function ExpPeriod({ exp }: { exp: Experience }) {
  return exp.inProgress ? (
    <>
      Desde {months[exp.startMonth - 1].toLowerCase()}/{exp.startYear}
    </>
  ) : (
    <>
      De {months[exp.startMonth - 1].toLowerCase()}/{exp.startYear} até{" "}
      {months[exp.endMonth - 1].toLowerCase()}/{exp.endYear}
    </>
  );
}

export { ExpPeriod };
