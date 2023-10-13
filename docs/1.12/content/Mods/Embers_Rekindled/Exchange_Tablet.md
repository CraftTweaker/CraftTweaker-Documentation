# Exchange Tablet

## Importing the Package
```zenscript
import mods.embers.Alchemy;
```

## Adding Recipes
**Note: The first element of `inputs` corresponds to the center of the tablet.**
**Note: `aspectRange` must be an [associative array](/AdvancedFunctions/Associative_Arrays/) with a `string aspect` as the key and an `int[] range` as the value. The [range](/AdvancedFunctions/For_Loops/) can be obtained using `start .. (end + 1)` or `start to (end + 1)`.**
```zenscript
mods.embers.Alchemy.add(IItemStack output, IIngredient[] inputs, int[][string] aspectRange);
```

## Removing Recipes
```zenscript
mods.embers.Alchemy.remove(IItemStack output);
```

## Custom Aspects
```zenscript
mods.embers.Alchemy.addAspect(string name, IItemStack item);
```
