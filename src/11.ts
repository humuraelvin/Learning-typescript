type specialDate = Date & { getReason(): string };

const newYearEvent: specialDate = {
  ...new Date(),
  getReason: () => "last day of the Year",
};

newYearEvent
