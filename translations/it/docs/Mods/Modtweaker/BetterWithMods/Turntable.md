# Giradischi

## Ricetta Di Base

* Aggiunge Ricetta girevole - gli input *DEVONO* avere un blocco associato a loro. Lo stato del prodotto è il blocco che verrà posizionato dopo le finiture della ricetta

```zenscript
mods.betterwithmods.Turntable.add(IIngredient input, IItemStack productState, IItemStack[] output);

mods.betterwithmods.Turntable.add(IIngredient input, IItemStack[] output);

//Esempi
mods. etterwithmods.Turntable.add(<minecraft:grass>, <minecraft:dirt>, [<minecraft:seed>]);

mods.betterwithmods.Turntable.add(<minecraft:gravel>, [<minecraft:flint>]);
```

## Rimozione tramite input

* Rimuovi una ricetta in base all'ingrediente in ingresso

```zenscript
mods.betterwithmods.Turntable.remove(IIngredient input);
```

## Rimozione tramite output

* Rimuovi una ricetta in base all'output

```zenscript
mods.betterwithmods.Turntable.remove(IItemStack[] output);
```

## Rimuovi tutto

* Rimuovi tutte le ricette

```zenscript
mods.betterwithmods.Turntable.removeAll();
```

## Rimuovi per prodotto

* Rimuovi una ricetta dal prodottoStato 

```zenscript
mods.betterwithmods.Turntable.removeRecipe(IItemStack productState);
```

## Costruttore

Il giradischi ha un costruttore di ricette che consente un controllo più preciso sulle ricette. Tutti i metodi precedenti sono semplicemente tagli corti per usare il costruttore.

* Per creare un nuovo costruttore di giradischi. `mods.betterwithmods.Turntable.builder()`

* Metodi giradischi
     
     * Imposta gli input e gli output della ricetta  
              zenscript
              buildRecipe(IIngredient[] inputs, IItemStack[] outputs)
     
     * Imposta le rotazioni necessarie alla fine della ricetta. Questo valore predefinito è 8.  
              zenscript
              setRotations(int rotations)
     
     * Imposta il blocco che viene posizionato quando la ricetta è finita.  
              zenscript
              setProductState(IItemStack productState)
     
     * Finalizzare la ricetta e aggiungerla al gioco  
              zenscript
              build()

### Esempio di utilizzo del costruttore

```zenscript
mods.betterwithmods.Turntable.builder()
.buildRecipe([<minecraft:oak_fence>], [<minecraft:stick>*6])
.build();
```