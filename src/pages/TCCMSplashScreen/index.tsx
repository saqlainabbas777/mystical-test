import * as React from "react";
import '../../index.css';
import SplashScreenLogo from "../../assets/logo/cloud-city-splash-logo.svg";
import {splashScreenProps} from "../../types";
import {useEffect} from "react";

const TCCMSplashScreen: React.FC<splashScreenProps> = ({progressBarValue, tips}: splashScreenProps) => {

    useEffect(() => {
        // Your fetch API call will go here
        fetch('https://mystic-swap.herokuapp.com/orders')
            .then((response) => response.json())
            .then((data: any) => {
                // Do something with the data
                console.log(data);
            })
            .catch((error) => {
                // Handle errors here
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <>
            <section className="loading-container">
                <figure className="loading-container__logo">
                    <img
                        src={SplashScreenLogo}
                        alt="cloud city logo"
                        loading="lazy"
                    />
                </figure>

                <div className="loading-container__progress-bar">
                    <progress max="100" value={progressBarValue} />
                    <p className="loading-container__progress-bar--para">
                        Loading content
                    </p>
                </div>

                <p className="loading-container__tips">
                    Tips: {tips}.
                </p>
            </section>
        </>
    )
};

export default TCCMSplashScreen
