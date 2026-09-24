export function Main(){
    return(
        <main>
            <h1>Jakub Jaworski</h1>
            <h3 id="h3-id">CS Student</h3>
            <button id="email-button">
                <span className="email-text">E-mail</span>
                <span className="email-address">myemail@gmail.com</span>
            </button>

            <div>
                <h2 className="h2-paragraph">About</h2>
                <p className="h2-paragraph">
                    CS student interested in web development and machine learning.
                    I enjoy building projects, learning new technologies, and improving my programming skills.
                </p >
                <h2 className="h2-paragraph">Interests</h2>
                <p className="h2-paragraph">Machine learning, web development, investing, fitness, and building useful software.</p>
            </div>
        </main>
    )
}