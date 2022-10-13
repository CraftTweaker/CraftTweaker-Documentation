# Le Basi dello Scripting

CraftTweaker utilizza un linguaggio di scripting personalizzato chiamato `ZenScript`. I file ZenScript sono file `.zs` che sono memorizzati nella cartella `<gamedir>/scripts`. Se non sei sicuro di dove si trovi questa cartella, esegui il comando `/ct scripts` nel gioco e la cartella si aprirà.

ZenScript è un linguaggio di scripting "top down", il che significa che le `Direttive di Importazione` (dette anche `Imports`) devono trovarsi in cima al file; le `Dichiarazioni di Variabili` dovrebbero trovarsi nelle prime righe del file, anche se non vi sono restrizioni particolari in merito; infine, le `Variabili` possono essere definite ovunque in uno script, tuttavia non saranno accessibili nelle righe che precedono la dichiarazione della stessa.


Gli script presentano l'estensione `.zs`, assicurati che non sia `.zs.txt`!

## Cosa sono gli script

Gli script sono memorizzati nella cartella `<gamedir>/scripts` e sono caricati quando il giocatore entra in un mondo, così come nelle precedenti versioni di CraftTweaker (ad esclusione di quella per Minecraft 1.12). Gli script POSSONO essere ricaricati, attraverso il comando `/reload`

Quando si entra su un server, gli script vengono inviati al client, che provvede ad eseguirli. Questo significa che un client senza script può entrare su un server e automaticamente vedere le modifiche applicate (questo è utile per esempio per disabilitare un elemento sul server ma non si vuole far scaricare al client ulteriori file).

### Scrivere il tuo primo script

Per iniziare con lo scripting, crea un file estremamente semplice, chiamato `hello.zs` nella cartella `<gamedir>/scripts>`; se non sei sicuro di dove si trovi questa cartella, esegui il comando `/ct scripts` e la cartella si dovrebbe aprire!

Scrivi la seguente riga all'interno di `hello.zs`:

```zenscript
println("Ciao mondo!");
```

Ora carica Minecraft e dai un'occhiata al file `<gamedir>/logs/crafttweaker.log` (o esegui il comando `/ct log` per aprirlo direttamente nel tuo editor di testo predefinito).

Il file `crafttweaker.log` si trova nella cartella `<gamedir>/logs` e può essere letto da qualsiasi programma che può leggere file di puro testo.

It is recommended to use VSCode, Sublime Text or Notepad++ to edit script files, however any program will do.

Quando si sceglie un programma da utilizzare per modificare gli script, cerca quali evidenziatori di sintassi sono disponibili: la maggior parte dei comuni editori di testo supportano la sintassi di ZenScript attraverso l'utilizzo di alcuni plugin.


### Il file crafttweaker.log

Il file `crafttweaker.log` utilizza una specifica sintassi per presentare l'output dell'esecuzione, che è la seguente:

```
[HH:MM:SS.ms][TYPE] <message>
```

In base all'esempio dato sopra, l'output sarebbe:

```
[14:58:06.697][INFO] Hello world!
```

### Commenti

I commenti possono essere utilizzati per rendere gli script più leggibili e facili da capire!

ZenScript supporta tre tipi di commenti:

Riga singola: `// Sono un commento su di un'unica riga!`

Forma alternativa di riga singola: `# Anche io sono un commento su di un'unica riga!`

Righe multiple:
```
/* Sono
un commento
su più righe! */
```

Just note, that `#` comments are also used for [PreProcessors](/zencode/Preprocessors/Preprocessors), so while they are still valid comments, they could cause unwanted side effects. 