# Ritual of the Forest

## 所属包
```zenscript
mods.naturesaura.TreeRitual
```

## 使用方式
- **String Name**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient) saplingType** The item representation of the sapling that needs to be placed and grown into a tree
- **[IItemStack](/Vanilla/Items/IItemStack) output** The rituals result
- **init time** The time the process takes in ticks
- **[IIngredient[]](/Vanilla/Variable_Types/IIngredient) items** The required items for the ritual

## 添加配方

```zenscript
mods.naturesaura.TreeRitual.addRecipe(String name, IIngredient saplingType, IItemStack output, int time, IIngredient[] items)
```

## Removal

```zenscript
mods.naturesaura.TreeRitual.removeRecipe(IItemStack output)
```