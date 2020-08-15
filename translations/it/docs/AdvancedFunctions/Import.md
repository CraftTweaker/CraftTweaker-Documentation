# Funzione Di Importazione

Invece di digitare tutto il nome funzione per tutto il tempo, è possibile importare solo una funzione per soddisfare le vostre esigenze. Utile quando si utilizzano le funzioni mod.

## Nota sulle importazioni pre 1.12

Con CraftTweaker 1.12, un sacco di codice è cambiato.  
Prima, tutte le funzioni interne sono state chiamate usando `minetweaker.package.function`. Ora, `minetweaker` è stato sostituito da `crafttweaker`, così ora sais `crafttweaker.name.function`!

Se dovessi mai verificare eventuali problemi di importazione con gli script da questa wiki, potresti voler controllare se la tua versione MC è inferiore a 1.12.

## Importazione Di Base

Le importazioni devono essere dichiarate nella parte superiore di un Script. Dovrai dichiarare le importazioni per ogni script separatamente. Fare attenzione a non importare due funzioni con lo stesso nome, utilizzare la funzione AS per questo

```zenscript
//This will import the hide function from JEI
import mods.jei.JEI.removeAndHide;

//And this will import the JEI package
import mods.jei. EI;

//removeAndHide è una funzione, quindi possiamo semplicemente usarla
removeAndHide(<minecraft:dirt>);

//JEI è un pacchetto, quindi dobbiamo specificare quale funzione vogliamo utilizzare
JEI. ide(<minecraft:diamond>);
```

## Importa come

A volte si desidera importare due funzioni con lo stesso nome o semplicemente voler mantenere i tuoi script un aspetto migliore utilizzando nomi personalizzati. Quando si aggiunge la dichiarazione AS alla fine dell'importazione, è possibile specificare il nome che l'importazione dovrebbe ascoltare.

```zenscript
//Questo importerà la funzione nascondi da JEI e la renderà disponibile sotto il nome "h"
import mods.jei.JEI. ide as h;

//E questo importerà la funzione removeAndHide da JEI e la renderà disponibile sotto il nome "rh"
mod di importazione. ei.JEI.removeAndHide as rh;

h(<minecraft:dirt>);
rh(<minecraft:diamond>);
```