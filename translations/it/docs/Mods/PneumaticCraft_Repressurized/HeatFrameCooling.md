# Raffreddamento Cornice Di Calore

Il raffreddamento del telaio termico può essere utilizzato per trasformare un oggetto in un altro posizionando gli oggetti in un petto o in un altro inventario con un telaio termico collegato, e raffreddare ad una temperatura inferiore a 0°C (comunemente utilizzando un tubo Vortice).

## Chiamata

È possibile chiamare il pacchetto Heat Frame Cooling utilizzando `mods.pneumaticcraft.heatframecooling`

## Rimozione

Questa funzione rimuove la prima ricetta che trova con l'output [IIngrediente](/Vanilla/Variable_Types/IIngredient/) `dato`:

```zenscript
mods.pneumaticcraft.heatframecooling.removeRecipe(IIngredient output);
// Example
mods.pneumaticcraft.heatframecooling.removeRecipe(<minecraft:obsidian>);
```

Questa funzione rimuove *tutte le* ricette di raffreddamento del telaio termico:

```zenscript
mods.pneumaticcraft.heatframecooling.removeAllRicette();
```

## Aggiunta

Queste funzioni sono utilizzate per aggiungere nuove ricette per il sistema di raffreddamento a telaio termico:

```zenscript
mods.pneumaticcraft.heatframecooling.addRecipe(IItemStack input, IItemStack output);
mods.pneumaticcraft.heatframecooling.addRecipe(IOreDictEntry input, IItemStack output);

// Example
mods.pneumaticcraft.heatframecooling.addRecipe(<minecraft:slime_ball>, <minecraft:snow_ball>);
```