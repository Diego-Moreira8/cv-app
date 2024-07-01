import { Experience } from "../cv-reducer/types";
import { months } from "../utils/monthsArray";

type ExpPeriodProps = {
  exp: Experience;
};

function ExpPeriod({
  exp: { inProgress, startYear, startMonth, endYear, endMonth },
}: ExpPeriodProps) {
  let Period;
  const lessThanOneMonth = startYear === endYear && startMonth === endMonth;

  if (inProgress) {
    Period = (
      <>
        Desde {months[startMonth - 1].toLowerCase()}/{startYear}
      </>
    );
  } else if (lessThanOneMonth) {
    Period = (
      <>
        Em {months[startMonth - 1]}/{startYear}
      </>
    );
  } else {
    Period = (
      <>
        De {months[startMonth - 1].toLowerCase()}/{startYear} até{" "}
        {months[endMonth - 1].toLowerCase()}/{endYear}
      </>
    );
  }

  return Period;
}

export { ExpPeriod };
