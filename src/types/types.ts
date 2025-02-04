export type SortItem = {
  name: string;
  sortProperty: string;
};

export type HeaderProps = {
  value: string;
  setValue: (e: string) => void;
};
