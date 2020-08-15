# Ricette

## Tipi di Ricette

Ci sono diversi tipi di ricette:

### Ricette A Forma

Le ricette a forma sono ricette, dove importa, quale elemento entra in quale slot. Ad esempio, non si può solo organizzare 7 lingotti di ferro in alcun modo per creare leggings di ferro. La forma conta, così è una ricetta sagomata.

### Ricetta Specchiata

Le ricette a specchio sono ricette sagomate. Solo la differenza è che la ricetta può essere specchiata lungo gli assi orizzontali o verticali.

### Ricette Senza Forma

Le ricette senza forma sono ricette, dove solo gli oggetti che mettete nella materia della griglia di creazione, mentre la forma non è importante. Ad esempio, colorante blu e giallo creano colorante verde. Questa ricetta non si preoccupa di dove hai messo quale articolo.

## Rimuovi Ricette

Ci sono diversi modi per rimuovere le ricette.

### rimuovi

```zenscript
recipes.remove(output, NBTMatch);
```

Questo creerà ricette da tavolo per l'output `dato`.  
Se `NBTMatch` è vero, rimuoverà solo le ricette che si traducono in elementi con gli stessi dati NTB forniti

`Output` è un [IIngrediente](/Vanilla/Variable_Types/IIngredient/).  
`NBTMatch` è un boolan e opzionale (Will è uguale a falso se non specificato).

### removeShaped

```zenscript
recipes.removeShaped(output, input);
```

Questo è più rigoroso su quali ricette rimuovere e rimuoverà solo ricette sagomate che producono `output` con `input`.

`output` is an [IIngredient](/Vanilla/Variable_Types/IIngredient/)  
`inputs` is an [IIngredient](/Vanilla/Variable_Types/IIngredient/)\[][\] (e.g.[[iron,iron,iron],[iron,null,iron],[iron,null,iron]])

Inoltre, `ingressi` è opzionale. Se omesso, la funzione farà lo stesso di `ricetta.remove`, anche se rimuoverà solo Ricette sagomate.  
`inputs` può contenere caratteri jolly: `[[<*>,<*>,<*>],[<*>,<*>,<*>],[<*>,<*>,<*>]]` fa riferimento a una ricetta i cui articoli, finché ogni slot è riempito, non importa.

### removeShapeless

```zenscript
recipes.removeShapeless(output, inputs, wildcard);
```

Questo è più rigoroso su quali ricette rimuovere e rimuoverà solo ricette senza forma che producono `output` con `input`.  
Se `wildcard` è vero, rimuoverà ricette senza forma che producono `output` con `input` e altri, articoli non specificati (ad esempio si potrebbe disabilitare tutte le ricette senza forma che contengono, tra gli altri, Lapis come ingrediente).

`output` is an [IIngredient](/Vanilla/Variable_Types/IIngredient/)  
`inputs` is an [IIngredient](/Vanilla/Variable_Types/IIngredient/)[]  
`wildcard` is a boolan and optional (Will be the same as false if not specified)

Inoltre, `ingressi` è opzionale. Se omesso, la funzione farà lo stesso di `ricetta.remove`, anche se rimuoverà solo ricette senza forma.

### removeAll

Rimuove tutte le ricette di creazione nel gioco.  
Un po' di overkill, non pensi?

```zenscript
recipes.removeAll();
```

### Rimuovi per nome

Come 1.12 introduce ricette di denominazione, è anche possibile rimuovere le ricette una volta che si conosce il loro nome. È inoltre possibile utilizzare il regex per rimuovere più ricette contemporaneamente. E no, se non sai quali sono le espressioni regolari, non lo spiegherò qui!

```zenscript
recipes.removeByRegex("name[1-9]");
recipes.removeByRecipeName("modid:recipename");
```

### Rimuovi da mod

Puoi anche rimuovere tutte le ricette che sono state aggiunte dalla mod specificata.  
Devi fornire la modid della mod come stringa.

```zenscript
recipes.removeByMod("modularmachinery");
```

## Aggiungi Ricette

### Note 1.12

Su 1.12, ogni ricetta aggiunta richiede un identificatore UNIQUE, perché il team di forge dev lo voleva in quel modo.  
Questo significa, tutte le funzioni di aggiunta ora richiedono un parametro aggiuntivo `nome` all'inizio (che non può essere omesso).  
Questo significa `recipe.addShaped(output,input);` ora è `ricetta. ddShaped(name,output,input);`  
Tutte le altre funzionalità rimangono invariate. Ricorda che il nome `` deve essere unico!  
`il nome` è una stringa.

### addShaped

```zenscript
//pre-1.12
recipes.addShaped(output,inputs,function,action);

//1.12
recipes.addShaped(name,output,inputs,function,action);
```

Questo crea una ricetta sagomata per `output` utilizzando `ingressi` come ingredienti.  
Se una funzione `` viene aggiunta come terzo parametro, è anche possibile utilizzare una funzione per determinare l'output.  
Se una funzione `azione` viene aggiunta come parametro indietro, si può anche determinare, cosa accadrà, se l'oggetto è realizzato.

`name` is a string and need to be unique but is also optional `output` is an [IItemStack](/Vanilla/Items/IItemStack/)  
`inputs` is an [IIngredient](/Vanilla/Variable_Types/IIngredient/)\[][\] (vedi sotto)  
`function` is a IRecipeFunction. Si prega di fare riferimento al [rispettando la voce wiki](/Vanilla/Recipes/Crafting/Recipe_Functions/#irecipefunction) per maggiori informazioni sulle funzioni.  
`action` è un IRecipeAction. Si prega di fare riferimento alla voce [rispettando wiki](/Vanilla/Recipes/Crafting/Recipe_Functions/#irecipeaction) per maggiori informazioni sulle azioni.

`inputs` is a 2 Dimensional [IIngredient](/Vanilla/Variable_Types/IIngredient/) Array.  
Quindi la ricetta per i Leggings di Ferro sarebbe stata scritta come `[[ferro, ferro,ferro],[ferro,null,ferro],[ferro, ull,iron]]`  
Se sembra confusione, prova a dividere gli array in un array per riga

```zenscript
val iron = <minecraft:iron_ingot>;
val leggings = <minecraft:iron_leggings>;

recipes.addShaped("CTLeggings", leggings,
 [[ferro, ferro,ferro],
  [ferro,null,ferro],
  [ferro,null,ferro]]);
```

### addShapedMirrored

```zenscript
//Normale pre 1.12 sintassi
recipes.addShapedMirrored(output,inputs,function,action);

//Recommended 1.12 syntax
recipes.addShapedMirrored(name,output,inputs,function,action);
```

Come `addShaped`, solo che la ricetta creata in questo modo è una ricetta specchiata.

### addShapeless

```zenscript
//Normale pre 1.12 sintassi
recipes.addShapeless(output,inputs,function,action)

//Recommended 1.12 syntax
recipes.addShapeless(name,output,inputs,function,action)
```

Questo crea una ricetta senza forma per `output` utilizzando `ingressi` come ingredienti.  
Se una funzione `` viene aggiunta come terzo parametro, è anche possibile utilizzare una funzione per determinare l'output.  
Se una funzione `azione` viene aggiunta come parametro indietro, si può anche determinare, cosa accadrà, se l'oggetto è realizzato.

`nome` è una stringa e deve essere univoca `l'output` è un [IItemStack](/Vanilla/Items/IItemStack/)  
`inputs` è un [IIngrediente](/Vanilla/Variable_Types/IIngredient/)[] (ad es. [<minecraft:dye:1>,<minecraft:dye:2>])  
`funzione` è un IRecipeFunction. Si prega di fare riferimento alla voce [rispettando wiki](/Vanilla/Recipes/Crafting/Recipe_Functions/#irecipefunction) per maggiori informazioni sulle funzioni. Questo è facoltativo.  
`azione` è un IRecipeAction. Si prega di fare riferimento alla voce [rispettando wiki](/Vanilla/Recipes/Crafting/Recipe_Functions/#irecipeaction) per maggiori informazioni sulle azioni. Questo è facoltativo.

### addHidden

```zenscript
addHiddenShapeless(String name, IItemStack output, IIngredient[] ingredienti, @Optional IRecipeFunction function, @Optional IRecipeAction action);
addHiddenShaped(String name, IItemStack output, IIngredient[][] ingredienti, @Optional IRecipeFunction function @Optional IRecipeAction action, @Optional boolean mirrored);
```

Questo crea una ricetta senza forma per l'output `` utilizzando `ingressi` come Ingredienti che viene chiamato `nome`.  
Se una funzione `` viene aggiunta come terzo parametro, è anche possibile utilizzare una funzione per determinare l'output.  
Se una funzione `azione` viene aggiunta come parametro indietro, si può anche determinare, cosa accadrà, se l'oggetto è realizzato.  
Per la variante senza forma è anche possibile impostare se la ricetta è `specchiata`, se omesso, non lo farà.

## Altra Funzionalità

### Ottieni tutte le ricette di artigianato registrate.

Puoi usarlo per ottenere una lista [`<ICraftingRecipe>`](/Vanilla/Recipes/Crafting/ICraftingRecipe/) che contiene TUTTE le ricette di creazione registrate.

    recipes.all;
    

### Ottieni tutte le ricette per un dato IIngrediente

È possibile utilizzare questo per ottenere una lista [`<ICraftingRecipe>`](/Vanilla/Recipes/Crafting/ICraftingRecipe/) che contiene TUTTE le ricette di artigianato registrate per il dato [IIngrediente](/Vanilla/Variable_Types/IIngredient/).

    //recipes.getRicetteFor(ingrediente IIngrediente);
    recipes.getRicetteFor(<minecraft:iron_ingot>);
    

### Sostituire tutti gli ingredienti dell'articolo con un altro

È possibile utilizzare questo per sostituire tutti gli [ingredienti](/Vanilla/Variable_Types/IIngredient/) in una ricetta con un altro, per esempio tutti i bastoncini con pietre. Accetta anche un terzo parametro opzionale che corrisponde di nuovo agli output della ricetta. Se la ricetta

    //recipes.replaceAllOccurences(IIngredient toReplace, IIngredient replaceWith, @Optional IIngredient forOutput);
    
    //sostituisce ogni bastone con
    ricette di pietra. eplaceAllOccurences(<minecraft:stick>, <minecraft:stone>);
    
    //Esplicitamente utilizza qualsiasi output, sostituisce lingotti d'oro con blocchi d'oro
    ricette. eplaceAllOccurences(<ore:ingotGold>, <ore:blockGold>, <*>);
    
    
    //sostituisce solo in ricette con una spada di diamante come output
    ricette. eplaceAllOccurences(<ore:gemDiamond>, <ore:blockDiamond>, <minecraft:diamond_sword>);
    
    
    //le condizioni funzionano anche -> sostituisce in ricette per qualsiasi produzione di ricette tranne tnt
    ricette. eplaceAllOccurences(<ore:gunpowder>, <minecraft:tnt>, <*>. nly(function(item) {
        return !isNull(item) & !<minecraft:tnt>.matches(item);
    }));
    

### Crea

Puoi anche creare dall'interno `ricette`! La funzione restituirà un [IItemStack](/Vanilla/Items/IItemStack/) o `null` a seconda che una ricetta venga trovata o meno.

    //recipes.craft(IItemStack[][]content);
    recipes.craft([[<minecraft:iron_ingot>]]);