# Camera Di Pressione

La Camera di Pressione è una struttura multiblock che utilizza aria compressa per convertire uno o più elementi di ingresso in uno o più elementi di uscita. Le ricette della camera di pressione hanno un valore di pressione associato, che è la pressione dell'aria in barra necessaria per eseguire la conversione.

## Chiamata

È possibile chiamare il pacchetto Camera di Pressione utilizzando `mods.pneumaticcraft.pressurechamber`.

## Rimozione

Questa funzione rimuove la prima ricetta che trova con l'array [IItemStack](/Vanilla/Items/IItemStack/) `di uscita` dato:

```zenscript
mods.pneumaticcraft.pressurechamber.removeRecipe(IItemStack[] outputs);
// Esempio
mods.pneumaticcraft.pressurechamber.removeRecipe([<pneumaticcraft:ingot_iron_compressed>]);
```

Questa funzione rimuove *tutte le* ricette della camera di pressione:

```zenscript
mods.pneumaticcraft.pressurechamber.removeAllRicette();
```

## Aggiunta

Questa funzione viene utilizzata per aggiungere nuove ricette alla Camera di Pressione:

```zenscript
mods.pneumaticcraft.pressurechamber.addRecipe(IIngredient[] ingressi, doppia pressione, uscite IItemStack[]);

// Esempio
mods.pneumaticcraft.pressurechamber.addRecipe([<minecraft:gold_ingot> * 2,<minecraft:apple>], 2.0, [<minecraft:golden_apple>]);
```