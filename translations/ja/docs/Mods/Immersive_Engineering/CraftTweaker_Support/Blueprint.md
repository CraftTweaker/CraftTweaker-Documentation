# 建設計画

設計図作成パッケージは、Immersive Engineering Blueprint作成のレシピを追加/削除するために使用できます。

## PSA

[カテゴリ](/Mods/Immersive_Engineering/Variables/Categories/) 文字列は特別です。 確立されたカテゴリを持っていない入力された文字列に対して、新しいカテゴリと新しいブループリントが作成されます。 つまり、「食品レシピ」を提供する「バナナパンケーキ」というブループリントカテゴリーを追加できます。 最初のエントリが見つかると、生成されたカテゴリの下に、そのカテゴリ文字列に関するすべてのレシピが生成されます。

## パッケージの呼び出し

`mods.immersiveengineering.Blueprint` を使って、ブループリントパッケージを呼び出すことができます。

## レシピを追加

| 必須 | タイプ    | データタイプ                                                           |
| -- | ------ | ---------------------------------------------------------------- |
| 必須 | カテゴリ   | String [カテゴリ](/Mods/Immersive_Engineering/Variables/Categories/) |
| 必須 | 出力     | [IItemstack](/Vanilla/Items/IItemStack/)                         |
| 必須 | Inputs | [IIngredient](/Vanilla/Variable_Types/IIngredient/)              |

### 例

```zenscript
//Example:
mods.immersiveengineering.Blueprint.addRecipe(String category, IItemStack output, IIngredient[] inputs);

//Using an existing Category String
mods.immersiveengineering.Blueprint.addRecipe("components", <minecraft:diamond>, [<ore:logWood>, <minecraft:dirt>]);

//Using a new Category String (This generates a new Blueprint item)
mods.immersiveengineering.Blueprint.addRecipe("Banana Pancakes", <minecraft:diamond>, [<ore:logWood>, <minecraft:dirt>]);
```

## レシピを削除

| タイプ | データタイプ                                   |
| --- | ---------------------------------------- |
| 出力  | [IItemstack](/Vanilla/Items/IItemStack/) |

### 例

```zenscript
//例:
mods.immersiveengineering.Blueprint.removeRecipe(IItemStack output);
mods.immersiveengineering.Blueprint.removeRecipe(<minecraft:diamond>);
```