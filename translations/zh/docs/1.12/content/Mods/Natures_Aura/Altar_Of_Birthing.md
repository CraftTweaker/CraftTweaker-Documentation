# Altar of Birthing

## 所属包
```zenscript
mods.naturesaura.AnimalSpawner
```

## 使用方式
- **String Name**
- **String Entity** Name of the entitiy to spawn
- **int aura** The amount of Aura required for the completion of the recipe
- **int time** The time processes take in ticks
- **[IIngredient[]](/Vanilla/Variable_Types/IIngredient) ingredients** The inputs

## 添加配方

```zenscript
mods.naturesaura.AnimalSpawner.addRecipe(String name, String entity, int aura, int time, IIngredient[] ingredients)
```

## Removal

```zenscript
mods.naturesaura.AnimalSpawner.removeRecipe(String name)
```