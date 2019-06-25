<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-1">
          Image Demo
        </h1>

        <figure>
          <figcaption>Image used as part of page design: </figcaption>
          <img src="https://www.w3.org/WAI/tutorials/img/topinfo_bg-42052e6c.png" alt="">
        </figure>

        <figure>
          <figcaption>Decorative image as part of a text link: </figcaption>
          <a href="/" style="height: 77px; background-color: white; display: inline-block; padding-right: 1em"><img src="https://www.w3.org/WAI/tutorials/img/crocus-43300466.jpg" style="vertical-align: middle; margin-right: 1em;" alt="">Crocus bulbs</a>
        </figure>

        <figure>
          <figcaption>Stand-alone icon image that has a function: </figcaption>
          <img style="height: 15px" src="https://www.w3.org/WAI/tutorials/img/phone-3baeb911.png" alt="Telephone:"> 0123 456 7890
        </figure>

        <figure>
          <figcaption>Image used in a button: </figcaption>
          <label for="search" style="vertical-align: middle; display:inline-block;">Search:</label>
          <input name="search" id="search" type="text" style="vertical-align: middle; display:inline-block;">
          <input name="submit" src="https://www.w3.org/WAI/tutorials/img/searchbutton-6b82a8b1.png" alt="Submit Search" type="image" style="vertical-align: middle; display:inline-block;">
        </figure>

        <figure>
          <figcaption>Image containing rasterized text: </figcaption>
          <img src="https://www.w3.org/WAI/tutorials/img/wai-75196dbb.png" alt="Web Accessibility initiative"/>
        </figure>

        <figure>
          <figcaption>Image containing structured information:</figcaption>
          <img style="max-width: 350px;" src="https://www.w3.org/WAI/tutorials/img/chart-ebcaadfb.png" alt="Bar chart showing monthly and total visitors for the first quarter 2014 for sites 1 to 3" longdesc="/index.html"/><br><a href="index.html">Image Description</a>
        </figure> 

        <figure>
          <figcaption>Image with contextual description</figcaption>
          <img style="max-width: 350px;" src="https://www.w3.org/WAI/tutorials/img/peafowl-998cf337.jpg"
          alt="Male peacock head"
          aria-describedby="description"/>
          <p id="description">
            <small>The male is metallic blue on the crown, the feathers of the head being short and curled. The fan-shaped crest on the head is made of feathers with bare black shafts and tipped with blush-green webbing. A white stripe above the eye and a crescent shaped white patch below the eye are formed by bare white skin.</small>
          </p>
        </figure>

        <small>Source: <a href="https://www.w3.org/WAI/tutorials/images">https://www.w3.org/WAI/tutorials/images</a></small>

      </div>
    </div>
  </section>
</template>
