<script>
	// import Button from './Button.svelte';
	let title="Editor";
// 	let test='';
// 	let legend='Epic'
// 	const onKeyPress = e => {
//     if (e.charCode === 13) titleChange(test, title,0);
//   };
// 	function titleChange(ntitle, oof, bool){
// 		if(ntitle.detail)
// 		oof= ntitle.detail.text;
// 		else oof=ntitle;
// 		test='';
// 		if(bool==0) title= oof; else legend=oof;
// 	}
// 	function lmao(edito){
// 		console.log(edito)
// 	}
</script>

<main id='page'>
	<h1>{title}</h1>
	<div id='editor' class='sp'>

	</div>
	<!-- <fieldset>
		<legend>{legend}</legend>
		<input id="title" type="text" placeholder="Set Title/Legend" bind:value={test} on:keypress={onKeyPress}>
		<Button potato={test} on:titlechange={(event) => titleChange(event, title, 0)} btntext='Set Title'></Button>
		<Button potato={test} on:titlechange={(event) => titleChange(event, title, 1)} btntext='Set Legend'></Button>
	</fieldset> -->
	<!-- <CodeMirror on:activity={lmao} bind:editor {options} class="editor"/> -->
</main>


<style>
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
		display:-ms-grid;
		display:grid;
		-webkit-box-pack: center;
		    -ms-flex-pack: center;
		        justify-content: center;
		overflow:hidden;
	}

	h1 {
		font-size: 4em;
		font-weight: 100;
		color:white;
	}
	.sp{
		font-family: monospace;
    height: 300px;
    direction: ltr;
	border-radius: 20px;
    border-color: #9ca3af;
    box-shadow: 0 0 10px #9ca3af;
    width: clamp(80vw, 800px, 90vw);
    height: min(70vh,500px);
	overflow-x: hidden;
	overflow-y: auto;
    text-align: start;
	}
	/* fieldset{
		display: -ms-grid;
		display: grid;
		-webkit-box-pack: center;
		    -ms-flex-pack: center;
		        justify-content: center;
		width: clamp(35vw, 500px, 85vw);
	} */
</style>