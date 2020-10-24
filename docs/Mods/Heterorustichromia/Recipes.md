# Recipes
**Note: All `result[]` parameters are actually `IAny[]`. The supported values of `result[]` are `IItemStack`, `[WeightedItemStack](/Vanilla/Items/WeightedItemStack/)` and `[IBlockstate](/Vanilla/Blocks/IBlockState/)` which is placed at the output.

## Quern

### Importing the Package
```zenscript
import mods.rustichromia.Quern;
```

### Adding Recipes
```zenscript
mods.rustichromia.Quern.add(string id, IIngredient[] inputs, result[] outputs, double minPower, double maxPower, double time);
```

### Removing Recipes
```zenscript
mods.rustichromia.Quern.remove(string id);
mods.rustichromia.Quern.removeAll();
```

## Gin

### Importing the Package
```zenscript
import mods.rustichromia.Gin;
```

### Adding Recipes
**Note: The internal buffer will only be ejected if the Gin is turned off (no power input).**
```zenscript
mods.rustichromia.Gin.add(string id, IIngredient[] inputs, result[] internal, result[] external, double minPower, double maxPower, double time);
```

### Removing Recipes
```zenscript
mods.rustichromia.Gin.remove(string id);
mods.rustichromia.Gin.removeAll();
```

## Assembler

### Importing the Package
```zenscript
import mods.rustichromia.Assembler;
```

### Adding Recipes
**Note: Tier 1 has 2 input slots. Tier 2 has 4 input slots. Tier 3 has 6 input slots.**
```zenscript
mods.rustichromia.Assembler.add(string id, int tier, IIngredient[] inputs, result[] outputs, double minPower, double maxPower, double time);
```

### Removing Recipes
```zenscript
mods.rustichromia.Assembler.remove(string id);
mods.rustichromia.Assembler.removeAll();
```