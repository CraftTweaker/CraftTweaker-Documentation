# Mulino

## Ricetta Di Base

* Aggiunge una ricetta mulino 

```zenscript
mods.betterwithmods.Mill.addRecipe(IIngredient[] inputs, IItemStack[] outputs);
//Examples
mods.betterwithmods.Mill.addRecipe([<minecraft:dirt>],[<minecraft:stone>]);
```

## Rimozione

* Rimuovere una ricetta mulino in base all'uscita

```zenscript
mods.betterwithmods.Mill.remove(IItemStack[] output);
```

* Rimuovi tutte le ricette del mulino

```zenscript
mods.betterwithmods.Mill.removeAll();
```

## Costruttore

Il Mulino ha un costruttore di ricette che consente un controllo più preciso sulle ricette. Tutti i metodi precedenti sono semplicemente tagli corti per usare il costruttore.

* Per creare un nuovo costruttore mulino. `mods.betterwithmods.Mill.builder()`

* Metodi costruttore mulino
     
     * Imposta gli input e gli output della ricetta  
              zenscript
              buildRecipe(IIngredient[] inputs, IItemStack[] outputs)
     
     * Imposta la priorità della ricetta, minore è la priorità quanto prima sarà creata. Predefinito=0.  
              zenscript
              setPriority(int priority)
     
     * Imposta il suono di una ricetta Mulino.  
              zenscript
              setSound(String soundLocation)
     
     * Finalizzare la ricetta e aggiungerla al gioco  
              zenscript
              build()

### Esempio di utilizzo del costruttore

```zenscript
mods.betterwithmods.Mill.builder()
.buildRecipe([<minecraft:stone>], [<minecraft:stone>])
.setGrindType("minecraft:entity.ghast.scream")
.build();
```