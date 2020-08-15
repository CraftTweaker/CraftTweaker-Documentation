# Sistema Di Assemblaggio Robotico

Il sistema di assemblaggio robotico è un multiblock composto da unità di assemblaggio, unità di assemblaggio I/O, piattaforma di montaggio, laser di assemblaggio e trapano di montaggio. Converte gli elementi di ingresso in uscita utilizzando il laser e/o la trapano.

Ci sono diverse funzioni per l'aggiunta e la rimozione di ricette, a seconda che la ricetta richieda l'uso del laser, il trapano, o entrambi.

## Chiamata

È possibile chiamare il pacchetto di montaggio utilizzando `mods.pneumaticcraft.assembly`.

## Rimozione

Queste funzioni rimuovono la prima ricetta che trovano con l'output [IItemStack](/Vanilla/Items/IItemStack/) `dato`:

```zenscript
mods.pneumaticcraft.assembly.removeLaserRecipe(IItemStack output);
mods.pneumaticcraft.assembly.removeDrillRecipe(IItemStack output);
mods.pneumaticcraft.assembly.removeDrillLaserRecipe(IItemStack output);

// Examples
mods.pneumaticcraft.assembly.removeLaserRecipe(<pneumaticcraft:aphorism_tile>);
mods.pneumaticcraft.assembly.removeDrillRecipe(<pneumaticcraft:pressure_chamber_valve>);
```

Queste funzioni rimuovono *tutte le* ricette attualmente definite per il sistema di assemblaggio:

```zenscript
mods.pneumaticcraft.assembly.removeAllLaserRecipes();
mods.pneumaticcraft.assembly.removeAllDrillRecipes();
mods.pneumaticcraft.assembly.removeAllDrillLaserRecipes();
```

## Aggiunta

Queste funzioni sono usate per aggiungere nuove ricette per il sistema di assemblaggio:

```zenscript
mods.pneumaticcraft.assembly.addLaserRecipe(IItemStack input, IItemStack output)
mods.pneumaticcraft.assembly.addDrillRecipe(IItemStack input, IItemStack output)
mods.pneumaticcraft.assembly.addDrillLaserRecipe(IItemStack input, IItemStack output)

// Examples
mods.pneumaticcraft.assembly.addLaserRecipe(<pneumaticcraft:ingot_iron_compressed> * 2, <pneumaticcraft:compressed_iron_gear>);
```