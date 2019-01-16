# Machines

格雷科技社区版在 `RecipeMap` 里存储所有的合成表。 To get them, you need import `mods.gregtech.recipe.RecipeMap` to your code.

Recipes are categorized into their machines, call `RecipeMap.getByName(machineName)` to get specific recipes and builder.

## List of available machines

- Compressor: `compressor`
- Extractor: `extractor`
- Macerator: `macerator`
- Ore washing plant: `orewasher`
- Thermal centrifuge: `thermal_centrifuge`
- Furnace: `furnace`
- Microwave: `microwave`
- Assembling machine: `assembler`
- Forming press: `forming_press`
- Fluid canner: `fluid_canner`
- Plasma arc furnace: `plasma_arc_furnace`
- Arc furnace: `arc_furnace`
- Sifting machine: `sifter`
- Precision laser engraver: `laser_engraver`
- Mixing machine: `mixer`
- Autoclave: `autoclave`
- Electromagnetic separator: `electromagnetic_separator`
- Polarizer: `polarizer`
- Chemi bath: `chemical_bath`
- Brewing machine: `brewer`
- Fluid heater: `fluid_heater`
- Distillery: `distillery`
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

**Not yet implemented:**

- Uu-mater producer: `uuamplifier`
- Thermal generator: `thermal_generator`
- Semi-fluid generator: `semi_fluid_generator`
- Fusion reactor: `fusion_reactor`

**Primitive Blast Furnace** *uses different syntax from normal recipes.* For example:

```java
import mods.gregtech.recipe.PBFRecipeBuilder;

//Primitive Blast Furnace
PBFRecipeBuilder.start()
    .input(<ore:ingotCompressedWroughtIron> * 1)
    .output(<ore:ingotSteel>.firstItem * 1)
    .duration(250)
    .fuelAmount(2)
    .buildAndRegister();

//Remove recipes from PBF
import mods.gregtech.recipe.RecipeMaps;

for recipe in RecipeMaps.getPrimitiveBlastFurnaceRecipes() {
    recipe.remove();
```

## Builder information

After getting a instance of `RecipeMap`, you can define recipes by using their builder.

Builder method calling:

```java
recipeMap.recipeBuilder()
```

It is a bit like `Stream<T>` in Java, with fully functionally to control your recipe's behaviour.

Example for EBF:

```java
// Electric Blast Furnace
val blast_furnace = mods.gregtech.recipe.RecipeMap.getByName("blast_furnace");
blast_furnace.recipeBuilder()
    .inputs(<ore:ingotCompressedWroughtIron> * 1)
    .fluidInputs([<liquid:oxygen> * 500])
    .outputs(<ore:ingotSteel>.firstItem * 1)
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