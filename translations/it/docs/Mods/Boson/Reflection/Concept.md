# Il Concetto

La riflessione è una parola inglese che ha molti significati, ma uno in particolare è "la produzione di un'immagine da o come se da uno specchio" ([Fonte: Merriam-Webster Dictionary](https://www.merriam-webster.com/dictionary/reflection)). Lo stesso concetto vale per la programmazione.

La riflessione è, infatti, uno strumento che permette ad un programma di vedersi nello specchio ed eseguire qualche introspezione, come analizzando il tipo di un oggetto, quali metodi espone il programma, invocando variabili private, ecc. Questo è ovviamente uno strumento molto potente, ma allo stesso tempo è anche estremamente pericoloso dal momento che la riflessione fornisce l'accesso a quasi tutto ciò che è attualmente in esecuzione all'interno di un programma.

Il progetto ZenScriptX mira a portare un piccolo sottoinsieme delle possibilità di Riflessione a ZenScript, senza permettere agli utenti di script di aggirare la sandbox ZenScript. In particolare, l'implementazione attenuata ZenScriptX di riflessione permette all'utente di fare quanto segue:

- ispezionare il tipo di oggetto, sia esso una variabile o un gestore di parentesi;
- ottenere il nome semplice e pienamente qualificato di una classe nel sandbox ZenScript;
- ottenere il nome semplice e pienamente qualificato di una classe al di fuori del sandbox ZenScript;
- converti tra una classe ZenScript e la sua controparte nativa (es. `crafttweaker.item.IItemStack` diventa `crafttweaker.api.item.IItemStack`).

E questo è questo: non c'è modo per un utente di script di elencare tutti i metodi forniti da una classe o aggirare le restrizioni imposte da ZenScript con questa riflessione. Si tratta, infatti, di più uno strumento di sviluppo utile per garantire che tipi esposti da una integrazione CraftTweaker vengano convertiti correttamente tra lo script e il backend reale.

Per iniziare, consulta la documentazione per [`NativeClass`](/Mods/Boson/Reflection/NativeClass/) o [`Classe`](/Mods/Boson/Reflection/Class/).
