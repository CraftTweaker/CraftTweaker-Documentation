# Mesa de ensamblado

*Requiere silicio de construcción*

Class path: `mods.buildcraft.AssemblyTable`AssemblyTable</code>

## Usar

To use, import the class with `import mods.buildcraft.AssemblyTable;` at the beginning of your script.Montaje,</code> al principio de tu script.

## Añadir una receta

`AssemblblyTable.addRecipe(recipeName, salida, potencia, entradas);`

- `recipeName` (Opcional) &lt;string> El nombre de la receta. *¡Debe ser único!*
- `output` <[IItemStack](/vanilla/api/items/IItemStack)>
- `energía` &lt;int> Coste total de energía en MJ
- `inputs` <[IIngredient](/vanilla/api/items/IIngredient)[]>

```zenscript
importar mods.buildcraft.import mods.buildcraft.AssemblyTable;

AssemblyTable.addRecipe("example_recipe_for_diamonds", <minecraft:diamond>, 1000, [<minecraft:coal_block>, <minecraft:redstone>]);
```

## Eliminando una receta

`AssemblyTable.removeByName(name);`

- `recipeName` &lt;string> El nombre de la receta.

```zenscript
importar mods.buildcraft.import mods.buildcraft.AssemblyTable;

AssemblyTable.removeByName("buildcraftsilicon:redstone_chipset");
```

## Recetas existentes

### Chipsets:

- `construccióncraftsilicon:redstone_chipset`
- `crear silicón de construcción: chipset de hierro`
- `buildcraftsilic:gold_chipset`
- `crear silicona:quartz_chipset`
- `crear silicona:diamond_chipset`

### Conectables:

- `buildcraftsilicon:plug_pulsar`
- `construccióncraftsilicon:sensor de luz`
- `buildcrafttransport:facaderecipes`

### Lentidades:

- `construccióncraftsilicón:lente regular`
- `construccióncraftsilicon:filtro de lentes`
- `buildcraftsilicon:lens-regular-<color>`
- `buildcraftsilicon:lens-filter-<color>`

*Reemplaza `<color>` con cualquiera de los siguientes: `blanco`, `naranja`, `magenta`, `azul claro`, `amarillo`, `cal`, `rosa`, `grises`, `plata`, `cian`, `morados`, `azules`, `marrones`, `verde`, `rojo`, `negros`*

### Alambres:

- `buildcrafttransport:wire-<color>`

*Reemplaza `<color>` con cualquiera de los siguientes: `blanco`, `naranja`, `magenta`, `azul claro`, `amarillo`, `cal`, `rosa`, `grises`, `plata`, `cian`, `morados`, `azules`, `marrones`, `verde`, `rojo`, `negros`*

### Puertas:

- `buildcraftsilicon:gate-<operation>-<material>-no_modifier`
- `buildcraftsilicon:gate-modifier-<operation>-<material>-<modifier>`

Parámetros:

- `<operation>`: `y` o `o`
- `<material>`: `hierro`, `nether_brick`, o `oro`
- `<modifier>`: `lapis`, `quartz`, o `diamante`
