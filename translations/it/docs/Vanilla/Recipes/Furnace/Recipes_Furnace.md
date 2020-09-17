# Fornace

CraftTweaker ti permette di `Aggiungi` e `Rimuovi` Ricette fornace e cambiare il valore del carburante degli oggetti.

## Ricette

### Rimozione

Ci sono 2 modi per rimuovere le ricette Fornace, essere:

```zenscript
furnace.remove(IIngredient output)
```

E

```zenscript
furnace.remove(IIngredient output, IIngredient input);
```

La prima sintassi è più flessibile con le ricette che vengono rimosse e rimuoverà tutte le ricette di Furnace che producono l'output `` dato.  
La seconda sintassi è più rigorosa con le ricette che vengono rimosse e rimuoverà tutte le ricette di Furnace che producono l'output `` dato e ha un input di `input`.

C'è anche un terzo modo di rimuovere ricette forno, anche se questo rimuoverà TUTTE le ricette fornace registrate nel gioco.

```zenscript
furnace.removeAll();
```

### Addizione

Ci sono 2 comandi per aggiungere ricette fornace:

```zenscript
furnace.addRecipe(uscita IItemStack, ingresso IIngredient);
```

E

```zenscript
furnace.addRecipe(uscita IItemStack, ingresso IIngredient, doppio xp);
```

La prima sintassi aggiungerà una ricetta Fornace che darà 0 xp sulla fonderia.

La seconda sintassi aggiungerà una ricetta Fornace che darà `xp` xp sulla fusione.

## Carburante

### Imposta

Il comando per impostare i valori del carburante è:

```zenscript
furnace.setFuel(IIngredient input, int burnTime);
```

Questo imposterà il valore di masterizzazione di `input` su `burnTime` nei tick. Minecraft carbone brucia per 1600 zecche, 80 secondi, 8 oggetti. 1 elemento in un forno minecraft richiede 200 zecche per completare.

Impostare il `burnTime` a `0` impedirà a `input` di essere un elemento combustibile.

### Ottieni

Il comando per recuperare il valore del carburante di un elemento è:

```zenscript
furnace.getFuel(IItemStack item); 
```

Questo restituirà il valore di masterizzazione come Intero

## Esempi

### Rimozione

Questo rimuoverà tutte le ricette Fornace che producono `<minecraft:glass>`.

```zenscript
furnace.remove(<minecraft:glass>);
```

Questo rimuoverà tutte le ricette di Furnace `<minecraft:quartz>` che usano `<minecraft:quartz_ore>` come input.

```zenscript
furnace.remove(<minecraft:quartz>, <minecraft:quartz_ore>);
```

### Addizione

Questo aggiungerà una ricetta Fornace che produrrà un `<minecraft:golden_apple>` quando un `<minecraft:apple>` viene fuso.

```zenscript
furnace.addRecipe(<minecraft:golden_apple>, <minecraft:apple>);
```

Questo aggiungerà una ricetta Fornace che produrrà un `<minecraft:speckled_melon>` quando un `<minecraft:melon>` è fuso e darà al giocatore 1500 punti xp.

```zenscript
furnace.addRecipe(<minecraft:speckled_melon>, <minecraft:melon>, 1500);
```

### Carburante

Questo imposterà il valore del carburante di `<minecraft:rotten_flesh>` a `100`.

```zenscript
furnace.setFuel(<minecraft:rotten_flesh>, 100);
```

## Altra Funzionalità

### Ottenere tutte le ricette di fornace registrate

```zenscript
fornace.all;
```

Restituisce una lista [`<IFurnaceRecipe>`](/Vanilla/Recipes/Furnace/IFurnaceRecipe/).