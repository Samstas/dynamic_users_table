import type { TInputField } from "../types/table";
import type { TFilters, TUser } from "../store/users/types";

import { AppDispatch } from "../store/store";
import { setFilter } from "../store/users/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectUsersData } from "../store/users/selectors";

export function createInputFields(filters: TFilters): TInputField[] {
  return [
    {
      id: 1,
      type: "text",
      name: "name",
      placeholder: "Search by name...",
      value: filters.name,
    },
    {
      id: 2,
      type: "text",
      name: "username",
      placeholder: "Search by username...",
      value: filters.username,
    },
    {
      id: 3,
      type: "text",
      name: "email",
      placeholder: "Search by e-mail...",
      value: filters.email,
    },
    {
      id: 4,
      type: "text",
      name: "phone",
      placeholder: "Search by phone...",
      value: filters.phone,
    },
  ];
}

export function useFilteredUsers() {
  const { users, filters } = useSelector(selectUsersData);
  const dispatch = useDispatch<AppDispatch>();

  function onChangeFilter(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    dispatch(setFilter({ [name]: value }));
  }

  const filteredUsers: TUser[] = users.filter(
    (user) =>
      user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      user.username.toLowerCase().includes(filters.username.toLowerCase()) &&
      user.email.toLowerCase().includes(filters.email.toLowerCase()) &&
      user.phone.toLowerCase().includes(filters.phone.toLowerCase())
  );

  return { onChangeFilter, filteredUsers };
}
