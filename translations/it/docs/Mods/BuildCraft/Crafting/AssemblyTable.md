# Assembly Table

*Requires BuildCraft Silicon*

Class path: `mods.buildcraft.AssemblyTable`

## Use

To use, import the class with `import mods.buildcraft.AssemblyTable;` at the beginning of your script.

## Adding a Recipe

`AssemblyTable.addRecipe(recipeName, output, power, inputs);`

- `recipeName` (Optional) &lt;string> The name of the recipe. *Must be unique!*
- `output` <[IItemStack](/Vanilla/Items/IItemStack)>
- `power` &lt;int> Total power cost in MJ
- `inputs` <[IIngredient](/Vanilla/Variable_Types/IIngredient)[]>

```zenscript
import mods.buildcraft.AssemblyTable;

AssemblyTable.addRecipe("example_recipe_for_diamonds", <minecraft:diamond>, 1000, [<minecraft:coal_block>, <minecraft:redstone>]);
```

## Removing a Recipe

`AssemblyTable.removeByName(name);`

- `recipeName` &lt;string> The name of the recipe.

```zenscript
import mods.buildcraft.AssemblyTable;

AssemblyTable.removeByName("buildcraftsilicon:redstone_chipset");
```

## Existing Recipes

### Chipsets:

- `buildcraftsilicon:redstone_chipset`
- `buildcraftsilicon:iron_chipset`
- `buildcraftsilicon:gold_chipset`
- `buildcraftsilicon:quartz_chipset`
- `buildcraftsilicon:diamond_chipset`

### Pluggables:

- `buildcraftsilicon:plug_pulsar`
- `buildcraftsilicon:light-sensor`
- `buildcrafttransport:facaderecipes`

### Lenses:

- `buildcraftsilicon:lens-regular`
- `buildcraftsilicon:lens-filter`
- `buildcraftsilicon:lens-regular-<color>`
- `buildcraftsilicon:lens-filter-<color>`

*Replace `<color>` with any of the following: `white`, `orange`, `magenta`, `lightblue`, `yellow`, `lime`, `pink`, `gray`, `silver`, `cyan`, `purple`, `blue`, `brown`, `green`, `red`, `black`*

### Wires:

- `buildcrafttransport:wire-<color>`

*Replace `<color>` with any of the following: `white`, `orange`, `magenta`, `lightblue`, `yellow`, `lime`, `pink`, `gray`, `silver`, `cyan`, `purple`, `blue`, `brown`, `green`, `red`, `black`*

### Gates:

- `buildcraftsilicon:gate-<operation>-<material>-no_modifier`
- `buildcraftsilicon:gate-modifier-<operation>-<material>-<modifier>`

Parameters:

- `<operation>`: `and` or `or`
- `<material>`: `iron`, `nether_brick`, or `gold`
- `<modifier>`: `lapis`, `quartz`, or `diamond`
