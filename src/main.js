import App from "./App.svelte";
import {basicSetup, EditorState} from "@codemirror/basic-setup"
import {keymap, EditorView} from "@codemirror/view"
import {indentWithTab} from "@codemirror/commands"
import {esLint, javascript} from "@codemirror/lang-javascript"
import { linter, openLintPanel } from "@codemirror/lint";
import { oneDarkTheme, oneDarkHighlightStyle} from "@codemirror/theme-one-dark";
import Linter from "eslint4b-prebuilt";
const app = new App({
  target: document.body
});
const keybind = {
  key: "Ctrl-Shift-l",
  run: openLintPanel
};
export default app;
const doc= `const { SlashCommandBuilder } = require('@discordjs/builders');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('command name')
		.setDescription('command description')
		.addStringOption(option =>
			option.setName('optionname')
				.setDescription('optionDescription')
				.setRequired(true)), // This means they cant use the command without the extra option.
  // All code for the command is written in execute
	async execute(interaction) {
    // This error is shown because there are only commends and no code so interaction remains unused.
    // interaction.editReply('Your message'); will make the bot send a reply to the command with the message you want.
    /* To get the data from the argument we use interaction.options.get('optionname'), 
    because the options are stored as a map(for more info search what maps are).*/
    // For a guide about how to write a command go to https://discordjs.guide/#before-you-begin or join my discord server.
    
  },
};`
let sptheme = EditorView.baseTheme({
   
  "&":{
    minHeight: "100%"
  },
//   ".cm-scroller::-webkit-scrollbar-track": {
//     backgroundColor: "darkgrey"
// },
".cm-scroller::-webkit-scrollbar-track":
{
	"-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.3)",
	borderRadius: "10px",
	backgroundColor: "#282c34",
},

".cm-scroller::-webkit-scrollbar":
{
  marginBottom: "-10px",
	height: "12px"
},
".cm-scroller::-webkit-scrollbar-thumb":
{
  cursor: "pointer",
	borderRadius: "10px",
	"-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,.3)",
	backgroundColor: "#1d1d1d"
}
})
let editor = new EditorView({
  state: EditorState.create({
    doc,
    extensions: [
      basicSetup,
      javascript(),
      oneDarkHighlightStyle,
      oneDarkTheme,
      sptheme,
      linter(esLint(new Linter())),
      keymap.of([keybind]),
      keymap.of([indentWithTab])
    ],
  }),
  parent: document.getElementById('editor')
})
editor.focus();
editor.dispatch({selection: {anchor: 975}})