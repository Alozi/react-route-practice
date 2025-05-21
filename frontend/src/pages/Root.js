import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import { useEffect } from 'react';
import { getTokenDuration } from '../util/auth';

export default function Root() {
    // const navigation = useNavigation();
    const token = useLoaderData();
    const submit = useSubmit();

    useEffect(() => {
        if (!token) {
            return;
        }

        if (token === 'EXPIRED') {
            submit(null, { action: '/logout', method: 'post' });
        }

        const tokentDuration = getTokenDuration();
        console.log(tokentDuration);

        setTimeout(() => {
            submit(null, { action: '/logout', method: 'post' })
        }, tokentDuration);

    }, [token, submit]);

    return <>
        <MainNavigation />
        <main>
            {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
            <Outlet />
        </main>
    </>
}