# Le Basi dello Scripting

CraftTweaker utilizza un linguaggio di scripting personalizzato chiamato `ZenScript`. I file ZenScript sono file `.zs` che sono memorizzati nella cartella `<gamedir>/scripts`. Se non sei sicuro di dove si trovi questa cartella, esegui il comando `/ct scripts` nel gioco e la cartella si aprirà.

ZenScript è un linguaggio di scripting "top down", il che significa che le `Direttive di Importazione` (dette anche `Imports`) devono trovarsi in cima al file; le `Dichiarazioni di Variabili` dovrebbero trovarsi nelle prime righe del file, anche se non vi sono restrizioni particolari in merito; infine, le `Variabili` possono essere definite ovunque in uno script, tuttavia non saranno accessibili nelle righe che precedono la dichiarazione della stessa.


Gli script presentano l'estensione `.zs`, assicurati che non sia `.zs.txt`!

## Cosa sono gli script

Gli script sono memorizzati nella cartella `<gamedir>/scripts` e sono caricati quando il giocatore entra in un mondo, così come nelle precedenti versioni di CraftTweaker (ad esclusione di quella per Minecraft 1.12). Gli script POSSONO essere ricaricati, attraverso il comando `/reload`

Gli script vengono caricati due volte quando si entra in un mondo a giocatore singolo, prima sul lato `Server` e successivamente lato `Client`: se nel tuo script hai una direttiva `println()`, la vedrai due volte nei file di log, proprio per questo motivo.

Questo però non vuol dire che le modifiche vengono applicate due volte. Difatti, alcune azioni degli script possono essere eseguite solo su uno dei due lati. Alcune modifiche, come impostare la localizzazione, vengono eseguite solo lato client; altre, come aggiungere ricette, avviene solo lato server.

Quando si entra su un server, gli script vengono inviati al client, che provvede ad eseguirli. Questo significa che un client senza script può entrare su un server e automaticamente vedere le modifiche applicate (questo è utile per esempio per disabilitare un elemento sul server ma non si vuole far scaricare al client ulteriori file).


### Scrivere il tuo primo script

Per iniziare con lo scripting, crea un file estremamente semplice, chiamato `hello.zs` nella cartella `<gamedir>/scripts>`; se non sei sicuro di dove si trovi questa cartella, esegui il comando `/ct scripts` e la cartella si dovrebbe aprire!

Scrivi la seguente riga all'interno di `hello.zs`:

```zenscript
println("Ciao mondo!");
```

Ora carica Minecraft e dai un'occhiata al file `<gamedir>/logs/crafttweaker.log` (o esegui il comando `/ct log` per aprirlo direttamente nel tuo editor di testo predefinito).

Il file `crafttweaker.log` si trova nella cartella `<gamedir>/logs` e può essere letto da qualsiasi programma che può leggere file di puro testo.

It is recommended to use Notepad++, Sublime Text or VSCode to edit script files, however any program will do.

When choosing a program to use to edit scripts, take a look at what Syntax highlighters are available, most common text editors have ZenScript highlighting support through the use of a plugin.



### The crafttweaker.log file

The `crafttweaker.log` file uses a specific syntax in it's output, that syntax is:

```
[HH:MM:SS.ms][LOADERSTAGE][SIDE][TYPE] <message>
```

Using the example above, the output would be:

```
[14:58:06.697][DONE][SERVER][INFO] Hello world!
```

The syntax is used for debug purposes and the only time the syntax is not used, is for command dumps, in which case it just prints the message, this is done so copy pasting the dumped information is easier.

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

Just note, that `#` comments are also used for PreProcessors (TODO link to PreProcessors when they are documented), so while they are still valid comments, they could cause unwanted side effects. 