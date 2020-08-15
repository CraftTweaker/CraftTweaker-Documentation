# Stadi Del Giocatore

L'API GameStages espande la funzionalità [IPlayer](/Vanilla/Players/IPlayer/) di CraftTweaker per permetterti di controllare e modificare le fasi di un giocatore.

## Chiamare i metodi

Poiché questo è un [ZenExpansion](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/), puoi semplicemente chiamare i metodi su qualsiasi oggetto [IPlayer](/Vanilla/Players/IPlayer/) , o su uno qualsiasi dei suoi sottotipi.

## Metodi

### Cerca gamestages

I metodi restituiscono i booleani.

```zenscript
// Controlla se il giocatore ha lo stadio passato.
//player.hasGameStage(String stage);
player.hasGameStage("one");



// Controlla se il giocatore ha una qualsiasi delle fasi passate. Ne hanno solo bisogno.
//player.hasAnyGameStages(Stringa... fasi);
player.hasAnyGameStages("one", "due");



// Controlla se il giocatore ha tutte le fasi passate.
//player.hasAllGameStages (Stringa... fasi);
player.hasAllGameStages ("uno", "due");
```

### Aggiungi o rimuovi un gioco

I metodi restituiscono vuoto (niente).

```zenscript
// Sblocca una fase per un giocatore.
//addGameStage(String stage);
addGameStage(String stage);


// Blocca una fase per un giocatore.
//removeGameStage(String stage);
removeGameStage(String stage);
```