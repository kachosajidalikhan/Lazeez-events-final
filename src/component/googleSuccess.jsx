import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

export default function GoogleSuccess() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const token = searchParams.get('userToken');
        if (token) {
            localStorage.setItem('userToken', token);
            navigate('/App-Download-Section');
        }
    }, [searchParams, navigate]);

    return <div>Processing login...</div>;
} 