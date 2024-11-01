import React, { useEffect, useState } from 'react';

const BackgroundColorChanger: React.FC = () => {
    const [color, setColor] = useState<string>('#ffffff');

    const getRandomColor = (): string => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setColor(getRandomColor());
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div style={{ backgroundColor: color, height: '100vh', transition: 'background-color 1s' }}>
            <h1 style={{ color: '#fff', textAlign: 'center', paddingTop: '20%' }}>
                Background color changes every 3 seconds!
            </h1>
        </div>
    );
};

export default BackgroundColorChanger;
