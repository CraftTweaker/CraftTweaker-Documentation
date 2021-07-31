# Getting Started with scripts

CraftTweaker utilizza un linguaggio di scripting personalizzato chiamato `ZenScript`. I file ZenScript sono file `.zs` che sono memorizzati nella cartella `<gamedir>/scripts`. Se non sei sicuro di dove si trovi questa cartella, esegui il comando `/ct scripts` nel gioco e la cartella si aprirà.

ZenScript is a "top down" scripting language, meaning that, `Imports` need to be at the top of the file, `Variable Declarations` should be near the top of the file, however there are no restrictions to that, a `Variable` can be defined anywhere in a script, however it will not be accessible to the lines above the `Variable` declaration.


Gli script presentano l'estensione `.zs`, assicurati che non sia `.zs.txt`!

## Cosa sono gli script

Gli script sono memorizzati nella cartella `<gamedir>/scripts` e sono caricati quando il giocatore entra in un mondo, così come nelle precedenti versioni di CraftTweaker (ad esclusione di quella per Minecraft 1.12). Gli script POSSONO essere ricaricati, attraverso il comando `/reload`

Gli script vengono caricati due volte quando si entra in un mondo a giocatore singolo, prima sul lato `Server` e successivamente lato `Client`: se nel tuo script hai una direttiva `println()`, la vedrai due volte nei file di log, proprio per questo motivo.

Questo però non vuol dire che le modifiche vengono applicate due volte. Difatti, alcune azioni degli script possono essere eseguite solo su uno dei due lati. Alcune modifiche, come impostare la localizzazione, vengono eseguite solo lato client; altre, come aggiungere ricette, avviene solo lato server.

Quando si entra su un server, gli script vengono inviati al client, che provvede ad eseguirli. Questo significa che un client senza script può entrare su un server e automaticamente vedere le modifiche applicate (questo è utile per esempio per disabilitare un elemento sul server ma non si vuole far scaricare al client ulteriori file).


### Writing your first script

Per iniziare con lo scripting, crea un file estremamente semplice, chiamato `hello.zs` nella cartella `<gamedir>/scripts>`; se non sei sicuro di dove si trovi questa cartella, esegui il comando `/ct scripts` e la cartella si dovrebbe aprire!

In `hello.zs` put the following line

```zenscript
println("Ciao mondo!");
```

Ora carica Minecraft e dai un'occhiata al file `<gamedir>/logs/crafttweaker.log` (o esegui il comando `/ct log` per aprirlo direttamente nel tuo editor di testo predefinito).

Il file `crafttweaker.log` si trova nella cartella `<gamedir>/logs` e può essere letto da qualsiasi programma che può leggere file di puro testo.

Si consiglia di utilizzare Notepad++, Sublime Text, o Visual Studio Code per scrivere o modificare gli script, ma questo non è necessario.

Quando si sceglie un programma da utilizzare per modificare gli script, cerca quali evidenziatori di sintassi sono disponibili: la maggior parte dei comuni editori di testo supportano la sintassi di ZenScript attraverso l'utilizzo di alcuni plugin.



### The crafttweaker.log file

The `crafttweaker.log` file uses a specific syntax in it's output, that syntax is:

```
[HH:MM:SS.ms][LOADERSTAGE][SIDE][TYPE] <message>
```

Using the example above, the output would be:

```
[14:58:06.697][DONE][SERVER][INFO] Ciao mondo!
```

Questo modo di visualizzare le informazioni è molto utile per il debugging; l'unica volta in cui queste informazioni vengono omesse è per il dumping dei comandi, dove solamente l'output viene stampato. In questo modo, è molto più facile copiare le informazioni oggetto di dumping

### Comments

Comments can be used to make your script files more readable and easier to understand!

ZenScript supports 3 types of comments, being:

Single line: `// I'm a single line comment!`

Alternate Single Line: `# I'm also a single line comment!`

Multiline:
```
/* I'm 
a
multiline comment! */
```

Ricorda però che i commenti che iniziano con `#` sono anche utilizzati per il preprocessore, quindi potrebbero causare degli effetti non voluti, anche se sono comunque dei commenti validi. 