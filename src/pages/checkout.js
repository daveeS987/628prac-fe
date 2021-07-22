import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';

import Layout from '../components/Layout/Layout';

function CheckoutPage() {
  const [session, loading] = useSession();

  return (
    <>
      <Layout>
        <h1>Checkout Page</h1>

        {!session && (
          <>
            <h2>Sign in to see Checkout Page</h2>
            <h3>This uses sessions to see if you're logged in</h3>
            <br />
            <button onClick={() => signIn()}>Sign in</button>
          </>
        )}
        {session && (
          <>
            <h3>
              This is a protected route. You can only see this, if you're logged
              in.
            </h3>
            <h3>Signed in as {session.user.email}</h3> <br />
            <button
              onClick={() =>
                signOut({ callbackUrl: `${process.env.NEXTAUTH_URL}` })
              }
            >
              Sign out
            </button>
          </>
        )}
      </Layout>
    </>
  );
}

export default CheckoutPage;
