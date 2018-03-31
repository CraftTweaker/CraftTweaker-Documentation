# ICraftingRecipe

An ICraftingRecipe is a crafting table recipe the way ZS sees it.  


## Importing the class
It might be required to [import](/AdvancedFunctions/Import) the class to avoid errors.  
`import crafttweaker.recipes.ICraftingRecipe`

## ZenMethods/Getters

### Check if a inventory contains the recipe

If the [ICraftingInventory](ICraftingInventory) contains the recipe, returns `true`.
```
rec.matches(inventory);

rec in inventory;
rec has inventory;
```

### Check the result of an Inventory craft

Returns the item that crafting the items in the [ICraftingInventory](ICraftingInventory) would yield.

```
rec.getCraftingResult(inventory);
```


### Check for conditions
Each of these returns a boolean
```
rec.hasTransformers;
rec.hasRecipeAction;
rec.hasRecipeFunction;
rec.hidden;
rec.shaped;
```

### ApplyTransformers

Parameter Types are [ICraftingInventory](ICraftingInventory) and [IPlayer](/Vanilla/Players/IPlayer).
```
rec.applyTransformers(ICraftingInventory inventory, IPlayer byPlayer);
```

### resourceDomain

Basically, the modid of the mod that added the recipe.
```
rec.resourceDomain;
rec.fullResourceDomain;
```

### Ingredients

Returns the ingredients list as [IIngredient](/Vanilla/Variable_Types/IIngredient)\[] or [IIngredient](/Vanilla/Variable_Types/IIngredient)\[]\[] respectively.
```
rec.ingredients1D;
rec.ingredients2D;
```

### Output

The [IItemStack](/Vanilla/Variable_Types/IItemStack) output of the recipe.
```
rec.output;
```

### To String
```
rec.commandString;
rec.toCommandString();

rec.name;
rec.getName();
```
