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


### Check for transformers
Returns a boolean
```
rec.transformers;
rec.hasTransformers();
```

### ApplyTransformers

Parameter Types are [ICraftingInventory](ICraftingInventory) and [IPlayer](/Vanilla/Players/IPlayer).
```
rec.applyTransformers(ICraftingInventory inventory, IPlayer byPlayer);
```

### To String
```
rec.commandString;
rec.toCommandString();

rec.name;
rec.getName();
```