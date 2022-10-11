console.log("Hola124")
const scrollToBottom = () => {
    const element = document.getElementsByClassName('RepeatingGroup')[1];
    console.log(element)
    element.scrollTop = element.scrollHeight;
}

setInterval(() => {
    scrollToBottom()           
}, 3000)

    scrollToBottom()           
           



