const scrollToBottom = () => {
    const element1 = document.getElementsByClassName('RepeatingGroup')[1];
    const element = document.getElementsByClassName('RepeatingGroup')[0];
    console.log(element1)
    element1.scrollTop = element1.scrollHeight
}

setInterval(() => {
    scrollToBottom()           
}, 1000)

$('body > div.main-page.bubble-element.Page.bubble-r-container.fixed > div.bubble-element.Group.bubble-r-container.fixed > div:nth-child(3) > div').on('click', function() { 
  console.log("click")
  scrollToBottom() 
})

scrollToBottom()           
           



