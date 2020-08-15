# Altar of Birthing

## パッケージ
```zenscript
mods.naturesaura.AnimalSpawnerAnimalSpawner
```

## メソッド
- **String Name**
- **String Entity** Name of the entitiy to spawn
- **int aura** The amount of Aura required for the completion of the recipe
- **int time** The time processes take in ticks
- **[IIngredient[]](/Vanilla/Variable_Types/IIngredient) ingredients** The inputs

## 加算

```zenscript
mods.naturesaura.AnimalSpawnermods.naturesaura.AnimalSpawner.addRecipe(String name, String entity, int aura, int time, IIngredient[] ingredients)
```

## 削除

```zenscript
mods.naturesaura.AnimalSpawnermods.naturesaura.AnimalSpawner.removeRecipe(String name)
```