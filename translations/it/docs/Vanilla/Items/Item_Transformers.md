# Trasformatori Di Articoli

Trasformatori di oggetti trasformano i tuoi input di creazione al momento della creazione.  
Questo può andare dal danneggiare l'oggetto fino a restituire un oggetto completamente diverso.

## Importazione del pacchetto

Potrebbe essere necessario importare il pacchetto se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import crafttweaker.item.IItemTransformer;`

```zenscript
<br />val item = <minecraft:apple>;

//Item non sarà consumato e rimarrà nella griglia
transformedItem = item. euse();

//Item non verrà consumato e l'intera pila ti verrà restituita (fa /give).
transformedItem = item.giveBack();

//item verrà consumato ma ti darà lo stack specificato (il crafting slot verrà cancellato!).
transformedItem = elemento. iveBack(<minecraft:potato>);

//elemento sarà sostituito con l'elemento specificato, che invece andrà allo slot di creazione
transformedItem = oggetto. ransformReplace(<minecraft:potato>);

//danneggia l'articolo di 1
transformedItem = oggetto. ransformDamage();

//danneggia l'oggetto dal valore dato
transformedItem = item.transformDamage(3);

//item verrà consumato, indipendentemente da cosa.
transformedItem = item.noReturn();

//Causa il consumo di più elementi.
transformedItem = item.transformConsume(3);
```

## Registrare la propria voce Trasformatori

### Trasforma

Il vecchio itemTransformer che potrebbe cessare di esistere in 1.13.  
Questa è una funzione speciale che accetta due parametri: [elemento](/Vanilla/Items/IItemStack/) stesso e [giocatore](/Vanilla/Players/IPlayer/) che esegue il crafting.

```zenscript
transformedItem = item.transform(function(item, player) {return item;});
```

La funzione deve restituire un [IItemStack](/Vanilla/Items/IItemStack/).  
Questa pila sostituirà quello che c'è nello slot di creazione in seguito. Usa `null` per cancellare questo slot.

### TrasformaNuovo

Con il nuovo sistema di ricette interne c'era la necessità di un nuovo ItemTransformer. Questo solo accetta un parametro, cioè l'elemento nello slot.

```zenscript
transformedItem = item.transformNew(function(item){return item;});
```

La funzione deve restituire un [IItemStack](/Vanilla/Items/IItemStack/).  
A differenza di altri trasformatori, tuttavia, questo non sarà l'oggetto stach che sostituisce quello nello slot di creazione, ma quello che viene restituito per quel slot di creazione.  
In altre parole se restituisci `null` qui, un elemento verrà consumato, qualsiasi altro oggetto restituito sarà posizionato nello slot di creazione, se possibile, o restituito a voi, stesso come quando si tratta di secchi.  
Se non hai davvero bisogno della variabile del giocatore, questo è il trasformatore per andare avanti!