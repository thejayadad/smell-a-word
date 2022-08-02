let fillBox = document.getElementsByClassName('fill-container')[0];
let selectedBox;

document.body.addEventListener('dragstart', function(event) {
    selectedBox = event.target;
    event.dataTransfer.setData('text/html', event.target) 
})

fillBox.addEventListener('dragenter', function(event) {
    this.classList.add('fill-container-over')
})

fillBox.addEventListener('dragleave', function(event) {
    this.classList.remove('fill-container-over')
})

fillBox.addEventListener('dragover', function(event) {
    event.preventDefault()
    event.dataTransfer.dropEffect = "move";
})

fillBox.addEventListener('drop', function(event) {
  
    this.appendChild(selectedBox)
    this.classList.remove('fill-container-over')
    this.style.height = '100%';
})
