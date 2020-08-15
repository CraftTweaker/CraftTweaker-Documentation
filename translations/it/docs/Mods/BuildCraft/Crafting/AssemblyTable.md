# Tavola Di Assemblaggio

*Richiede Silicio BuildCraft*

Percorso di classe: `mods.buildcraft.AssemblyTable`

## Uso

Per usare, importa la classe con `import mods.buildcraft.Tavola assemblata;` all'inizio del tuo script.

## Aggiungere una Ricetta

`AssemblyTable.addRecipe(recipeName, output, power input);`

- `recipeName` (Opzionale) &lt;stringa> Il nome della ricetta. *Deve essere unico!*
- `output` <[IItemStack](/Vanilla/Items/IItemStack)>
- `potenza` &lt;int> Costo totale in MJ
- `ingressi` <[IIngrediente](/Vanilla/Variable_Types/IIngredient)[]>

```zenscript
importa mods.buildcraft.AssemblyTable;

AssemblyTable.addRecipe("example_recipe_for_diamonds", <minecraft:diamond>, 1000, [<minecraft:coal_block>, <minecraft:redstone>]);
```

## Rimuovere una RIcetta

`AssemblyTable.removeByName(name);`

- `recipeName` &lt;string> Il nome della ricetta.

```zenscript
importa mods.buildcraft.AssemblyTable;

AssemblyTable.removeByName("buildcraftsilicon:redstone_chipset");
```

## Ricette Esistenti

### Chipset:

- `buildcraftsilicon:redstone_chipset`
- `buildcraftsilicon:iron_chipset`
- `buildcraftsilicon:gold_chipset`
- `buildcraftsilicon:quartz_chipset`
- `buildcraftsilicon:diamond_chipset`

### Pluggables:

- `buildcraftsilicon:plug_pulsar`
- `buildcraftsilicon:light-sensor`
- `buildcrafttransport:facaderecipes`

### Lenti:

- `buildcraftsilicon:lens-regular`
- `buildcraftsilicon:lenti-filtro`
- `buildcraftsilicon:lens-regular-<color>`
- `buildcraftsilicon:lens-filter-<color>`

*Sostituire `<color>` con uno dei seguenti elementi: `bianco`, `orange`, `magenta`, `azzurro`, `giallo`, `calce`, `rosa`, `grigio`, `argento`, `ciano`, `viola`, `blu`, `marrone`, `verde`, `rosso`, `nero`*

### Fili:

- `buildcrafttransport:wire-<color>`

*Sostituire `<color>` con uno dei seguenti elementi: `bianco`, `orange`, `magenta`, `azzurro`, `giallo`, `calce`, `rosa`, `grigio`, `argento`, `ciano`, `viola`, `blu`, `marrone`, `verde`, `rosso`, `nero`*

### Cancelli:

- `buildcraftsilicon:gate-<operation>-<material>-no_modifier`
- `buildcraftsilicon:gate-modifier-<operation>-<material>-<modifier>`

Parametri:

- `<operation>`: `e` o `o`
- `<material>`: `ferro`, `nether_brick`o `oro`
- `<modifier>`: `lapis`, `quarzo`, o `diamante`
