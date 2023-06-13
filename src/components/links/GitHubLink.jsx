import octocat from "/src/assets/github-mark.svg"

function GitHubLink ({location}) {
  console.log(location)
  return (
    <div className="github-icon-container">
      <a href={location} target="_blank" rel="noopener noreferrer">
        <img src={octocat} alt="a cat with a tentacle for an arm"/>
      </a>
    </div>
  )
}

export default GitHubLink