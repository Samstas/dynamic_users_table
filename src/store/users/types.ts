interface IGeo {
  lat: string;
  lng: string;
}

interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export type TUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
};

export type TFilters = {
  name: string;
  username: string;
  phone: string;
  email: string;
};

export type TInitialState = {
  users: TUser[];
  isLoading: boolean;
  error: null | string | undefined;
  filters: TFilters;
};
