import type { TInputField } from "../types/table";

import { useSelector } from "react-redux";
import { InputField } from "./InputField";
import { selectUsersData } from "../store/users/selectors";
import { createInputFields, useFilteredUsers } from "../hooks/useFilteredUsers";

export function SearchUserFields() {
  const { filters } = useSelector(selectUsersData);
  const { onChangeFilter } = useFilteredUsers();
  const inputFields = createInputFields(filters);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4 ">
      {inputFields?.map((field: TInputField) => (
        <InputField key={field.id} field={field} onChange={onChangeFilter} />
      ))}
    </div>
  );
}
