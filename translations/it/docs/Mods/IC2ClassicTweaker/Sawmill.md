# Sawmill

## Pacchetto

```java
import mods.ic2.Sawmill;
```

## Metodi

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input**

### Addizione

```zenscript
mods.ic2.Sawmill.addRecipe(IItemStack output, IIngredient input);

mods.ic2.Sawmill.addRecipe(<minecraft:diamond_block>, <minecraft:dirt> * 64);
```

### Rimozione

To remove an already existing recipe, simply disable the corresponding recipe in `config/ic2/ic2machineRecipes.json`.