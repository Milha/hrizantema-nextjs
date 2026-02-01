export type CeremonyItem = {
  _id: string;
  ceremonyDate: string;
  firstName: string;
  lastName: string;
  yearOfBirth: string;
};

export type CeremonyGroup = {
  _id: string;
  cemeteryName?: string;
  ceremonies: CeremonyItem[];
};

export type ScheduleCeremonyProps = {
  ceremonies: CeremonyGroup[];
};
