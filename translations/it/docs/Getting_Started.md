# Le Basi dello Scripting

CraftTweaker utilizza una lingua di scripting personalizzata chiamata `ZenScript`, ZenScript è letto da `. s` file memorizzati nella cartella `<gamedir>/scripts`.

ZenScript è un linguaggio di scripting "top down", il che significa che le `Direttive di Importazione` (dette anche `Imports`) devono trovarsi in cima al file; le `Dichiarazioni di Variabili` dovrebbero trovarsi nelle prime righe del file, anche se non vi sono restrizioni particolari in merito; infine, le `Variabili` possono essere definite ovunque in uno script, tuttavia non saranno accessibili nelle righe che precedono la dichiarazione della stessa.

## Introduzione

Mai è andato a costruire un modpack e poi ha scoperto che solo gettare in un mucchio di mod non ti ha dato un'esperienza integrata? Poiché le mod sono sviluppate in modo relativamente indipendente l'una dall'altra, uno può sentirsi iperalimentato rispetto all'altra. Oppure si può credere che ci sarebbe una ricetta migliore per alcuni degli elementi. O forse si desidera rimuovere un elemento dal gioco senza dover rimuovere l'intero mod. Oppure potresti scoprire che alcune voci di dizionario di minerale hanno troppi o troppo pochi elementi. Ora si può fare tutto ciò - ciascuno con una sola istruzione a MineTweaker.

Oltre alla funzionalità di base fornita per supportare minecraft Vanilla, le librerie di integrazione mod sono fornite con la mod per consentire non solo di modificare le ricette vanilla, ma anche le ricette della macchina mod e il comportamento mod.

## Script

Gli script sono memorizzati in `<minecraftdir>/script` e sono caricati nella fase `di PreInizializzazione` di Minecraft, a differenza delle versioni precedenti di CraftTweaker, gli script non possono essere ricaricati, questo è dovuto alle modifiche che Mojang hanno fatto in 1. 2 e non c'è nessun lavoro. Inoltre, gli script devono essere su **entrambi, il server E l'istanza client** per funzionare

I file script hanno il prefisso `.zs` e possono essere compressi in un `.zip` che sarà anche letto.

### Scrivere il tuo primo script

Per iniziare con gli Scripts, puoi creare un file molto semplice, chiamato `hello.zs` nella cartella `<minecraftdir>/scripts>`.

In `hello.zs` mettere la seguente riga

```zenscript
print("Ciao mondo!");
```

Ora carica Minecraft e dai un'occhiata al file `crafttweaker.log`.

Il file `crafttweaker.log` si trova in `<minecraftdir>` e può essere letto da qualsiasi programma che può leggere file di testo semplice.

Si consiglia di utilizzare Notepad++ o Sublime Text per modificare i file di script, tuttavia qualsiasi programma farà bene.

### Il file crafttweaker.log

Il file `crafttweaker.log` utilizza una sintassi specifica nel suo output, che la sintassi è:

    [LOADERSTAGE][SIDE][TYPE] <message>
    

Utilizzando l'esempio di cui sopra, l'output sarebbe:

    [PREINITIALIZATION][CLIENT][INFO] Ciao mondo!
    

La sintassi viene utilizzata per scopi di debug e l'unica volta che la sintassi non viene utilizzata, è per le discariche di comando, nel qual caso solo stampa il messaggio, questo è fatto in modo di copiare incollando le discariche è più facile.

### Commenti

I commenti possono essere utilizzati per rendere i file di script più leggibili e più facili da capire!

ZenScript supporta 3 tipi di commenti, essere:

Linea singola: `// Sono un commento a riga singola!`

Alternate Single Line: `# Sono anche un commento a riga singola!`

Multilinea

    /* Sono
    un commento
    su più righe! */