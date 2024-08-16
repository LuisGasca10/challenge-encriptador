
const noMessageDiv = document.querySelector('.no__message')
const messageContainerElement = document.createElement('div').className = 'message__container'
const noMessageElemet = noMessageDiv.outerHTML;



let messageContainer = document.querySelector('.message__container');




const validText = (text) => {
    const regex = /^[a-z\s!/]*$/;
    return regex.test(text);
}

const addTextHtmlElement = (container, encryptedText) => {
    if (messageContainer) {
        // Si el contenedor existe, selecciona el <p> dentro de .message__container
        let paragraph = messageContainer.querySelector('.message__container p');

        // Cambia el contenido del párrafo
        if (paragraph) {
            paragraph.textContent = encryptedText;
        } else {
            console.error('El párrafo no fue encontrado.');
        }

    } else {
        // Si el contenedor no existe, creamos todo el bloque

        // Creación del <div class="message__container">
        const messageContent = document.createElement('div');
        messageContent.className = 'message__container';

        // Creación del <p> con el texto personalizado
        const paragraph = document.createElement('p');
        paragraph.textContent = encryptedText;

        // Añadir el <p> al message__container
        messageContent.appendChild(paragraph);

        // Crear el botón
        const button = document.createElement('button');
        button.className = 'button_style';
        button.type = 'button';
        button.textContent = 'Copiar';

        // Añadir el message__container y el botón al with__message
        container.appendChild(messageContent);
        container.appendChild(button);
        messageContainer = messageContent
    }
}



const textEncriptation = () => {
    const textAreaValue = document.getElementById('entradaTexto').value
    let withMessageContainer = document.querySelector('.with__message')
    const sectionOut = document.querySelector('.contenedor__resultado.wrapperblur')
    if (!validText(textAreaValue) || textAreaValue.length === 0) return alert('El texto no debe contener mayusculas ni acentos')
    const encryptedText = textAreaValue
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    if (noMessageDiv)
        noMessageDiv.remove()

    if (!withMessageContainer) {
        const newDiv = document.createElement('div')
        newDiv.className = "with__message"
        sectionOut.appendChild(newDiv)
    }
    withMessageContainer = document.querySelector('.with__message');

    addTextHtmlElement(withMessageContainer, encryptedText)

}


const textDesencriptation = () => {
    const textAreaValue = document.getElementById('entradaTexto').value
    let withMessageContainer = document.querySelector('.with__message')
    const sectionOut = document.querySelector('.contenedor__resultado.wrapperblur')

    if (!validText(textAreaValue) || textAreaValue.length === 0) return alert('El texto no debe contener mayusculas ni acentos o vacio')
    const encryptedText = textAreaValue
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    if (noMessageDiv)
        noMessageDiv.remove()

    if (!withMessageContainer) {
        const newDiv = document.createElement('div')
        newDiv.className = "with__message"
        sectionOut.appendChild(newDiv)
    }
    withMessageContainer = document.querySelector('.with__message');

    addTextHtmlElement(withMessageContainer, encryptedText)

}



document.getElementById('btn_encriptar').addEventListener('click', textEncriptation)
document.getElementById('btn_desencriptar').addEventListener('click', textDesencriptation)



//  <div class="with__message" >
//       <div class="message__container">
//         <p>Aqui hay texto personalizado</p>
//       </div>

//       <button class="button_style" type="button">Copiar</button>
//     </div > 