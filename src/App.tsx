import { useEffect } from "react";
import { AppDispatch } from "./store/store";
import { UsersTable } from "./components/UsersTable";
import { getUsers } from "./store/users/asyncActions";
import { Spinner } from "./components/shared/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { selectUsersData } from "./store/users/selectors";
import { useFilteredUsers } from "./hooks/useFilteredUsers";
import { SearchUserFields } from "./components/SearchUserFields";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, error } = useSelector(selectUsersData);
  const { filteredUsers } = useFilteredUsers();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (isLoading) return <Spinner />;
  if (error) return <p>Failed to fetch users</p>;

  return (
    <>
      <main className="container mx-auto mt-10 p-4 bg-cblue rounded-xl ">
        <h1 className="text-2xl font-semibold mb-6">Users Table</h1>

        <SearchUserFields />
        <UsersTable filteredUsers={filteredUsers} />
      </main>
    </>
  );
}

export default App;
