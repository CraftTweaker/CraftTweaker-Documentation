# ブラスト炉

Blast Furnaceパッケージは、没入型エンジニアリングブラスト炉からレシピ/燃料を追加/削除するために使用できます。

## パッケージの呼び出し

`mods.immysiveengineering.BlastFurnace` を使って BlastFurnace パッケージを呼び出すことができます。

## レシピを追加:

| 必須   | タイプ   | データタイプ                                              |
| ---- | ----- | --------------------------------------------------- |
| 必須   | 出力    | [IItemstack](/Vanilla/Items/IItemStack/)            |
| 必須   | Input | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |
| 必須   | 時刻    | 整数                                                  |
| 省略可能 | Slag  | [IItemstack](/Vanilla/Items/IItemStack/)            |

### 例

```zenscript
//Example:
mods.immersiveengineering.BlastFurnace.addRecipe(IItemStack output, IIngredient input, int time, @Optional IItemStack slag);
mods.immersiveengineering.BlastFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, 2000);
mods.immersiveengineering.BlastFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, 2000, <minecraft:dirt>);
```

## レシピを削除

| タイプ | データタイプ                                   |
| --- | ---------------------------------------- |
| 出力  | [IItemstack](/Vanilla/Items/IItemStack/) |

### 例

```zenscript
//例:
mods.immersiveengineering.BlastFurnace.removeRecipe(IItemStack output);
mods.immersiveengineering.BlastFurnace.removeRecipe(<minecraft:diamond>;
```

## 燃料を追加

| 必須 | タイプ   | データタイプ                                              |
| -- | ----- | --------------------------------------------------- |
| 必須 | Input | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |
| 必須 | 時刻    | 整数                                                  |

### 例

```zenscript
//例:
mods.immersiveengineering.BlastFurnace.addFuel(IIngredient input, int time);
mods.immysiveengineering.BlastFurnace.addFuel(<ore:plankWood>, 2000);
```

## 燃料を取り除く

| 必須 | タイプ | データタイプ                                   |
| -- | --- | ---------------------------------------- |
| 必須 | 出力  | [IItemstack](/Vanilla/Items/IItemStack/) |

### 例

```zenscript
//例:
mods.immersiveengineering.BlastFurnace.removeFuel(IItemStack output);
mods.immersiveengineering.BlastFurnace.removeFuel(<minecraft:planks>);
```