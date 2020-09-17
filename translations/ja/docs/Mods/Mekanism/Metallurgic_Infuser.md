# 冶金学的Infuser

Mekanism 9.7.0 の時点で、コマンド `/ct mekrecipes metallurgic Infuser を通じて、Metallurgic Infuser のすべてのレシピ文字列を表示できるようになりました。`

## 注入タイプ文字列

レシピの追加と削除には、「注入型」文字列が必要です。 Mekanismのデフォルトの例は次のとおりです。

| インフューズタイプ  | 作成者      |
| ---------- | -------- |
| "CARBON"   | Mekanism |
| TIN（ティント）  | Mekanism |
| "ダイアモンド"   | Mekanism |
| "REDSTONE" | Mekanism |
| "FUNGI"    | Mekanism |
| "BIO"      | Mekanism |
| "OBSIDIAN" | Mekanism |

他のMODが新しい輸液タイプを登録した場合。 このタイプは、登録されたタイプの名前が正確に指定されている限りCraftTweakerでも使用できます。 注意: CraftTweakerで *新しい* 注入 **タイプの** を定義することは *不可能* です

Mekanism 9.7.0 以降、(他のmodのものを含む) コマンド `/ct infuseTypes` により、登録済みのすべての輸液を表示できるようになりました。

## 加算

```zenscript
mods.mekanism.infuser.addRecipe(String infusionType, int infusionConted, IIngredient inputStack, IItemStack outputStack);

mods.mekanism.infuser.addRecipe("OBSIDIAN", 20, <minecraft:coal_block>, <minecraft:obsidian>);
mods.mekanism.infuser.addRecipe("DIAMOND", 80, <minecraft:glowstone>, <minecraft:nether_star>);
```

Mekanism9.7.0では、IIngredientsをIItemStackの代わりにinputStackとして使用することができます。

注意: 現在、これらはすべて、ZenScriptで行うのではなく、Javaのさまざまな可能性をループしながら追加しています。 現在、機械自体に複合成分や鉱石辞書をサポートする構築はありません。

## 削除

```zenscript
mods.mekanism.infuser.removeRecipe(IIngredient outputStack, @Optional IIngredient inputStack, @Optional String infusionType);

mods.mekanism.infuser.removeRecipe(<mekanism:enrichedalloy>, <minecraft:iron_ingot>, "REDSTONE");
mods.mekanism.infuser.removeRecipe(<minecraft:mycelium>);
```

input パラメータを指定すると、その入力を使用する特定のレシピのみが削除されます。 入力パラメータを省略すると、指定した出力を生成するすべてのレシピが削除されます。

## すべてのレシピを削除する

Mekanism 9.7.0 以降、すべてのMetallurgic Infuserレシピを削除できるようになりました。 （CraftTweaker経由で追加されたレシピは除外されます）

```zenscript
mods.mekanism.infuser.removeAllRecipes();
```