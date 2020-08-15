# Offering to the Gods

## パッケージ
```zenscript
mods.naturesaura.OfferingOffering
```

## メソッド
- **String Name**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient) input** The offering
- **int ininputAmount** The amount of items required for the input. Note that this means that the amount of the input variable is ignored
- **[IIngredient](/Vanilla/Variable_Types/IIngredient) startItem** the item required to start the offering
- **[IItemStack](/Vanilla/Items/IItemStack) output** The gift of the Offering

## 加算

```zenscript
mods.naturesaura.AnimalSpawnermods.naturesaura.Offering.addRecipe(String name, IIngredient input, int inputAmount, IIngredient startItem, IItemStack output)
```

## 削除

```zenscript
mods.naturesaura.AnimalSpawnermods.naturesaura.Offering.removeRecipe(IItemStack output)
```