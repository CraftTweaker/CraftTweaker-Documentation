# Natural Altar

## Package
```zenscript
mods.naturesaura.Altar
```

## Методы
- **String Name**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient) input** The altars input.
- **[IItemStack](/Vanilla/Items/IItemStack) output** The altars output.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient) catalyst** The catalyst block that is placed on one of the four corner blocks, can be null
- **int aura** The amount of Aura required for the completion of the recipe
- **int time** The time processes take in ticks

## Сложение

```zenscript
mods.naturesaura.Altar.addRecipe(String name, IIngredient input, IItemStack output, IIngredient catalyst, int aura, int time)
```

## Removal

```zenscript
mods.naturesaura.Altar.removeRecipe(IItemStack output)
```