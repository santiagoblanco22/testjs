console.log("Hola")
const scrollToBottom = (id) => {
    const element = document.getElementByClassName(id);
    element.scrollTop = element.scrollHeight;
}

let selector = $('body > div.main-page.bubble-element.Page.bubble-r-container.fixed > div.bubble-element.Group.bubble-r-container.fixed > div.bubble-element.RepeatingGroup.bubble-rg')
console.log(selector)


setInterval(() => {
    $('body > div.main-page.bubble-element.Page.bubble-r-container.fixed > div.bubble-element.Group.bubble-r-container.fixed > div.bubble-element.RepeatingGroup.bubble-rg')[0].scrollTop = 3000
}, 3000)


scrollToBottom('bubble-element')
