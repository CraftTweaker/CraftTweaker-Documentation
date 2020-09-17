# Impianto Termopneumatico Di Trasformazione

L'impianto di lavorazione termopneumatica (TPP) utilizza pressione e calore per convertire un fluido e/o un ingrediente solido in un altro fluido. Le temperature devono essere specificate in Kelvin: 273 K = 0°C (32°F), 373 K = 100°C (212°F).

*Tecnicamente, 273.16 K = 0°C, ma per gli scopi di questa mod è semplificato ad uno spostamento intero.*

## Chiamata

È possibile chiamare il pacchetto TPP utilizzando `mods.pneumaticcraft.thermopneumaticprocessingplant`.

## Rimozione

Questa funzione rimuove la prima ricetta che trova con l'output [IIngrediente](/Vanilla/Variable_Types/IIngredient/) `dato`:

```zenscript
mods.pneumaticcraft.thermopneumaticprocessingplant.removeRecipe(IIngredient output);
// Example
mods.pneumaticcraft.thermopneumaticprocessingplant.removeRecipe(<liquid:lpg>);
```

Questa funzione rimuove *tutte le* ricette TPP:

```zenscript
mods.pneumaticcraft.thermopneumaticprocessingplant.removeAllRicette();
```

## Aggiunta

Le seguenti funzioni possono essere utilizzate per aggiungere ricette al TPP:

```zenscript
// Aggiungi una ricetta che converte un elemento in ingresso in un fluido di uscita
mods.pneumaticcraft.thermopneumaticprocessingplant. ddRecipe(IItemStack itemInput, doppia pressione, doppia temperatura, ILiquidStack output);

// Aggiungi una ricetta convertendo un fluido di ingresso e un elemento in un fluido di uscita (elemento potrebbe essere nullo)
mods. neumaticcraft.thermopneumaticprocessingplant.addRecipe(ILiquidStack liquidInput, IItemStack itemInput, doppia pressione, doppia temperatura, ILiquidStack output);

// Esempio: convertire acqua e redstone in qualche fluido di redstone a 3. bar e 473K (200C)
mods.pneumaticcraft.thermopneumaticprocessingplant.addRecipe(<liquid:water>, <item:redstone>, 3. , 473, <liquid:redstone> * 250);
// Esempio: convertire l'olio 10mB in lava 5mB a 3.0 bar e 473K
mods.pneumaticcraft.thermopneumaticprocessing plant. ddRecipe(<liquid:oil> * 10, null, 3.0, 473, <liquid:lava> * 5);
// Esempio: convertire 1 netherrack in 50mB lava a 1. bar e 573K
mods.pneumaticcraft.thermopneumaticprocessingplant.addRecipe(<minecraft:netherrack>, 1.5, 573, <liquid:lava> * 50);
```