# 合成配方

ICraftingRecipe是Zenscript所看到的工作台配方。


## 导入相关包
可能需要[导入](/AdvancedFunctions/Import)相关包以避免错误。 
`import crafttweaker.recipes.ICraftingRecipe`

## ZenMethods/Getters

### Get Ingredients
Either returns an [IIngredient](/Vanilla/Variable_Types/IIngredient)[] or an [IIngredient](/Vanilla/Variable_Types/IIngredient)[][]
```
rec.ingredients1D
rec.ingredients2D
```

### Get standart output

Returns the ouptut as [IItemStack](/Vanilla/Items/IItemStack). Careful, can be null!

```
rec.output
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
