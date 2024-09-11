"use client";

import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Users() {
  const { data: users, error } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );

  if (error) return <div>Failed to load users</div>;
  if (!users) return <div>Loading...</div>;

  return (
    <main className="m-6">
      <h3 className="text-xl">Users</h3>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </main>
  );
}
