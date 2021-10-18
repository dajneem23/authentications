import React from 'react';
import { useGoogleAuth } from "./googleAuth";
const PrivatePage = () => {
    const { googleUser } = useGoogleAuth()
    const { signOut } = useGoogleAuth();
    return (  
        <div>
            <h2> Đây là trang private </h2>
                <div>
                    <h1>{googleUser.profileObj.name}</h1>
                    <img src={googleUser.profileObj.imageUrl} alt='avatar' />
                </div>
                <button onClick={signOut}>Logout</button>
        </div>
    );
};
export default PrivatePage;

