# NuclearCraft: Overhauled

All recipes involve five sets of information - item inputs, fluid inputs, item outputs, fluid outputs and extra info. The first four are clearly the ingredients and products involved in the recipe, and the extra info contains data such as processing time and power for machines, the base depletion time, heat gen, efficiency, criticality, and radiation level of solid fission fuels, etc.

All parts of the recipe are simply listed in the method - the internal NC code will deal with splitting it up into those five categories and packaging the information up into a recipe.


## Chance Ingredients

Item and fluid outputs can have additional info attached to them - specifically, info that can randomise the output stack size somewhat. This additional info is given using NC's 'chance ingredients'.

The size of the stack produced on each process is randomly assigned from a binomial distribution specified by the chance info. The percentage and ingredient stack size play the roles of the probability and number of trials, respectively. A minimum stack size can also be specified - without this, the minimum stack size is simply 0.

For ChanceFluidIngredients, a 'stack difference' must also be specified, which determines the difference in size between the possible stacks (for ChanceItemIngredients, this is effectively 1). For example, a ChanceFluidIngredient for an ingredient of size 500, with a stack difference of 150 and minimum stack size of 50, will produce 50, 200, 350 or 500 millibuckets of the fluid.

**Note: `ChanceItemIngredient` and `ChanceFluidIngredient` count as `IIngredient` for the purpose of recipes in NuclearCraft: Overhauled**

### ChanceItemIngredient

#### Creation

```zenscript
mods.nuclearcraft.ChanceItemIngredient.create(IIngredient ingredient, int chancePercent, @Optional int minStackSize);
```

#### Examples

```zenscript
ChanceItemIngredient.create(<minecraft:coal>*2, 25);
ChanceItemIngredient.create(<ore:dustGlowstone>*3, 60, 2);
```

#### Extra Methods

```zenscript
IIngredient getInternalIngredient();
int getChancePercent();
int getMinStackSize();
```

### ChanceFluidIngredient
These can be used anywhere where regular `ILiquidStack` is used.

#### Creation
```zenscript
mods.nuclearcraft.ChanceFluidIngredient.create(IIngredient ingredient, int chancePercent, int stackDiff, @Optional int minStackSize);
```

#### Examples
```zenscript
ChanceFluidIngredient.create(<liquid:water>*1500, 35, 300);
ChanceFluidIngredient.create(<liquid:oil>*1000, 80, 200, 400);
```

#### Extra Methods
```zenscript
IIngredient getInternalIngredient();
int getChancePercent();
int getStackDiff();
int getMinStackSize();
```

## Recipe Additions
Recipe Methods will specify `itemInput` for Item Inputs. <br/> Recipe Methods will specify `itemOutput` for Item Outputs. <br/> Recipe Methods will specify `fluidInput` for Fluid Inputs. <br/> Recipe Methods will specify `fluidOutput` for Fluid Outputs. <br/> Recipe Methods will specify `blockInput` for Block Inputs. <br/> Recipe Methods will specify `blockOutput` for Block Outputs. <br/> **Note: `blockInput` and `blockOutput` must be the `IItemStack`/`IIngredient` versions of blocks**

### Item Inputs
`IItemStack`: `<minecraft:gunpowder>` * 4 <br/> `IOreDictEntry`: `<ore:ingotIron>` * 2 <br/> `null`: null

### Item Outputs
`IItemStack`: `<minecraft:gunpowder>` * 4 <br/> `IOreDictEntry`: `<ore:ingotIron>` * 2 <br/> `ChanceItemIngredient`: `<ore:gemDiamond>` * 5, 75 <br/> `null`: null

### Fluid Inputs
`ILiquidStack`: `<liquid:lava>` * 1500 <br/> `null`: null

### Fluid Outputs
`ILiquidStack`: `<liquid:lava>` * 1500 <br/> `ChanceLiquidStack` : `<liquid:water>` * 2000, 40, 250, 500 <br/> `null`: null

### Block Inputs
`IItemStack`: `<minecraft:dirt>` * 4 <br/> `IOreDictEntry`: `<ore:blockIron>` * 2 <br/> `null`: null

### Block Outputs
`IItemStack`: `<minecraft:dirt>` * 4 <br/> `IOreDictEntry`: `<ore:blockIron>` * 2 <br/> `null`: null

## Recipe Removals
When specifying a recipe to remove, all that is required is for either all input or output ingredients to be specified. Ingredient chance data is not required. Again, the items must come first, followed by the fluids.

You may also want to remove all of a certain type of recipe - to do this, simply use the `removeAllRecipes()` method.
