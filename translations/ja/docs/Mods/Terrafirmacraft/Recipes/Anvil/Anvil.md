# 金床

## パッケージ
```zenscript
import mods.terrafirmacraft.Anvil;金床;
```

## 追加

```zenscript
Anvil.addRecipe(レジストリ名の文字列、IIngredient入力、IItemStack出力、int minTier、String skillType、String...forgeRules);
```
- 入力を積み重ねることはできません。 アンビルはスロットごとに1つのアイテムのみ受け付けます。
- 入力は鍛造可能でなければなりません(鍛造機能をアイテムに登録するには、 [ItemRegistry](/Mods/Terrafirmacraft/ItemRegistry) を参照してください)。
- 階層は0=石、1=銅、2=ブロンズ、3=鉄製。 4 = 鋼、5 = 黒鋼、6 = 赤/青鋼。
- スキルタイプは、鍛造がどのようなスキルに貢献する必要があります。 有効なエントリは、 `general`、 `tools`、 `weapon`、 `arm`、または null です。 If the skill type is `tools`, `weapons`, or `armor` then the result item will have a skill bonus applied to it.
- レシピには1、2、3つのルールが必要です。 Rules consist of a type (`HIT`, `DRAW`, `PUNCH`, `BEND`, `UPSET`, or `SHRINK`), followed by an order (`ANY`, `NOT_LAST`, `LAST`, `SECOND_LAST`, `THIRD_LAST`), separated by an underscore. 例えば、 `HIT_ANY`, `DRAW_SECOND_LAST`, および `UPSET_NOT_LAST` は有効なルール名です。

## 削除

```zenscript
Anvil.removeRecipe(IItemStack output);
Anvil.removeRecipe(String registryName);
```