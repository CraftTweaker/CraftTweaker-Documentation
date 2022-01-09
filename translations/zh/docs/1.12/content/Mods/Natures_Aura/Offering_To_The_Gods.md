# Offering to the Gods

## 所属包
```zenscript
mods.naturesaura.Offering
```

## 使用方式
- **String Name**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient) input** The offering
- **int ininputAmount** The amount of items required for the input. Note that this means that the amount of the input variable is ignored
- **[IIngredient](/Vanilla/Variable_Types/IIngredient) startItem** the item required to start the offering
- **[IItemStack](/Vanilla/Items/IItemStack) output** The gift of the Offering

## 添加配方

```zenscript
mods.naturesaura.Offering.addRecipe(String name, IIngredient input, int inputAmount, IIngredient startItem, IItemStack output)
```

## Removal

```zenscript
mods.naturesaura.Offering.removeRecipe(IItemStack output)
```