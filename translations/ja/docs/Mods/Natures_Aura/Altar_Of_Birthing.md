# 出産の祭壇（つろ）

## パッケージ
```zenscript
mods.naturesaura.AnimalSpawnerAnimalSpawner
```

## メソッド
- **文字列名**
- **文字列エンティティ** スポーンするエンティティの名前
- **int aura** レシピの完成に必要なオーラの量
- **int time** プロセスに要するティック数
- **[IIngredient[]](/Vanilla/Variable_Types/IIngredient) 材料** 入力

## 加算

```zenscript
mods.naturesaura.AnimalSpawnermods.naturesaura.AnimalSpawner.addRecipe(String name, String entity, int aura, int time, IIngredient[] ingredients)
```

## 削除

```zenscript
mods.naturesaura.AnimalSpawnermods.naturesaura.AnimalSpawner.removeRecipe(String name)
```