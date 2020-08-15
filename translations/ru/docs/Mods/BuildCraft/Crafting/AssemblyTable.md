# Таблица сборки

*Требуется BuildCraft Silicon*

Путь к классу: `mods.buildcraft.AssemblyTable`

## Использовано

Чтобы использовать, импортируйте класс с `импортируйте mods.buildcraft.Таблица сборки;` в начале вашего скрипта.

## Добавление рецепта

`Сборка Table.addRecipe(рецепт, выход, мощность, вход);`

- `рецепт` (необязательно) &lt;строка> Название рецепта. *Должно быть уникальным!*
- `вывести` <[IItemStack](/Vanilla/Items/IItemStack)>
- `мощность` &lt;int> Общая мощность в MJ
- `входов` <[Ингредиент](/Vanilla/Variable_Types/IIngredient)[]>

```zenscript
import mods.buildcraft.Таблица сборки;

AssemblyTable.addRecipe("example_recipe_for_diamonds", <minecraft:diamond>, 1000, [<minecraft:coal_block>, <minecraft:redstone>]);
```

## Удаление рецепта

`AssemblyTable.removeByName(name);`

- `рецепт` &lt;строка> Название рецепта.

```zenscript
import mods.buildcraft.AssemblyTable;

AssemblyTable.removeByName("buildcraftsilicon:redstone_chipset");
```

## Существующие Рецепты

### Набор фишек:

- `buildcraftsilicon:redstone_chipset`
- `buildcraftsilicon:iron_chipset`
- `buildcraftsilicon:gold_chipset`
- `buildcraftsilicon:quartz_chipset`
- `buildcraftsilicon:diamond_chipset`

### Плюсы:

- `buildcraftsilicon:plug_pulsar`
- `buildcraftsilicon: световой датчик`
- `buildcrafttransport:facaderecipes`

### Расценки:

- `buildcraftsilicon:lens-regular`
- `buildcraftsilicon:lens-filter`
- `buildcraftsilicon:lens-regular-<color>`
- `buildcraftsilicon:lens-filter-<color>`

*Заменить `<color>` любым из следующих: `белый`, `оранжевый`, `пурпурная`, `Светло-синий`, `желтый`, `лайма`, `розовый`, `Серый`, `серебро`, `голубой`, `фиолетовый`, `синий`, `коричневый`, `зелёный`, `красный`, `черный`*

### Проводки:

- `buildcrafttransport:wire-<color>`

*Заменить `<color>` любым из следующих: `белый`, `оранжевый`, `пурпурная`, `Светло-синий`, `желтый`, `лайма`, `розовый`, `Серый`, `серебро`, `голубой`, `фиолетовый`, `синий`, `коричневый`, `зелёный`, `красный`, `черный`*

### Шлюзы:

- `buildcraftsilicon:gate-<operation>-<material>-no_modifier`
- `buildcraftsilicon:gate-modifier-<operation>-<material>-<modifier>`

Параметры:

- `<operation>`: `и` или `или`
- `<material>`: `железо`, `nether_brick`, или `золота`
- `<modifier>`: `lapis`, `quartz`, или `diamond`
