# パワードThingies :: アイテムLiqueifier

### インポート中

```zenscript
import mods.poweredthingies.Tweaker.itemLiquefierTweaker as ilt;
```

### キーによるレシピの削除、キーのリスト化、クリア

```zenscript
ilt().logKeys()
ilt().removeRecipe('liquid:fluid_lava') // <logKeys> の有効なキーの出力をチェック
ilt().clear()
```

### レシピを追加中

##### 署名

```zenscript
addRecipe(input: IItemStack, output: ILiquidStack)
```

##### 例

```zenscript
ilt().addRecipe(<minecraft:bucket>, <liquid:lava> * 125);
```

### メモ

これらのアクションはすべてキャッシュされ、このマシンのデフォルトレジストリがすべてのレシピを登録し終えた後に実行されます (カスタム json からのものを含む)。