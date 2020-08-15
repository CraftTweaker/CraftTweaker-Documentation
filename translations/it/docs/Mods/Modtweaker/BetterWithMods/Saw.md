# Sega

## Ricetta Di Base

* Aggiunge Ricetta Sega - gli ingressi *DEVE* avere un blocco associato a loro.

```zenscript
mods.betterwithmods.Saw.add(IIngredient input, IItemStack[] output);
//Examples
mods.betterwithmods.Saw.add(<minecraft:fence>,[<minecraft:stick>,<minecraft:stick>]);
```

## Rimozione tramite input

* Rimuovi una ricetta in base all'ingrediente in ingresso

```zenscript
mods.betterwithmods.Saw.remove(IIngredient input);
```

## Rimozione tramite output

* Rimuovi una ricetta in base all'output

```zenscript
mods.betterwithmods.Saw.remove(IItemStack[] output);
```

## Rimuovi tutto

* Rimuovi tutte le ricette

```zenscript
mods.betterwithmods.Saw.removeAll();
```

## Costruttore

La Sega ha un costruttore di ricette. A causa della natura del visto attualmente non ha metodi costruttori speciali, io lo documenterò none-the-less.

* Per creare un nuovo costruttore di sega. `mods.betterwithmods.Saw.builder()`

* Metodi sega
     
     * Imposta gli input e gli output della ricetta  
              zenscript
              buildRecipe(IIngredient[] inputs, IItemStack[] outputs)
     
     * Finalizzare la ricetta e aggiungerla al gioco  
              zenscript
              build()

### Esempio di utilizzo del costruttore

    mods.betterwithmods.Saw.builder()
    .buildRecipe([<minecraft:oak_fence>], [<minecraft:stick>*6])
    .build();