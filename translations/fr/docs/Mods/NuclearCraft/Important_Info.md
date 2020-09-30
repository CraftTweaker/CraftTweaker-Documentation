# NuclearCraft

**Note:The double set of brackets in functions, `([...])` is necessary.** This is basically because all NuclearCraft CraftTweaker methods require an array of objects, be they ingredients, strings, integers or doubles.

All recipes involve five sets of information - item inputs, fluid inputs, item outputs, fluid outputs and extra info. The first four are clearly the ingredients and products involved in the recipe, and the extra info contains data such as processing time and power for machines, the base lifetime, power and heat variable of fusion combos, etc.

All parts of the recipe are simply listed in the method - the internal NuclearCraft code will deal with splitting it up into those five categories and packaging the information up into a recipe.

## Recipe Additions
Recipe Methods will specify `itemInput` for Item Inputs. <br/> Recipe Methods will specify `itemOutput` for Item Outputs. <br/> Recipe Methods will specify `fluidInput` for Fluid Inputs. <br/> Recipe Methods will specify `fluidOutput` for Fluid Outputs. <br/> Recipe Methods will specify `blockInput` for Block Inputs. <br/> Recipe Methods will specify `blockOutput` for Block Outputs. <br/> **Note: `blockInput` and `blockOutput` must be the `IItemStack`/`IIngredient` versions of blocks**

### Item Inputs
`IItemStack`: `<minecraft:gunpowder>` * 4 <br/> `IOreDictEntry`: `<ore:ingotIron>` * 2 <br/> `null`: null

### Item Outputs
`IItemStack`: `<minecraft:gunpowder>` * 4 <br/> `ChanceItemStack`: `<minecraft:diamond>` * 3, 50, 1 <br/> `IOreDictEntry`: `<ore:ingotIron>` * 2 <br/> `ChanceIOreDictEntry`: `<ore:gemDiamond>` * 5, 75 <br/> `null`: null

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

## Chance Ingredients
Item and fluid outputs can have additional info attached to them - specifically, info that can randomise the output stack size somewhat. This additional info is simply tagged onto the end of the specified ingredient. <br/>

The size of the stack produced on each process is randomly assigned from a binomial distribution specified by the chance info. The percentage and ingredient stack size play the roles of the probability and number of trials, respectively. <br/>

For ChanceFluidStacks, a 'stack difference' must also be specified, which determines the difference in size between the possible stacks (for ChanceItemStacks and ChanceOreStacks, this is effectively 1). For example, a ChanceFluidStack for an ingredient of size 500, with a stack difference of 150 and minimum stack size of 50, will produce 50, 200, 350 or 500 millibuckets of the fluid.

### ChanceItemStack
The form of a `ChanceItemStack` is `IItemStack output, int percentage, @Optional int minimumStackSize`. <br/> The chance for the `output` to be produced is `percentage`. <br/> If not specified, `minimumStackSize` is 0.

### ChanceOreDictEntry
The form of a `ChanceOreDictEntry` is `IOreDictEntry output, int percentage, @Optional int minimumStackSize`. <br/> The chance for the `output` to be produced is `percentage`. <br/> The minimum stack size for the output is `minimumStackSize`. If not specified, it defaults to 0.

### ChanceLiquidStack
The form of a `ChanceLiquidStack` is `ILiquidStack, int percentage, int stackDifference, @Optional int minimumStackSize`. <br/> The chance for the output to be produced is `percentage`. <br/> The difference between possible stack sizes is `stackDifference`. The minimum stack size for the output is `minimumStackSize`. If not specified, it defaults to 0.

- Example: ``<liquid:ethanol>` * 500, 100, 150, 50
    - The Machine will produce 50, 200, 350 or 500 millibuckets of ethanol