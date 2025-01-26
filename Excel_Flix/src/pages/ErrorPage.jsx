import { useNavigate, useRouteError } from "react-router-dom";

export const ErrorPage = () => {

    const error = useRouteError();
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }

    if (error.status == 404) {
        return <>
            <section className="error-section">
                <div className="error-text">
                    <figure>
                        <img src="https://cdn.dribbble.com/users/381530/screenshots/3949858/media/aff8c4541abddf91b8f69206b2175381.gif" alt="404 error page" width="60%" />
                    </figure>
                    <div className="text-center">
                        <p className="p-a">
                            The page wrere you ooking for cound not be found
                        </p>
                        <p className="p-b">... Back to previous page</p>
                    </div>
                </div>

                <button className="btn" onClick={handleGoBack}>
                    Go Back
                </button>
            </section>
        </>
    }
    return <h1>{error.message}</h1>
}