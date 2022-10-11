console.log("Hola123")
const scrollToBottom = () => {
    const element = document.getElementsByClassName('RepeatingGroup')[1];
    console.log(element)
    element.scrollTop = element.scrollHeight;
}

setTimeout(() => {
    scrollToBottom()           
})

    scrollToBottom()           
           



