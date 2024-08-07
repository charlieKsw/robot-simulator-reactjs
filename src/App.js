import React, { useState, useCallback, useMemo, useEffect } from 'react';
import './index.css';

const directions = ['North', 'East', 'South', 'West'];

const App = () => {
    const [coordinate, setCoordinate] = useState({ x: 0, y: 0 });
    const [direction, setDirection] = useState('North');

    const moveForward = useCallback(
        (currentDirection = direction) => {
            setCoordinate((prevCoordinate) => {
                let { x, y } = prevCoordinate;
                switch (currentDirection) {
                    case 'North':
                        y = y < 4 ? y + 1 : 0;
                        break;
                    case 'South':
                        y = y > 0 ? y - 1 : 4;
                        break;
                    case 'East':
                        x = x < 4 ? x + 1 : 0;
                        break;
                    case 'West':
                        x = x > 0 ? x - 1 : 4;
                        break;
                    default:
                        break;
                }
                return { x, y };
            });
        },
        [direction]
    );

    const rotateLeft = useCallback(() => {
        setDirection((prevDirection) => {
            const currentIndex = directions.indexOf(prevDirection);
            const newIndex = (currentIndex - 1 + directions.length) % directions.length;
            return directions[newIndex];
        });
    }, []);

    const rotateRight = useCallback(() => {
        setDirection((prevDirection) => {
            const currentIndex = directions.indexOf(prevDirection);
            const newIndex = (currentIndex + 1) % directions.length;
            return directions[newIndex];
        });
    }, []);

    const handleKeyDown = useCallback(
        (event) => {
            event.preventDefault();
            switch (event.key) {
                case 'ArrowUp':
                    setDirection('North');
                    moveForward('North');
                    break;
                case 'ArrowLeft':
                    setDirection('West');
                    moveForward('West');
                    break;
                case 'ArrowRight':
                    setDirection('East');
                    moveForward('East');
                    break;
                case 'ArrowDown':
                    setDirection('South');
                    moveForward('South');
                    break;
                default:
                    break;
            }
        },
        [moveForward, setDirection]
    );

    useEffect(
        () => {
            window.addEventListener('keydown', handleKeyDown);
            return () => {
                window.removeEventListener('keydown', handleKeyDown);
            };
        },
        [handleKeyDown]
    );

    const directSvg = useMemo(
        () => {
            if (!direction) return '';
            switch (direction) {
                case 'North':
                    return '/north.svg';
                case 'East':
                    return '/east.svg';
                case 'South':
                    return '/south.svg';
                case 'West':
                    return '/west.svg';
                default:
                    break;
            }
        },
        [direction]
    );

    return (
        <div className="App">
            <header className="App-header">
                <img className="coordinate-img" src="/coordinate.png" alt="coordinate-icon" />
                <h1>Robot Simulator</h1>
                <div className="grid">
                    {Array.from({ length: 5 }, (_, rowIndex) =>
                        Array.from({ length: 5 }, (_, colIndex) => (
                            <div key={`${rowIndex}-${colIndex}`} className="cell">
                                <div className="direction-container">
                                    {coordinate.x === colIndex &&
                                        coordinate.y === 4 - rowIndex && (
                                            <img className={`direction-img`} src={directSvg} alt={direction} />
                                        )}
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className="button-groups">
                    {/* Direction */}
                    <div>
                        <button onClick={rotateLeft}>
                            <span>Rotate Left</span>
                        </button>
                        <button onClick={rotateRight}>
                            <span>Rotate Right</span>
                        </button>
                    </div>

                    {/* Action */}
                    <button onClick={() => moveForward(direction)}>
                        <span>Move Forward</span>
                    </button>
                </div>
            </header>
        </div>
    );
};

export default App;
