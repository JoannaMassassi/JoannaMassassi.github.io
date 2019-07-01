



let contentDiv = document.querySelector('.contentDiv');
const aboutMe = () => {
  contentDiv.innerHTML = `
                    <div class="container">
                    <div class="row">
                      <div class="col">
                        EHAT ABOUR
                      </div>
                      <div class="col">
                  WORK
                      </div>
  `;
}


const home = () => {
  contentDiv.innerHTML = `
  <div class="container">
  <div class="row">
    <div class="col">
     <h1 class="display-3">¡Hi! Looking for a web Developer?</h1>
      <p> My name is Joanna Aréchiga and I'm a Front-End Developer based at Guadalajara, Jalisco. <p>
    </div>
    <div class="col">
    <div class="container mt-3">

    <h2>Get to know me</h2>
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
    
      <!-- Indicators -->
      <ul class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ul>
      
      <!-- The slideshow -->
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="./images/code.jpg"width="300" height="300">
        </div>
        <div class="carousel-item">
          <img src="./images/backupo.jpg" width="300" height="300">
        </div>
        <div class="carousel-item">
          <img src="./images/agile.jpg.jpg"" alt="New York" width="300" height="300">
        </div>
      </div>
      
      <!-- Left and right controls -->
      <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next" href="#myCarousel" data-slide="next">
        <span class="carousel-control-next-icon"></span>
      </a>
    </div>
    </div>`

}