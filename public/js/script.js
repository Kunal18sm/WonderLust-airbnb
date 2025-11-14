// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})


let tags = document.querySelectorAll(".tag");

tags.forEach(tag => {
  tag.addEventListener("click", function() {
    this.classList.toggle('selected');
    console.log("tapped");
  });
});


let filters = document.querySelectorAll(".filter");
filters.forEach(filter => {
  filter.addEventListener("click", function() {
    let filterFor = this.children[1].innerText ;
    window.location.href = `/listings/filter?by=${filterFor}`;
  })
})
