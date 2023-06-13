import GitHubLink from "./GitHubLink";
import LinkedInLink from "./LinkedInLink"
import "/src/css/linkbox.css"

function LinkBox () {
 return (
    <div className="linkbox">
        <GitHubLink location="https://github.com/CasLinden"></GitHubLink>
        <LinkedInLink></LinkedInLink>
    </div>
 )
}

export default LinkBox