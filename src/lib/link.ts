
function onLocalLinkClick(event: React.SyntheticEvent) {
  event.preventDefault();
  const target = event.target as HTMLAnchorElement;
  const id = target.getAttribute("href")?.replace("#", "");
  console.log(id)
  const element = document.getElementById(String(id));
  element?.scrollIntoView({
    behavior: "smooth"
  })
}

function onDirectLocalLinkClick(to: string) {
  const id = to.replace("#", "");
  const element = document.getElementById(String(id));
  element?.scrollIntoView({
    behavior: "smooth"
  })
}

export {onLocalLinkClick, onDirectLocalLinkClick}