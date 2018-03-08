# ICraftingRecipe

An ICraftingRecipe is a crafting table recipe the way ZS sees it.  


## Importing the class
It might be required to [import](/AdvancedFunctions/Import) the class to avoid errors.  
`import crafttweaker.recipes.ICraftingRecipe`

## ZenMethods/Getters

### Get Ingredients
Either returns an [IIngredient](/Vanilla/Variable_Types/IIngredient)[] or an [IIngredient](/Vanilla/Variable_Types/IIngredient)[][]
```
rec.ingredients1D
rec.ingredients2D
```

### Check for conditions
Returns a boolean
```
rec.hasTransformers
rec.hasRecipeAction
rec.hasRecipeFunction
rec.hidden
rec.shaped
```

### To String
```
rec.commandString;
rec.toCommandString();

rec.name;
rec.getName();

rec.fullResourceDomain
rec.resourceDomain
```