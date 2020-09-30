# Ritual of the Forest

## Package
```zenscript
mods.naturesaura.TreeRitual
```

## Методы
- **String Name**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient) saplingType** The item representation of the sapling that needs to be placed and grown into a tree
- **[IItemStack](/Vanilla/Items/IItemStack) output** The rituals result
- **init time** The time the process takes in ticks
- **[IIngredient[]](/Vanilla/Variable_Types/IIngredient) items** The required items for the ritual

## Сложение

```zenscript
mods.naturesaura.TreeRitual.addRecipe(String name, IIngredient saplingType, IItemStack output, int time, IIngredient[] items)
```

## Removal

```zenscript
mods.naturesaura.TreeRitual.removeRecipe(IItemStack output)
```