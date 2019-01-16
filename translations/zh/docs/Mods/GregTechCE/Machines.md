# 机器

格雷科技社区版在 `RecipeMap` 里存储所有的合成表。 为了得到它们，你需要向你的代码导入 `mods.gregtech.recipe.RecipeMap`。

合成表被分类在对应的机器里，调用 `RecipeMap.getByName(机器名称)` 来获取特定的合成表和构建器。

## 可用机器列表

- 压缩机： `compressor`
- 提取机： `extractor`
- 打粉机： `macerator`
- 洗矿厂： `orewasher`
- 热力离心机： `thermal_centrifuge`
- 电炉： `furnace`
- 微波炉： `microwave`
- 组装机： `assembler`
- 冲压机床： `forming_press`
- 流体装罐机： `fluid_canner`
- 等离子电弧炉： `plasma_arc_furnace`
- 电弧炉： `arc_furnace`
- 筛选机： `sifter`
- 精密激光蚀刻机： `laser_engraver`
- 搅拌机： `mixer`
- 高压釜： `autoclave`
- 电磁离析机： `electromagnetic_separator`
- 两极磁化机： `polarizer`
- 化学浸洗器： `chemical_bath`
- 酿造器： `brewer`
- 流体加热器： `fluid_heater`
- 蒸馏室： `distillery`
- Fermenter: `fermenter`
- Fluid solidifier: `fluid_solidifier`
- Fluid extractor: `fluid_extractor`
- Centrifuge: `centrifuge`
- Electrolyzer: `electrolyzer`
- Blast furnace: `blast_furnace`
- Implo compressor: `implosion_compressor`
- Vac freezer: `vacuum_freezer`
- Chemical reactor: `chemical reactor`
- Disti tower: `distillation tower`
- Cracker unit: `cracker`
- Pyrolyse oven: `pyro`
- Wiremill: `wiremill`
- Metal bender: `metal_bender`
- Alloy smelter: `alloy_smelter`
- Canning machine: `canner`
- Lathe: `lathe`
- Block cutting machine: `cutting_saw`
- Extruder: `extruder`
- Forge hammer: `forge_hammer`
- Packaging machine: `packer`
- Unpackaging machine: `unpacker`
- Diesel gen: `diesel_generator`
- Gas turbine: `gas_turbine`
- Steam turbine: `steam_turbine`
- Plasma generator: `plasma_generator`

**尚未实现：**

- UU物质生成机： `uuamplifier`
- 热力发电机： `thermal_generator`
- 半流质发电机： `semi_fluid_generator`
- 聚变反应堆： `fusion_reactor`

**防火砖高炉** *使用了和普通的合成表不同的语法。* 例子：

```java
import mods.gregtech.recipe.PBFRecipeBuilder;

//防火砖高炉
PBFRecipeBuilder.start()
    .input(&lt;ore:ingotCompressedWroughtIron&gt; * 1)
    .output(&lt;ore:ingotSteel&gt;.firstItem * 1)
    .duration(250)
    .fuelAmount(2)
    .buildAndRegister();

//从防火砖高炉移除合成表
import mods.gregtech.recipe.RecipeMaps;

for recipe in RecipeMaps.getPrimitiveBlastFurnaceRecipes() {
    recipe.remove();
```

## 构建器信息

在获得 `RecipeMap` 的一个实例后，你可以使用它的构建器定义合成表

调用构建器方法：

```java
recipeMap.recipeBuilder()
```

这有点像 Java 的 `Stream&lt;T&gt;` ，有齐全的功能来控制你的合成表的行为。

一个电力高炉的例子：

```java
//电力高炉
val blast_furnace = mods.gregtech.recipe.RecipeMap.getByName("blast_furnace");
blast_furnace.recipeBuilder()
    .inputs(&lt;ore:ingotCompressedWroughtIron&gt; * 1)
    .fluidInputs([&lt;liquid:oxygen&gt; * 500])
    .outputs(&lt;ore:ingotSteel&gt;.firstItem * 1)
    .property("temperature", 1000) //this is a minimal temperature at which the item will be smelted
    .duration(40)
    .EUt(120)
    .buildAndRegister();
```

Some of properties assignable to `.property()` method:

| Name        | Description                                                        |
| ----------- | ------------------------------------------------------------------ |
| explosives  | Implosion Compressor, amount of explosives                         |
| circuit     | Integrated Circuit-configurable machines. Configuration of circuit |
| temperature | Blast Furnace. Minimum temperature requirement.                    |

These ones are **NOT IMPLEMENTED YET:**

| Name          | Description                                     |
| ------------- | ----------------------------------------------- |
| amplifier     | UU Amplifier. Amount of UU Amplifier outputted. |
| eu_to_start | Fusion Reactor, EU to start fusion              |

You use it just like the "temperature":

```java
.property("circuit", X)//, where X is the integrated circuit configuration
.property("explosives", Y)//, where Y is the amount of explosives required to make a recipe work
```

More useful methods:

```java
.inputs()
.fluidInputs()
.outputs()
.fluidOutputs()
.chancedOutput(<itemstack>, 0-10000) (10000 is 100%)
.duration() // in ticks
.notConsumable(X) // where X is a CT id. Works as .inputs, but the item doesn't get consumed
.hidden() // if the recipe is hidden from the JEI
.chancedOutput(<itemstack>, 0-10000) (10000 is 100%) // not valid for every machine. some of them use that method. The most notable one is macerator
.EUt() // EU per tick
```

## Removing

Removing a recipe is done by recipe instance itself, so you have to find a recipe first.

Example:

```java
val compressor as RecipeMap = RecipeMap.getByName("compressor");

// findRecipe(long voltage, IItemHandlerModifiable inputs, IMultipleTankHandler/List<FluidStack> fluidInputs)
compressor.findRecipe(2, [<minecraft:redstone>], null).remove();
```