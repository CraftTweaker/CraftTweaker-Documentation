# Multiservo Press / Press

## Methods

#### Add Recipe

The following script will add recipes that will:

1) Output Dirt 120% of the time by Pressing Grass, consuming 500 RF. 2) Output a Cake 120% of the time by Pressing Dirt with a Numismatic Die, consuming 500 RF. 3) Output 250 mB of Resin by Pressing a Diamond, consuming 500 RF. 4) Output a Lily Pad 120% of the time and 2500 mB of Latex by Pressing Dirt, consuming 500 RF.

```zenscript
// <recipetype:thermal:press>.addRecipe(String name, MCWeightedItemStack[] outputs, IFluidStack outputFluid, IIngredient[] ingredients, int energy);
<recipetype:thermal:press>.addRecipe("press_test", [<item:minecraft:dirt> % 120], <fluid:minecraft:empty>, [<item:minecraft:grass>], 500);
<recipetype:thermal:press>.addRecipe("press_test_with_secondary", [<item:minecraft:cake> % 120], <fluid:minecraft:empty>, [<item:minecraft:dirt>, <item:thermal:press_coin_die>], 500);
<recipetype:thermal:press>.addRecipe("press_test_with_fluid", [], <fluid:thermal:resin> * 250, [<item:minecraft:diamond>], 500);
<recipetype:thermal:press>.addRecipe("press_test_with_fluid_and_item", [<item:minecraft:lily_pad> % 120], <fluid:thermal:latex> * 200, [<item:minecraft:dirt>], 500);
```

### Press Dies

Thermal Expansion has several Press dies that are used in recipes (like the second example) which don't get consumed, they are the following:

```
press_coin_die
press_gear_die
press_packing_2x2_die
press_packing_3x3_die
press_unpacking_die
```

#### Remove Recipes

The following script will remove recipes that will:

1) Output Nickel Coins. 2) Output Honey.

```zenscript
// <recipetype:thermal:press>.removeRecipe(IItemStack[] itemOutputs, IFluidStack[] fluidOutputs);
<recipetype:thermal:press>.removeRecipe(<item:thermal:nickel_coin>);
<recipetype:thermal:centrifuge>.removeRecipe([], [<fluid:cofh_core:honey>]);
```
