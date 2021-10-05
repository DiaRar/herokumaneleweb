<script>
    export let potato;
    export let btntext
    import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	function titleChange() {
    if(!potato) {potato='Halo world';}
		dispatch('titlechange', {
			text: potato
		});
	}
    
</script>
<div class="button2" on:click={titleChange}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    {btntext}
  </div>
  <style>

.button2 {
    max-width: 150px;
    padding: 30px 61px;
    border-radius: 4px;
    color:#9ca3af;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    margin: 5px;
    font-family: "Roboto", sans-serif;
    -webkit-filter: hue-rotate(0deg);
            filter: hue-rotate(0deg);
    border: 2px solid #d2bdff;
    -webkit-transition: all 0.1s linear;
    -o-transition: all 0.1s linear;
    transition: all 0.1s linear;
  }
  .button2:hover {
    border: 1px solid transparent;
  }
  .button2:hover span {
    position: absolute;
    display: block;
  }
  .button2:hover span:nth-child(1) {
    -webkit-filter: hue-rotate(0deg);
            filter: hue-rotate(0deg);
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: -webkit-gradient(linear, left top, right top, from(transparent), to(#3a86ff));
    background: -o-linear-gradient(left, transparent, #3a86ff);
    background: linear-gradient(90deg, transparent, #3a86ff);
    -webkit-animation: animate1 1s linear infinite;
            animation: animate1 1s linear infinite;
  }
  @-webkit-keyframes animate1 {
    0% {
      left: -100%;
    }
    50%, 100% {
      left: 100%;
    }
  }
  @keyframes animate1 {
    0% {
      left: -100%;
    }
    50%, 100% {
      left: 100%;
    }
  }
  .button2:hover span:nth-child(2) {
    -webkit-filter: hue-rotate(60deg);
            filter: hue-rotate(60deg);
    top: -100%;
    right: 0;
    width: 3px;
    height: 100%;
    background: -webkit-gradient(linear, left top, left bottom, from(transparent), to(#3a86ff));
    background: -o-linear-gradient(top, transparent, #3a86ff);
    background: linear-gradient(180deg, transparent, #3a86ff);
    -webkit-animation: animate2 1s linear infinite;
            animation: animate2 1s linear infinite;
    -webkit-animation-delay: 0.25s;
            animation-delay: 0.25s;
  }
  @-webkit-keyframes animate2 {
    0% {
      top: -100%;
    }
    50%, 100% {
      top: 100%;
    }
  }
  @keyframes animate2 {
    0% {
      top: -100%;
    }
    50%, 100% {
      top: 100%;
    }
  }
  .button2:hover span:nth-child(3) {
    -webkit-filter: hue-rotate(120deg);
            filter: hue-rotate(120deg);
    bottom: 0;
    right: 0;
    width: 100%;
    background: -webkit-gradient(linear, right top, left top, from(transparent), to(#3a86ff));
    background: -o-linear-gradient(right, transparent, #3a86ff);
    background: linear-gradient(270deg, transparent, #3a86ff);
    -webkit-animation: animate3 1s linear infinite;
            animation: animate3 1s linear infinite;
    -webkit-animation-delay: 0.5s;
            animation-delay: 0.5s;
  }
  @-webkit-keyframes animate3 {
    0% {
      right: -100%;
      height: 3px;
    }
    50%, 100% {
      height: 2px;
      right: 100%;
    }
  }
  @keyframes animate3 {
    0% {
      right: -100%;
      height: 3px;
    }
    50%, 100% {
      height: 2px;
      right: 100%;
    }
  }
  .button2:hover span:nth-child(4) {
    -webkit-filter: hue-rotate(300deg);
            filter: hue-rotate(300deg);
    bottom: -100%;
    left: 0;
    width: 3px;
    height: 100%;
    background: -webkit-gradient(linear, left bottom, left top, from(transparent), to(#3a86ff));
    background: -o-linear-gradient(bottom, transparent, #3a86ff);
    background: linear-gradient(360deg, transparent, #3a86ff);
    -webkit-animation: animate4 1s linear infinite;
            animation: animate4 1s linear infinite;
    -webkit-animation-delay: 0.75s;
            animation-delay: 0.75s;
  }
  @-webkit-keyframes animate4 {
    0% {
      bottom: -100%;
    }
    50%, 100% {
      bottom: 100%;
    }
  }
  @keyframes animate4 {
    0% {
      bottom: -100%;
    }
    50%, 100% {
      bottom: 100%;
    }
  }
  </style>