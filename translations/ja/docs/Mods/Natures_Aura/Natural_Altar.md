# 自然のアルタ

## パッケージ
```zenscript
mods.naturesaura.Altarアルタ
```

## メソッド
- **文字列名**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient) input** 祭壇の入力。
- **[IItemStack](/Vanilla/Items/IItemStack) 出力** 祭壇の出力。
- **[IIngredient](/Vanilla/Variable_Types/IIngredient) 触媒** 4つのコーナーブロックのいずれかに配置される触媒ブロックは、null にすることができます
- **int aura** レシピの完成に必要なオーラの量
- **int time** プロセスに要するティック数

## 加算

```zenscript
mods.naturesaura.AnimalSpawnermods.naturesaura.Altar.addRecipe(String name, IIngredient input, IItemStack output, IIngredient catalyst, int aura, int time)
```

## 削除

```zenscript
mods.naturesaura.AnimalSpawnermods.naturesaura.Altar.removeRecipe(IItemStack output)
```