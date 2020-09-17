# 集合表

*需要建造合成硅图标*

类路径： `mods.buildcraft。AssemblyTable`

## 使用

要使用，导入使用 `导入mods.buildcraft的类。编程；` 在你的脚本开头。

## 添加配方

`AssemblyTable.addRecipe(recipeName, output, power, inputes)；`

- `recipeName` (可选) &lt;字符串> 该配方的名称。 *必须是唯一的！*
- `输出` <[IItemStack](/Vanilla/Items/IItemStack)>
- `电源` &lt;int> 总电源成本
- `输入` <[IIngredient](/Vanilla/Variable_Types/IIngredient)[]>

```zenscript
导入 mods.buildcraft。Assembly;

AssemblyTable.addRecipe("example_recipe_for_diamonds", <minecraft:diamond>, 1000, [<minecraft:coal_block>, <minecraft:redstone>]);
```

## 删除配方

`AssemblyTable.removeByName(name);`

- `recipeName` &lt;字符串> 该配方的名称。

```zenscript
导入 mods.buildcraft。AssemblyTable;

AssemblyTable.removeByName("buildcraftsilicon:redstone_chipset");
```

## 现有配方

### 芯片：

- `建造手工艺: redstone_chipset`
- `buildcraftsilicon:iron_chipset`
- `buildcraftsilicon:gold_chipset`
- `buildcraftsilicon:quartz_chipset`
- `buildcraftsilicon:diamond_chipset`

### 行李：

- `buildcraftsilicon:plug_pulsar`
- `buildcraftsilicon:light-sensor`
- `buildcrafttransport:faceditions`

### 镜头：

- `构建手工艺: lens-regular`
- `构建手工艺: lens-filter`
- `buildcraftsilicon:lens-regulatory -<color>`
- `buildcraftsilicon:lens-filter-<color>`

*将 `<color>` 替换成以下任一内容： `白色` `橙色`, `洋红色`, `浅蓝色`, `黄色`, `lime`, `粉红色`, `灰色`, `silver`, `cyan`, `purple`, `Blue`, `brown`, `green`, `red`, `black`*

### 线路：

- `构建手工传输:wire-<color>`

*将 `<color>` 替换成以下任一内容： `白色` `橙色`, `洋红色`, `浅蓝色`, `黄色`, `lime`, `粉红色`, `灰色`, `silver`, `cyan`, `purple`, `Blue`, `brown`, `green`, `red`, `black`*

### 网关：

- `buildcraftsilicon:gate-<operation>-<material>-no_modifier`
- `buildcraftsilicon:gate-modifier-<operation>-<material>-<modifier>`

参数：

- `<operation>`: `和` 或 `或`
- `<material>`: `iron`, `nether_积木`, 或 `gold`
- `<modifier>`: `lapis`, `quartz`, 或 `diamond`
