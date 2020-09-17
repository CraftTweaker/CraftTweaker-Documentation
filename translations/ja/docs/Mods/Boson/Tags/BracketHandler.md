# ブラケットのハンドラー

Bracket Handler はタグを取得する唯一の方法です。

## 構文
この括弧ハンドラの構文はとても簡単に追従できます。 そして同時に、ブラケットハンドラによって返されるタグをどのような 可能性をもたらします。

```zenscript
<tag-TYPE:NAMESPACE:NAME>
```

上記のコードスニペット内で すべてのキャップのパーツは、開発者がカスタマイズ可能なビットであり、返される ターゲットを表します。

`TYPE` は、作成される [タグの種類](/Mods/Boson/Tags/TagType/) を識別する。 この型は、タグタイプを識別する ニーモニクスのいずれかでなければなりません。 有効なタグタイプの一覧については、リンク先のページを参照してください。

`NAMESPACE` は、タグの名前空間、すなわち、タグを所有する mod ID を識別します。 ほとんどの場合、名前空間は `forge` または `minecraft`のいずれかになります。 他の名前空間を使うことも可能です e. をクリックします。

`NAME` は取得すべきタグの名前を表す。

このブラケットハンドラが何を返すかについては、「Behavior」セクションを参照してください。

## 動作
CraftTweakerに存在する他のブラケットハンドラとは異なります。 この括弧ハンドラの動作は で異なり、どのローダが括弧ハンドラのスクリプトを処理しているかによって異なります。

### `タグ` ローダー
If the bracket handler is referenced in a script loaded by the [`tags` loader](/Mods/Boson/Loaders/Tags/), it will return a [`Tag`](/Mods/Boson/Tags/Tag/). これにより、タグ に含まれる要素を操作することができます。 詳細については、クラスのドキュメントを参照してください。

### `preinit` loader
If the bracket handler is referenced in a script loaded by the `preinit` loader, it will throw an exception, since tags are loaded later on in the Minecraft lifecycle, namely just before recipes are registered.

### 他のすべてのローダー
ブラケットハンドラが他のローダーによってロードされたスクリプトで参照されている場合。 デフォルトの `recipeevent` を含めると、 [`TagIngredient`](/Mods/Boson/Tags/TagIngredient/) が返されます。 タグの内容を 操作することはできません しかし、タグはレシピやその他のメソッドの呼び出しで使用され、パラメータとして [`IIngredient`](/Vanilla/Variable_Types/IIngredient/) のインスタンスを必要とします。

## 使用例

この最初の例では、 `TagIngredient` を使用して新しいレシピを追加する方法を示します。 `アイテム` タグ の種類の使用法に注意してください。

```zenscript
val tagIngredient = <tag-items:forge:ingots/iron>;
recipes.addShapelessRecipe("test", <minecraft:iron_ingot> * 3, [tagIngredient, tagIngredient]);
```

次の2番目の例は、 `ブロック` 型の `Tag` の操作を示しています:

```zenscript
#loader tags
val tag = <tag-blocks:minecraft:enderman_holdable>;
tag.add("minecraft:iron_block" as NameSpacedString);
```
