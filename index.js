console.log("Hola")
const scrollToBottom = (id) => {
    const element = document.getElementByClassName(id);
    element.scrollTop = element.scrollHeight;
}

let selector = $('body > div.main-page.bubble-element.Page.bubble-r-container.fixed > div.bubble-element.Group.bubble-r-container.fixed > div.bubble-element.RepeatingGroup.bubble-rg')
console.log(selector)


scrollToBottom('bubble-element')
