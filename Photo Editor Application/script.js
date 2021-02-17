const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

const reader = new FileReader();

const img = new Image();



const uploadImage = (e) => {
    reader.onload = () => {
        img.onload = () => {
            ctx.drawImage(img, 0,0,500,150)
        }
        img.src = reader.result;

    }
    reader.readAsDataURL(e.target.files[0])
}



const imageLoader = document.getElementById('uploader')
imageLoader.addEventListener('change', uploadImage)

const greyscale = () => {
    const imageLoader = ctx.getImageData(0,0,canvas.width,canvas.height);
    const data = imageData.data;
    
    for(let i=0; i<data.length; i+=4){
        const grey = data[i]*.21 + data[i+1]*.71 + data[i+2]*.07;
        data[i] = grey;
        data[i+1] = grey;
        data[i+2] = grey;
    }
    ctx.putImageData(imageData,0,0)
}

const sepia = () => {
    const imageLoader = ctx.getImageData(0,0,canvas.width,canvas.height);
    const data = imageData.data;
    
    for(let i=0; i<data.length; i+=4){
        const grey = data[i]*.21 + data[i+1]*.71 + data[i+2]*.07;
        data[i] = grey + 95;
        data[i+1] = grey + 58;
        data[i+2] = grey;
    }
    ctx.putImageData(imageData,0,0)
}

const invert = () => {
    const imageLoader = ctx.getImageData(0,0,canvas.width,canvas.height);
    const data = imageData.data;
    
    for(let i=0; i<data.length; i+=4){
        data[i] = 255 - data[i];
        data[i+1] = 255 - data[i+1];
        data[i+2] = 255 - data[i+2];
    }
    ctx.putImageData(imageData,0,0)
}

const rbg = () => {
    const imageLoader = ctx.getImageData(0,0,canvas.width,canvas.height);
    const data = imageData.data;
    
    for(let i=0; i<data.length; i+=4){
        data[i] = data[i];
        data[i+1] = data[i+2];
        data[i+2] = data[i+1];
    }
    ctx.putImageData(imageData,0,0)
}

const rbg = () => {
    const imageLoader = ctx.getImageData(0,0,canvas.width,canvas.height);
    const data = imageData.data;
    
    for(let i=0; i<data.length; i+=4){
        const green = data[i+1]
        data[i] = data[i];
        data[i+1] = data[i+2];
        data[i+2] = green;
    }
    ctx.putImageData(imageData,0,0)
}

const bgr = () => {
    const imageLoader = ctx.getImageData(0,0,canvas.width,canvas.height);
    const data = imageData.data;
    
    for(let i=0; i<data.length; i+=4){
        const red = data[i]
        data[i] = data[i]+2;
        data[i+1] = data[i+1];
        data[i+2] = red;
    }
    ctx.putImageData(imageData,0,0)
}

const gbr = () => {
    const imageLoader = ctx.getImageData(0,0,canvas.width,canvas.height);
    const data = imageData.data;
    
    for(let i=0; i<data.length; i+=4){
        const red = data[i]
        data[i] = data[i]+1;
        data[i+1] = data[i+2];
        data[i+2] = red;
    }
    ctx.putImageData(imageData,0,0)
}

const grb = () => {
    const imageLoader = ctx.getImageData(0,0,canvas.width,canvas.height);
    const data = imageData.data;
    
    for(let i=0; i<data.length; i+=4){
        const red = data[i]
        data[i] = data[i]+1;
        data[i+1] = red;
        data[i+2] = data[i+2];
    }
    ctx.putImageData(imageData,0,0)
}

const clear = () => {
    img.src = reader.result;
}



document.querySelectorAll('button')[0].addEventListener('click', greyscale);
document.querySelectorAll('button')[1].addEventListener('click', sepia);
document.querySelectorAll('button')[2].addEventListener('click', invert);
document.querySelectorAll('button')[2].addEventListener('click', invert);
document.querySelectorAll('button')[3].addEventListener('click', rbg);
document.querySelectorAll('button')[4].addEventListener('click', bgr);
document.querySelectorAll('button')[5].addEventListener('click', gbr);
document.querySelectorAll('button')[6].addEventListener('click', grb);
document.querySelectorAll('button')[7].addEventListener('click', clear);







