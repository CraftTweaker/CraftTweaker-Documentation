# Calderone

## Ricetta Di Base

* Aggiunge una ricetta di calderone non evocata 

```zenscript
mods.betterwithmods.Cauldron.addUnstoked(IIngredient[] inputs, IItemStack[] outputs);
//Examples
mods.betterwithmods.Cauldron.addUnstoked([<ore:cobblestone>],[<minecraft:stone>]);
mods.betterwithmods.Cauldron.addUnstoked([<minecraft:dirt>],[<minecraft:grass>]);
```

* Aggiunge una Ricetta di Calderone Stoccata 

```zenscript
mods.betterwithmods.Cauldron.addStoked(IIngredient[] inputs, IItemStack[] outputs);
//Examples
mods.betterwithmods.Cauldron.addStoked([<ore:cobblestone>],[<minecraft:stone>]);
mods.betterwithmods.Cauldron.addStoked([<minecraft:dirt>],[<minecraft:grass>]);
```

## Rimozione

* Rimuovi una ricetta di calderone in base all'output ```mods.betterwithmods.Cauldron.remove(IItemStack[] output);```

* Rimuovi tutte le ricette di calderone ```mods.betterwithmods.Cauldron.removeAll();```

## Costruttore

Il Cauldron ha un costruttore di ricette che consente un controllo più preciso sulle ricette. Tutti i metodi precedenti sono semplicemente tagli corti per usare il costruttore.

* Per creare un nuovo costruttore di calderone. `mods.betterwithmods.Cauldron.builder()`

* Metodi di calderone
    
    * Imposta gli input e gli output della ricetta  
            buildRecipe(IIngredient[] inputs, IItemStack[] outputs)
    
    * Imposta la priorità della ricetta, minore è la priorità quanto prima sarà creata. Predefinito=0.  
            setPriority(int priority)
    
    * Impostare i requisiti di calore della ricetta. Il calore è usato per controllare se la ricetta può essere fatta in un calderone soffiato o non soffocato. Calore non atteso = 1, Calore atteso = 2. È possibile aggiungere fonti di calore personalizzate e anche livelli di calore personalizzati utilizzando il [Registro di calore](/Mods/Modtweaker/BetterWithMods/HeatRegistry/).  
            setHeat(int calore)
    
    * Imposta la ricetta per ignorare il valore del calore e creare comunque  
            setIgnoreHeat(boolean ignoreHeat)
    
    * Finalizzare la ricetta e aggiungerla al gioco  
            build()

### Esempio di utilizzo del costruttore

```zenscript
mods.betterwithmods.Cauldron.builder()
.buildRecipe([<ore:stone>], [<minecraft:dirt>])
.setHeat(2)
.setPriority(-1)
.build();
```