import type { TUser } from "../store/users/types";

import { NoUsersFound } from "./NoUsersFound";

type TUsersTableProps = {
  filteredUsers: TUser[];
};

export function UsersTable({ filteredUsers }: TUsersTableProps) {
  return filteredUsers.length === 0 ? (
    <NoUsersFound />
  ) : (
    <table className="min-w-full rounded-lg bg-cwhite font-medium">
      <thead>
        <tr className="rounded-lg border-b-2">
          <th className="py-2 px-4">Name</th>
          <th className="py-2 px-4">Username</th>
          <th className="py-2 px-4">E-mail</th>
          <th className="py-2 px-4">Phone</th>
        </tr>
      </thead>

      <tbody className="rounded-lg">
        {filteredUsers?.map((user) => (
          <tr
            key={user.id}
            className="hover:bg-cblue hover:text-cwhite transition last:border-none"
          >
            <td className="py-2 px-4">
              <span>{user.name}</span>
            </td>

            <td className="py-2 px-4">
              <span>{user.username}</span>
            </td>

            <td className="py-2 px-4">
              <span>{user.email}</span>
            </td>

            <td className="py-2 px-4">
              <span>{user.phone}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
