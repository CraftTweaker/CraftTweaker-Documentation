# Crogiolo

## Ricetta Di Base

* Aggiunge una Ricetta Crogiolo Non Stupita 

```zenscript
mods.betterwithmods.Crucible.addUnstoked(IIngredient[] inputs, IItemStack[] outputs);
//Examples
mods.betterwithmods.Crucible.addUnstoked([<ore:cobblestone>],[<minecraft:stone>]);
mods.betterwithmods.Crucible.addUnstoked([<minecraft:dirt>],[<minecraft:grass>]);
```

* Aggiunge una ricetta Crogiolo Stoccata 

```zenscript
mods.betterwithmods.Crucible.addStoked(IIngredient[] inputs, IItemStack[] outputs);
//Examples
mods.betterwithmods.Crucible.addStoked([<ore:cobblestone>],[<minecraft:stone>]);
mods.betterwithmods.Crucible.addStoked([<minecraft:dirt>],[<minecraft:grass>]);
```

## Rimozione

* Rimuovere una ricetta Crogibile in base all'uscita

```zenscript
mods.betterwithmods.Crucible.remove(IItemStack[] output);
```

* Rimuovi tutte le ricette Crogibili

```zenscript
mods.betterwithmods.Crucible.removeAll();
```

## Costruttore

Il Crogiolo ha un costruttore di ricette che permette un controllo più preciso sulle ricette. Tutti i metodi precedenti sono semplicemente tagli corti per usare il costruttore.

* Per creare un nuovo costruttore Crogiolo. `mods.betterwithmods.Crucible.builder()`

* Metodi crogioli
     
     * Imposta gli input e gli output della ricetta  
              zenscript
              buildRecipe(IIngredient[] inputs, IItemStack[] outputs)
     
     * Imposta la priorità della ricetta, minore è la priorità quanto prima sarà creata. Predefinito=0.  
              zenscript
              setPriority(int priority)
     
     * Impostare i requisiti di calore della ricetta. Il calore è usato per controllare se la ricetta può essere fatta in un Crogiolo soffiato o non soffocato. Calore non atteso = 1, Calore atteso = 2. È possibile aggiungere fonti di calore personalizzate e anche livelli di calore personalizzati utilizzando il [Registro di calore](/Mods/Modtweaker/BetterWithMods/HeatRegistry/).  
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
mods.betterwithmods.Crucible.builder()
.buildRecipe([<ore:stone>], [<minecraft:dirt>])
.setHeat(2)
.setPriority(-1)
.build();
```