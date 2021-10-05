import App from "./App.svelte";
import {basicSetup, EditorState} from "@codemirror/basic-setup"
import {keymap, EditorView} from "@codemirror/view"
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
let editor = new EditorView({
  state: EditorState.create({
    extensions: [
      basicSetup,
      javascript(),
      oneDarkHighlightStyle,
      oneDarkTheme,
      linter(esLint(new Linter())),
      keymap.of([keybind])
    ],
  }),
  parent: document.getElementById('editor')
})