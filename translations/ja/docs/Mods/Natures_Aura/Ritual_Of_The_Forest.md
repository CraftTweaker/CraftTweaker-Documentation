# 森の儀式

## パッケージ
```zenscript
mods.naturesaura.TreeRitualTreeRitual
```

## メソッド
- **文字列名**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient) 苗木タイプ** 配置し、木に成長する必要がある苗木のアイテム表現
- **[IItemStack](/Vanilla/Items/IItemStack) 出力** 儀式の結果
- **init time** プロセスがティックに要する時間
- **[IIngredient[]](/Vanilla/Variable_Types/IIngredient) item** 儀式に必要な項目

## 加算

```zenscript
mods.naturesaura.AnimalSpawnermods.naturesaura.TreeRitual.addRecipe(String name, IIngredient saplingType, IItemStack output, int time, IIngredient[] items)
```

## 削除

```zenscript
mods.naturesaura.AnimalSpawnermods.naturesaura.TreeRitual.removeRecipe(IItemStack output)
```