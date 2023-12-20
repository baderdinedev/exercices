document.addEventListener("DOMContentLoaded", function () {
    const draggableElements = document.querySelectorAll(".draggable");
    const inputElements = document.querySelectorAll("input");
  
    draggableElements.forEach((draggable) => {
      draggable.addEventListener("dragstart", dragStart);
    });
  
    inputElements.forEach((input) => {
      input.addEventListener("dragover", dragOver);
      input.addEventListener("dragenter", dragEnter);
      input.addEventListener("dragleave", dragLeave);
      input.addEventListener("drop", drop);
    });
  
    function dragStart(event) {
      event.dataTransfer.setData("text/plain", event.target.innerText);
    }
  
    function dragOver(event) {
      event.preventDefault();
    }
  
    function dragEnter(event) {
      event.preventDefault();
      this.classList.add("drag-over");
    }
  
    function dragLeave() {
      this.classList.remove("drag-over");
    }
  
    function drop(event) {
      event.preventDefault();
      this.classList.remove("drag-over");
      const draggedText = event.dataTransfer.getData("text/plain");
      this.value = draggedText;
      getVal(); // Call your getVal() function after dropping text into the input
    }
  });
  