# Kiln

## Ricetta Di Base

* Aggiunge Kiln Ricetta - gli ingressi *DEVONO* avere un blocco associato a loro.

```zenscript
mods.betterwithmods.Kiln.add(IIngredient input, IItemStack[] output);
//Examples
mods.betterwithmods.Kiln.add(<minecraft:fence>,[<minecraft:stick>,<minecraft:stick>]);
```

## Rimozione tramite input

* Rimuovi una ricetta in base all'ingrediente in ingresso

```zenscript
mods.betterwithmods.Kiln.remove(IIngredient input);
```

## Rimozione tramite output

* Rimuovi una ricetta in base all'output

```zenscript
mods.betterwithmods.Kiln.remove(IItemStack[] outputs);
```

## Rimuovi tutto

* Rimuovi tutte le ricette

```zenscript
mods.betterwithmods.Kiln.removeAll();
```

## Costruttore

Il Kiln ha un costruttore di ricette che consente un controllo più preciso sulle ricette. Tutti i metodi precedenti sono semplicemente tagli corti per usare il costruttore.

* Per creare un nuovo costruttore Kiln. `mods.betterwithmods.Kiln.builder()`

* Metodi per forni
     
     * Imposta gli input e gli output della ricetta  
              zenscript
              buildRecipe(IIngredient[] inputs, IItemStack[] outputs)
     
     * Impostare i requisiti di calore della ricetta. Il calore è usato per controllare se la ricetta può essere fatta in un calderone soffiato o non soffocato. Calore non atteso = 1, Calore atteso = 2. È possibile aggiungere fonti di calore personalizzate e anche livelli di calore personalizzati utilizzando il [Registro di calore](/Mods/Modtweaker/BetterWithMods/HeatRegistry/).  
              zenscript
              setHeat(int calore)
     
     * Imposta la ricetta per ignorare il valore del calore e creare comunque  
              zenscript
              setIgnoreHeat(boolean ignoreHeat)
     
     * Finalizzare la ricetta e aggiungerla al gioco  
              zenscript
              build()

### Esempio di utilizzo del costruttore

```zenscript
mods.betterwithmods.Kiln.builder()
.buildRecipe([<ore:iron>], [<minecraft:iron_ingot>*2])
.setHeat(2)
.build();
```

## Blocco Struttura

Il Kiln è un multiblock basato sul blocco di cui è fatto; Questo consente di registrare un blocco che può essere utilizzato per creare la struttura.

L'input DEVE essere un blocco **

```zenscript
   mods.betterwithmods.Kiln.registerBlock(IItemStack input);

   mods.betterwithmods.Kiln.registerBlock(<minecraft:stonebrick>);
```