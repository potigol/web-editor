# Potigol Web Editor
Potigol Web Editor 🍤 é uma plataforma para edição e execução de códigos [potigol](http://potigol.github.io/) no navegador utilizando a migração do grammar original para javascript com antlr4.js. A função desse projeto é trazer uma base para o desenvolvimento de softwares voltados ao uso didático

# Usage Dev
`npm run server`

# Imports
```js
import {Editor, Console, Drawer} from "web-editor-rep-dir";

// note: all components have a 100% x 100% size
function App()
{
  <Editor />
  <Console />
  <Drawer />
}

export default App;
```
