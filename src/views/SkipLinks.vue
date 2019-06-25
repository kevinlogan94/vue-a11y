<style>
.page-spacer {
  height: 200vh;
  display: block;
}
.ScreenReader {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
</style>

<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-1">
          Skip Links Demo
        </h1>
        <main id="start">
          <p>This is a test paragraph and a <a href="/">test link</a>.</p>
          <span class="page-spacer"></span>
          <a href="#topMessage" class="BackToTop">Back to Top Animation Only</a>
          <a href="#topMessage" id="skiptotop">Back to Top Anchor Link</a>
          <a href="#topMessage" class="BackToTop">Back to Top Reset Focus</a>
        </main>
      </div>
    </div>
  </section>
</template>
