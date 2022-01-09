# Natural Altar

## 所属包
```zenscript
mods.naturesaura.Altar
```

## 使用方式
- **String Name**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient) input** The altars input.
- **[IItemStack](/Vanilla/Items/IItemStack) output** The altars output.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient) catalyst** The catalyst block that is placed on one of the four corner blocks, can be null
- **int aura** The amount of Aura required for the completion of the recipe
- **int time** The time processes take in ticks

## 添加配方

```zenscript
mods.naturesaura.Altar.addRecipe(String name, IIngredient input, IItemStack output, IIngredient catalyst, int aura, int time)
```

## Removal

```zenscript
mods.naturesaura.Altar.removeRecipe(IItemStack output)
```