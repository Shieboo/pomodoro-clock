<template>
  <div id="app">
    <div class="support">
      <div class="container">

        <div class="settings">
          <div class="modifier" id="work">
            <div class="value">25</div>
            <div class="arrows">
              <button id="work-up">
                <i class="fas fa-angle-up"></i>
              </button>
              <button id="work-down">
                <i class="fas fa-angle-down"></i>
              </button>
            </div>

          </div>
          <div class="modifier" id="break">
            <div class="value">05</div>
            <div class="arrows">
              <button id="break-up">
                <i class="fas fa-angle-up"></i>
              </button>
              <button id="break-down">
                <i class="fas fa-angle-down"></i>
              </button>
            </div>

          </div>
        </div>

        <div class="session">
          Session Description
        </div>
        <div class="timer">
          25:00
        </div>

        <div class="control">
          <button id="play">
            <i class="fas fa-play"></i>
          </button>
          <button id="pause">
            <i class="fas fa-pause"></i>
          </button>
          <button id="stop">
            <i class="fas fa-stop"></i>
          </button>
          <button id="reset">
            <i class="fas fa-undo-alt"></i>
          </button>
        </div>
      </div>
    </div>
    <footer>
      Developed and coded by <a href="https://github.com/Shieboo" target="_blank">Adrien Pardo</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Orbitron);
body {
  color: #fff;
  font-size: 16px;
  margin: 0;
  text-align: center;
}

.support {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  background: #ff5722;
  background-image: radial-gradient(200% 50% ellipse at center, #ff5722 0%, #ff2800 100%);
  width: 380px;
  height: 380px;
  margin-top: 100px;
  border-radius: 20%;
}

.container {
  margin: auto;
}

.settings {
  display: flex;
}

.modifier {
  flex-grow: 1;
  display: grid;
  grid-template-columns: auto 20%;
}

.value {
  font-family: 'orbitron', sans-serif;
  font-size: 3rem;
  margin-top: .6rem;
  text-align: center;
}

.arrows {
  display: grid;
  align-items: center;
}

.arrows>button {
  background: rgba(0,0,0,0.0);
  color: #fff;
  border: none;
  width: 100%;
  height: 100%;
  outline: none !important;
  cursor: pointer;
}

.session {
  margin-top: .3rem;
  font-size: 1.5rem;
  text-align: center;
}

.timer {
  font-family: 'orbitron', sans-serif;
  font-size: 5rem;
  margin-top: 1rem;
  text-align: center;
}

.control {
  display: flex;
  flex-flow: row wrap;
}

.control>button {
  flex-grow: 1;
  font-size: 1.5rem;
  height: 3rem;
  background: rgba(0,0,0,0.0);
  color: #fff;
  border: none;
  outline: none !important;
  cursor: pointer;
}

.arrows>button:hover, .control>button:hover {
  color: #231010;
}

footer {
  margin-top: 2rem;
  color: #333;
  font-weight: bold;
}
footer>a {
  color: #ff5722;
}
</style>
