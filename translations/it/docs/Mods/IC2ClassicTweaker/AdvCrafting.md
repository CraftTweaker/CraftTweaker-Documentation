# Ricette Avanzate

## Pacchetto

```zenscript
import mods.ic2.AdvRecipes;
```

## Tipi di Ricette
Ci sono diversi tipi di ricette:

### Ricette A Forma
Le ricette a forma sono ricette, dove importa, quale elemento entra in quale slot. Ad esempio, non si può solo organizzare 7 stack di diverse dimensioni di lingotti di ferro in qualsiasi modo per creare leggings di ferro. La forma conta, così è una ricetta sagomata.

### Ricette Senza Forma
Le ricette senza forma sono ricette, dove solo gli oggetti che mettete nella materia della griglia di creazione, mentre la forma non è importante. Ad esempio, colorante blu e giallo creano colorante verde. Questa ricetta non si preoccupa di dove hai messo quale articolo.

## Aggiungi Ricette

### addShaped
```zenscript
mods.ic2.AdvRecipes.addShaped(output,input);
```

Questo crea una ricetta sagomata per `output` utilizzando `ingressi` come ingredienti.

`output` è un [IItemStack](/Vanilla/Items/IItemStack/)  
`ingressi` è un [IIngrediente](/Vanilla/Variable_Types/IIngredient/)\[][\] (vedi sotto)

`inputs` is a 2 Dimensional [IIngredient](/Vanilla/Variable_Types/IIngredient/) Array.  
Quindi la ricetta per i Leggings di Ferro sarebbe stata scritta come `[[ferro, ferro,ferro],[ferro,null,ferro],[ferro, ull,iron]]`  
Se sembra confusione, prova a dividere gli array in un array per riga
```zenscript
val iron = <minecraft:iron_ingot>;
val leggings = <minecraft:iron_leggings>;

AdvRecipes. ddShaped(leggings,
 [[ferro * 5,ferro * 7,ferro * 5],
  [ferro * 3,null,ferro * 3],
  [ferro,null,ferro]]);
```

### addShapeless
```zenscript
mods.ic2.AdvRecipes.addShapeless(output,inputs)
```

Questo crea una ricetta impilata senza forma per `output` utilizzando `ingressi` come ingredienti.

`output` è un [IItemStack](/Vanilla/Items/IItemStack/)  
`inputs` is an [IIngredient](/Vanilla/Variable_Types/IIngredient/)[] (e.g. [<minecraft:dye:1>,<minecraft:dye:2>])

### addHidden
```zenscript
mods.ic2.AdvRecipes.addHiddenShapeless(IItemStack output, IIngredient[] ingredienti);
mods.ic2.AdvRecipes.addHiddenShaped(IItemStack output, IIngredient[][] ingredienti);
```

Questo crea una ricetta impilata sagomata o senza forma per `output` utilizzando `ingressi` come Ingredienti nascosti. 
