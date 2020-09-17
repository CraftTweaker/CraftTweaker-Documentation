# IIngrediente

Un ingrediente IIngrediente è un ingrediente per ricette.  
Questo potrebbe essere [un elemento](/Vanilla/Items/IItemStack/), [una voce di dizionario minerale](/Vanilla/OreDict/IOreDictEntry/), [un liquido](/Vanilla/Liquids/ILiquidStack/) e molto altro.

## Importazione del pacchetto

Potrebbe essere necessario importare il pacchetto se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import crafttweaker.item.IIngredient;`

## Importazione del pacchetto IIngredient

Di solito, non ne avrai bisogno, ma in alcuni casi le ricette non funzioneranno finché non [importerai](/AdvancedFunctions/Import/) il pacchetto IIngredient.  
Puoi farlo usando la seguente importazione:

```zenscript
import crafttweaker.item.IIngredient;
```

## Funzioni

Allora, che cosa possiamo fare con questo?

### Stringa Di Comando

La stringa di comando è come chiameresti questo elemento in ZS.  
Questo può essere un gestore di parentesi o qualcosa di simile.

```zenscript
val item = <minecraft:iron_ingot>;

//prints "<minecraft:iron_ingot>"
print(item.commandString);
```

### Segna

Puoi contrassegnare un IIngrediente in modo da poterlo utilizzare in seguito nelle [funzioni di creazione](/Vanilla/Recipes/Crafting/Recipe_Functions/). È anche possibile recuperare il segno applicato in precedenza.

```zenscript
//Marca la scelta con la stringa Picky
//item.marked(name) <-- Il nome è una stringa!
val markedPick = <minecraft:diamond_pickaxe>.marked("Picky");

//prints "Picky"
print(markedPick.mark);
```

### Importo

Se si desidera utilizzare più di uno di un dato elemento, è possibile impostare una quantità di un ingrediente.  
Questo è facile come moltiplicare l'IIngrediente con un Integer.  
Recuperare la quantità è anche possibile.

```zenscript
val multipleApples = <minecraft:apple> * 3;

//prints 3
print(multipleApples.amount);
```

### OR-ing an IIngredient

A volte vuoi o IIngrediente X o Y, ma non vuoi creare una ricetta per ogni possibilità? Ecco perché c'è il metodo OR per gli ingredienti:

```zenscript
val item1 = <minecraft:apple>;
val item2 = <minecraft:carrot>;

val o = item1 <unk> item2;
val o 2 = item1.or(item2);
```

### Ottieni oggetti possibili o liquidi

A volte un IIngrediente rappresenta più di un elemento, per esempio se stai usando un [OreDictEntry](/Vanilla/OreDict/IOreDictEntry/) o se hai OR-ed due ingredienti.  
È possibile ottenere tutti gli elementi possibili per questo IIngredient come lista<[IItemStack](/Vanilla/Items/IItemStack/)> Elenco utilizzando la prima funzione.  
La seconda funzione fa lo stesso della prima funzione, ma restituisce un [IItemStack](/Vanilla/Items/IItemStack/)[] invece di una lista. Lo stesso vale per i liquidi nella terza funzione, solo restituiscono un elenco [ILiquidStack](/Vanilla/Liquids/ILiquidStack/).

```zenscript
//Restituisce un IItemStack List
//elementi possibili: Tutti i lingotti di ferro e il lingotto d'oro da MC
val itemsIngredient = <ore:ingotIron> <unk> <minecraft:gold_ingot>;


//Restituisce un ILiquidStack List<unk>
//possibili liquidi: Lava and Water
val liquidsIngredient = <liquid:lava> <unk> <liquid:water>;


per l'articolo in oggettiIngrediente. tems{
    //Stampa ogni possibile articolo Visualizza il nome
    print(item. isplayName);
}

per l'elemento in itemsIngredient.itemArray{
    //Stampa ogni possibile elemento Visualizza il nome
    print(item. isplayName);
}

per liquidi liquidiIngrediente. iquids{
    //Stampa ogni possibile liquido Visualizza il nome
    print(liquido. isplayName);
}

per il liquido in <minecraft:water_bucket>.liquids {
    //Stampa il liquido contenuto, cioè l'acqua.
    //Può non funzionare per ogni elemento, però.
    print(liquid.displayName);
}
```

### Trasforma un ingrediente durante la creazione

A volte si desidera che un oggetto non sia consumato al momento della creazione, ma invece ricevere danneggiato o restituire un oggetto completamente diverso.  
Questo è l'oggetto per cui sono presenti i trasformatori.

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

### Condizioni Ingredienti

A volte vuoi che il tuo ingrediente abbia un tag specifico o funzioni solo se (non) è danneggiato. Queste Condizioni possono essere aggiunte ai tuoi Ingredienti utilizzando quanto segue:

```zenscript
val item = <minecraft:apple>;

//Item sarà accettato solo con un danno di almeno 1 punto
var conditionedItem = oggetto. nlyDamaged();

//Item sarà accettato solo con almeno i punti di danno specificati
conditionedItem = oggetto. nlyDamageAtLeast(10);

//Item sarà accettato solo con al massimo i punti di danno specificati
conditionedItem = oggetto. nlyDamageAtMost(100);

//Item sarà accettato solo con punti di danno maggiore o uguale al primo e minore o uguale al secondo Integer.
conditionedItem = item.onlyDamageBetween(10,100);

//Item sarà accettato solo con il Tag specificato. L'elemento può avere più / altri tag di quelli specificati, quelli vengono ignorati quando selezionato.
//Se vuoi che JEI mostri il tag nella schermata delle ricette, devi aggiungere un tag usando "withTag(tag)"
conditionedItem = item. nlyWithTag({display: {Name: "Tomato"}});

//Item will be accepted only with the specified Tag. L'elemento può avere più / altri tag di quelli specificati, quelli vengono ignorati quando selezionato.
//Nota: Questo potrebbe non funzionare con tutti gli ingredienti, ma funzionerà per gli articoli. Pro lato per usare questo è che JEI mostrerà i tag nella ricetta!
conditionedItem = item.withTag({display: {Name: "Tomato"}});

//Item sarà accettato solo se in una pila di almeno l'importo specificato. Utilizzato principalmente in combinazione con il trasformatore di consumo.
//Notare che se si aggiunge solo questo, consumerà ancora solo un oggetto per ogni mestiere.
conditionedItem = item.onlyStack(32);
```

### Corrispondenza

Se si desidera verificare se un IItemStack corrisponde al proprio IIngrediente, è possibile utilizzare il metodo di abbinamento. Questo restituirà un booleano. Se l'IIngrediente rappresenta un liquido, controllerà se l'elemento è un contenitore valido per questo liquido.

```zenscript
print(<ore:ingotIron>.matches(<minecraft:iron_ingot>));
print(<ore:ingotIron>.matchesExact(<minecraft:iron_ingot>));
```

Puoi anche abbinare due oggetti IIngrediente, nel qual caso dovresti usare il ```in``` operatore:

```zenscript
val ingots = <minecraft:iron_ingot> <unk> <minecraft:gold_ingot>;
val oreIngot = <ore:ingotIron>;
val ingotGold = <minecraft:gold_ingot>;

//true come l'ingrediente lingotti ha <minecraft:gold_ingot>
lingotti ha ingotGold;

//false as <minecraft:iron_ingot> cannot be found in <ore:ingotGold>
oreIngot has ingots;
```