# Sawmill

## Package

```java
import mods.ic2.Sawmill;
```

## Methods

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input**

### Addition

```zenscript
mods.ic2.Sawmill.addRecipe(IItemStack output, IIngredient input);

mods.ic2.Sawmill.addRecipe(<minecraft:diamond_block>, <minecraft:dirt> * 64);
```

### Removal

To remove an already existing recipe, simply disable the corresponding recipe in `config/ic2/ic2machineRecipes.json`.