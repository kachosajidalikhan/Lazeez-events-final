import { useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from '../../config';

export default function GoogleLogin() {

    const handleCredentialResponse = () => {
        window.location.href = `${API_BASE_URL}/api/auth/google`;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (window.google && window.google.accounts) {
                clearInterval(interval);

                window.google.accounts.id.initialize({
                    client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
                    callback: handleCredentialResponse,
                });

                window.google.accounts.id.renderButton(
                    document.getElementById("googleSignIn"),
                    { theme: "outline", size: "large" }
                );
            }
        }, 100); // check every 100ms

        return () => clearInterval(interval);
    }, []);

    return <div id="googleSignIn" className="md:w-[209px] w-full "></div>;
}
