import profilePhoto from "../assets/images.jpeg"

export function ProfilePhoto() {
    return (
        <>
            <header>
                <img id="profile-photo" src={profilePhoto}  alt="profilePhoto"/>
            </header>
        </>
    )
}