"use client";

import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data: users, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  if (error) return <div>Failed to load users</div>;
  if (!users) return <div>Loading...</div>;

  return (
    <main className="m-6">
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>{user.title}</li>
        ))}
      </ul>
    </main>
  );
}
