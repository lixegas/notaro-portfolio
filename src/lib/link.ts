
function onLocalLinkClick(event: React.SyntheticEvent) {
  const anchor = (event.target as HTMLElement).closest("a");
  const href = anchor?.getAttribute("href");
  if (!href?.startsWith("#")) {
    return;
  }

  event.preventDefault();
  onDirectLocalLinkClick(href);
}

function onDirectLocalLinkClick(to: string) {
  const id = to.replace("#", "");
  const element = document.getElementById(String(id));
  element?.scrollIntoView({
    behavior: "smooth"
  })
}

export {onLocalLinkClick, onDirectLocalLinkClick}