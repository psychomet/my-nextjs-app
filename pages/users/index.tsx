import type { NextPage } from "next";
import { useRouter } from 'next/router';

function UserList({ users }): NextPage {
  const router = useRouter();

  console.log("users", users);
  return;

  const refreshData = () => {
    router.replace(router.asPath);
  }

  <>
    <h1>List of Users</h1>
  </>;
}

export default UserList;

export async function getServerSideProps(context) {
  console.log('context',context);
  
  const response = await fetch(
    "https://5b5cb0546a725000148a67ab.mockapi.io/api/v1/users?page=4&limit=8"
  );
  const data = await response.json();

  return {
    props: {
      users: data,
    },
  };
}
