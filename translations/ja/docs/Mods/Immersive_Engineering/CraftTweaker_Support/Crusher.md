# クラッシャー

クラッシャーパッケージは、没入型エンジニアリングクラッシャーにレシピを追加/削除するために使用できます。

## パッケージの呼び出し

`mods.immysiveengineering.Crusher` を使ってクラッシャーパッケージを呼び出すことができます。

## レシピを追加

| 必須   | タイプ     | データタイプ                                              |
| ---- | ------- | --------------------------------------------------- |
| 必須   | 出力      | [IItemStack](/Vanilla/Items/IItemStack/)            |
| 必須   | Input   | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |
| 必須   | エネルギー   | int                                                 |
| 省略可能 | セカンダリ出力 | [IItemStack](/Vanilla/Items/IItemStack/)            |
| 省略可能 | 二次チャンス  | double                                              |

### 例

```zenscript
//Example:
mods.immersiveengineering.Crusher.addRecipe(IItemStack output, IIngredient input, int energy, @Optional IItemStack secondaryOutput, @Optional double secondaryChance);

mods.immersiveengineering.Crusher.addRecipe(<minecraft:diamond>, <ore:logWood>, 2048);
mods.immersiveengineering.Crusher.addRecipe(<minecraft:diamond>, <ore:logWood>, 2048, <minecraft:dirt>);
mods.immersiveengineering.Crusher.addRecipe(<minecraft:diamond>, <ore:logWood>, 2048, <minecraft:dirt>, 0.5);
```

## 出力によるレシピの削除

| タイプ | データタイプ                                   |
| --- | ---------------------------------------- |
| 出力  | [IItemstack](/Vanilla/Items/IItemStack/) |

### 例

```zenscript
//例:
mods.immersiveengineering.Crusher.removeRecipe(IItemstack output);

mods.immersiveengineering.Crusher.removeRecipe(<minecraft:diamond>);
```

## 入力によるレシピの削除

| タイプ   | データタイプ                                   |
| ----- | ---------------------------------------- |
| Input | [IItemstack](/Vanilla/Items/IItemStack/) |

### 例

```zenscript
//例:
mods.immersiveengineering.Crusher.removeRecipesForInput(IItemstack input);

mods.immersiveengineering.Crusher.removeRecipesForInput(<minecraft:diamond>);
```