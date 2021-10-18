import React from 'react';
import { useGoogleAuth } from './googleAuth';
const PublicPage = () => {
const { signIn } = useGoogleAuth();
    return (
        <div>
            <h2> Đây là trang public </h2>
            <button onClick={signIn}>Login</button>

        </div>
    );
};
export default PublicPage;

