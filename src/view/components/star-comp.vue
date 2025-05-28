<template>
  <div id="container">
  <div id="sun">前端</div>
  <div class="orbit earth-orbit">
    <div class="globe earth">HTML</div>
  </div>
  <div class="orbit earth-orbit orbit2">
    <div class="globe earth earth2">CSS</div>
  </div>
  <div class="orbit earth-orbit earth-orbit3 orbit3">
    <div class="globe earth earth3">JS</div>
  </div>
  <div class="orbit earth-orbit earth-orbit4 orbit4">
    <div class="globe earth earth4">Http</div>
  </div>
  <div class="orbit earth-orbit earth-orbit5 orbit5">
    <div class="globe earth earth5">node</div>
  </div>
  <!--  -->
  <div class="orbit orbits earth-orbit2">
    <div class="globe earths">TS</div>
  </div>
  <div class="orbit orbits earth-orbit2 orbits2">
    <div class="globe earths earths2">Vue</div>
  </div>
  <div class="orbit orbits earth-orbit2 orbits3">
    <div class="globe earths earths3">scss</div>
  </div>
  <div class="orbit orbits earth-orbit2 orbits4">
    <div class="globe earths earths4">Element</div>
  </div>
  <div class="orbit orbits earth-orbit2 orbits5">
    <div class="globe earths earths5">vite</div>
  </div>
  <div class="orbit orbits earth-orbit2 orbits6">
    <div class="globe earths earths6">git</div>
  </div>
  <div class="orbit orbits earth-orbit2 orbits7">
    <div class="globe earths earths7">uniApp</div>
  </div>
  <div class="orbit orbits earth-orbit2 orbits8">
    <div class="globe earths earths8">wechart</div>
  </div>
</div>
</template>
<style scoped lang="scss">
#container {
  height: 300px;
  left: calc(50% - 200px);
  position: absolute;
  top: calc(50% - 200px);
  width: 300px;
  color:#000;
}
#container #sun {
  background-color: yellow;
  border-radius: 50%;
  -webkit-box-shadow: 0 0 30px white;
          box-shadow: 0 0 30px white;
  height: 100px;
  left: 150px;
  position: absolute;
  top: 150px;
  width: 100px;
  line-height: 100px;
  z-index: 1;
}
.orbit {
  border: solid;
  border-color: white transparent transparent transparent;
  border-radius: 50%;
  border-width: 1px 1px 0 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  position: absolute;
  -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
  -webkit-transform-origin: center;
          transform-origin: center;
  z-index: 1;
}
.orbit2{
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}
.orbit3{
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}
.orbit4{
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}
.orbit5{
  -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
}
.orbits{
  -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
}
.orbits2{
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}
.orbits3{
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}
.orbits4{
  -webkit-transform: rotate(135deg);
          transform: rotate(135deg);
}
.orbits5{
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}
.orbits6{
  -webkit-transform: rotate(225deg);
          transform: rotate(225deg);
}
.orbits7{
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}
.orbits7{
  -webkit-transform: rotate(315deg);
          transform: rotate(315deg);
}
.orbits8{
  -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
}
.earth-orbit {
  -webkit-animation: orbit 36.5s linear infinite;
          animation: orbit 36.5s linear infinite;
  height: 200px;
  left: 100px;
  top: 100px;
  width: 200px;
}
.earth-orbit2 {
  -webkit-animation: orbit 36.5s linear infinite;
          animation: orbit 36.5s linear infinite;
  height: 300px;
  left: 50px;
  top: 50px;
  width: 300px;
}
#container .orbit .globe {
  border-radius: 50%;
  position: absolute;
}
.earth {
  background: aqua;
  height: 50px;
  right: 7px;
  top: 7px;
  width: 50px;
  line-height: 50px;
  z-index: 5;
}
.earths {
  background: rgb(255, 0, 191);
  height: 50px;
  right: 13px;
  top: 13px;
  width: 50px;
  line-height: 50px;
  z-index: 5;
}
.earths2{
  background: rgb(80, 23, 40);
}
.earths3{
  background: rgb(63, 3, 63);
}
.earths4{
  background: rgb(105, 218, 13);
}
.earths5{
  background: rgb(161, 31, 194);
}
.earths6{
  background: rgb(112, 109, 110);
}
.earths7{
  background: rgb(156, 83, 105);
}
.earths8{
  background: rgb(13, 107, 196);
}
.earth2 {
  background: rgb(89, 0, 255);
}
.earth3 {
  background: rgb(0, 26, 255);
}
.earth4 {
  background: rgb(68, 77, 153);
}
.earth5 {
  background: rgb(80, 23, 40);
}
#container .orbit .globe.moon {
  background: #d6d6d6;
  height: 12px;
  right: 2px;
  top: 8px;
  width: 12px;
}

@-webkit-keyframes orbit {
  to {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

@keyframes orbit {
  to {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

</style>