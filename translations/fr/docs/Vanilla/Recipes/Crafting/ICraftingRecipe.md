# ICraftingRecipe

An ICraftingRecipe is a crafting table recipe the way ZS sees it.

## Importing the class

It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.recipes.ICraftingRecipe`

## ZenMethods/Getters

### Get Ingredients

Either returns an [IIngredient](/Vanilla/Variable_Types/IIngredient/)[] or an [IIngredient](/Vanilla/Variable_Types/IIngredient/)[][]

```zenscript
rec.ingredients1D
rec.ingredients2D
```

### Get standart output

Returns the ouptut as [IItemStack](/Vanilla/Items/IItemStack/). Careful, can be null!

```zenscript
rec.output
```

### Check for conditions

Each of these returns a boolean

```zenscript
rec.hasTransformers;
rec.hasRecipeAction;
rec.hasRecipeFunction;
rec.hidden;
rec.shaped;
```

### resourceDomain

Basically, the modid of the mod that added the recipe.

```zenscript
rec.resourceDomain;
rec.fullResourceDomain;
```

### Ingredients

Returns the ingredients list as [IIngredient](/Vanilla/Variable_Types/IIngredient/)\[] or [IIngredient](/Vanilla/Variable_Types/IIngredient/)\[]\[] respectively.

```zenscript
rec.ingredients1D;
rec.ingredients2D;
```

### Output

The [IItemStack](/Vanilla/Items/IItemStack/) output of the recipe.

```zenscript
rec.output;
```

### To String

```zenscript
rec.commandString;
rec.toCommandString();

rec.name;
rec.getName();
```