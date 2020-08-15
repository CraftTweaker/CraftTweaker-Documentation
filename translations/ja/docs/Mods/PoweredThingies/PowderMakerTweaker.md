# Powered Thingies :: Powder Maker

### インポート中

```zenscript
import mods.poweredthingies.Tweaker.powderMakerTweaker as pmt;
```

### キーによるレシピの削除、キーのリスト化、クリア

```zenscript
pmt().logKeys()
pmt().removeRecipe('minecraft:gravel') // <logKeys> の有効なキーの出力をチェック
pmt().clear()
```

### レシピを追加中

##### 署名

```zenscript
addRecipe(input: IItemStack, outputs: Array<WeightedItemStack>)
```

##### 例

```zenscript
pmt().addRecipe(<minecraft:bucket>, [<minecraft:iron_ingot> % 100, <minecraft:iron_ingot> % 12, <minecraft:iron_ingot> % 12]);
```

### メモ

これらのアクションはすべてキャッシュされ、このマシンのデフォルトレジストリがすべてのレシピを登録し終えた後に実行されます (カスタム json からのものを含む)。