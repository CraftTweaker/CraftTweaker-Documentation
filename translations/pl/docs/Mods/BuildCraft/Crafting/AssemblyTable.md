# Tabela montażowa

*Wymaga Krzemienia Budowlanego*

Ścieżka klasy: `mods.buildcraft.AssemblyTable`

## Użycie

Aby użyć, zaimportuj klasę z `importuj mods.buildcraft.Tablet montażowy;` na początku twojego skryptu.

## Dodawanie przepisu

`AssemblyTable.addRecipe(receptura, wyjście, moc, wejścia);`

- `recepturaNazwa` (opcjonalnie) &lt;ciąg> Nazwa receptury. *Musi być unikalny!*
- `wyjście` <[IItemStack](/Vanilla/Items/IItemStack)>
- `moc` &lt;int> Całkowity koszt energii w MJ
- `wejścia` <[Składnik](/Vanilla/Variable_Types/IIngredient)[]>

```zenscript
importuj mods.buildcraft.AssemblyTable;

AssemblyTable.addRecipe("example_recipe_for_diamonds", <minecraft:diamond>, 1000, [<minecraft:coal_block>, <minecraft:redstone>]);
```

## Usuwanie przepisu

`AssemblyTable.removeByName(name);`

- `przepis Nazwa` &lt;ciąg> Nazwa przepisu

```zenscript
importuj mods.buildcraft.AssemblyTable;

AssemblyTable.removeByName("buildcraftsilicon:redstone_chipset");
```

## Istniejące przepisy

### Chipsets:

- `buildcraftsilicon:redstone_chipset`
- `buildcraftsilicon:iron_chipset`
- `buildcraftsilicon:gold_chipset`
- `buildcraftsilicon:quartz_chipset`
- `buildcraftsilicon:diamond_chipset`

### Plugables:

- `buildcraftsilicon:plug_pulsar`
- `buduj krzemionk:lekki czujnik`
- `budownictwo:facaderecipes`

### Soczewki:

- `budowlsilikon:soczewki-normalna`
- `budowlsilikon:soczewka-filtr`
- `budowlsilikon:soczewa-regular-<color>`
- `budowlsilikon:soczewa-filtr-<color>`

*Zastąp `<color>` jednym z następujących: `biały`, `pomarańczowy`, `magenta`, `lightblue`, `yellow`, `wapna`, `różowy` `szary`, `srebra`, `cyjan` `fioletowy` `blue`, `brązowy`, `green`, `red`, `czarny`*

### Przewody:

- `budownictwo:przewodowe-<color>`

*Zastąp `<color>` jednym z następujących: `biały`, `pomarańczowy`, `magenta`, `lightblue`, `yellow`, `wapna`, `różowy` `szary`, `srebra`, `cyjan` `fioletowy` `blue`, `brązowy`, `green`, `red`, `czarny`*

### Baty:

- `buildcraftsilicon:gate-<operation>-<material>-no_modifier`
- `buildcraftsilicon:gate-modifier-<operation>-<material>-<modifier>`

Parametry:

- `<operation>`: `i` lub `lub`
- `<material>`: `żelaza`, `nether_cegła`lub `złota`
- `<modifier>`: `lapis`, `kwarc`lub diament ``
