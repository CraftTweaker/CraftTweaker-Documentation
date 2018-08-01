# RecipePrimer

A RecipePrimer Object is the actual recipe. You can get such an object from the [RecipeBuilder](/Mods/ModularMachinery/Recipes/RecipeBuilder/) and use its methods to actually give the recipe ins and outs and stuff.  

## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import mods.modularmachinery.RecipePrimer;`

## ZenMethods

Each of these methods does two things: First, it modifies the object, then it returns the object itself (as another RecipePrimer).  
This means you can either call each method on its own, or make one call where you append each pieces of code (example below).

### Setting the chance
```sml
setChance(float chance);
```

### Adding Energy and fuel requirements
```java
addEnergyPerTickInput(int perTick);
addEnergyPerTickOutput(int perTick);


//Typo? This is what the sourcecode sais, if it doesn't work try Input
addFuelItemInout(int requiredTotalBurnTime);
```

### Adding inputs
You can add [IItemStacks](/Vanilla/Items/IItemStack/), [IOreDictEntries](/Vanilla/OreDict/IOreDictEntry/) or [ILiquidStacks](/Vanilla/Liquids/ILiquidStack/) as input.

```sml
addItemInput(IItemStack stack);

addItemInput(IOreDictEntry oreDict);
addItemInput(IOreDictEntry oreDict, int amount);


addFluidInput(ILiquidStack stack);
```

### Adding outputs
You can add [IItemStacks](/Vanilla/Items/IItemStack/), [IOreDictEntries](/Vanilla/OreDict/IOreDictEntry/) or [ILiquidStacks](/Vanilla/Liquids/ILiquidStack/) as output.
```sml
addItemOutput(IItemStack stack);

addItemOutput(IOreDictEntry oreDict);
addItemOutput(IOreDictEntry oreDict, int amount);


addFluidOutput(ILiquidStack stack);
```


### Building the recipe
After you have done your changes above, you need to build the recipe so that it will actually do something.
```sml
build();
```


## Example
You can either call each method on its own, or play codegolf:
```zenscript
val reci = mods.modularmachinery.RecipeBuilder.newBuilder("recipeRegistryName", "associatedMachineRegistryName", 1000, 0);

reci.addEnergyPerTickInput(100);
reci.addItemInput(<ore:ingotIron>);
reci.addItemOutput(<minecraft:gold_ingot>);
reci.build();



val rec = mods.modularmachinery.RecipeBuilder.newBuilder("anotherRecipeRegistryName", "associatedMachineRegistryName", 1000, 0);
rec.addEnergyPerTickInput(100).addFluidInput(<liquid:water> * 1000).addFluidInput(<liquid:lava> * 1000).addItemOutput(<minecraft:obsidian> * 2).build();
```







