function writeInnerHtml(elementBase, elementId, elementText) {
  elementBase.querySelector(
    `${elementId}`
  ).innerHTML = `<h3 id=${elementId}>${elementText}<br /><span>${elementId}</span></h3>`;
}

async function getApiGitHub() {
  return (
    await fetch("https://api.github.com/users/alexsandro-cristiano")
  ).json();
}

async function init() {
  const details = document
    .querySelector(".card")
    .querySelector(".content")
    .querySelector(".details");

  const data = await getApiGitHub();

  writeInnerHtml(details, "#followers", data.followers);
  writeInnerHtml(details, "#following", data.following);
  writeInnerHtml(details, "#repo", data.public_repos);
}
init();
