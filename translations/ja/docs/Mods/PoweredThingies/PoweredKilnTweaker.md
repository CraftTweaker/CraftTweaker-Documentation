# Powered Thingies :: Powered Kiln

### インポート中

```zenscript
import mods.poweredthingies.Tweaker.poweredKilnTweaker as pkt;
```

### キーによるレシピの削除、キーのリスト化、クリア

```zenscript
pkt().logKeys()
pkt().removeRecipe('minecraft:planks') // <logKeys> の有効なキーの出力をチェック
pkt().clear()
```

### レシピを追加中

##### 署名

```zenscript
addRecipe(input: IItemStack, output: IItemStack)
```

##### 例

```zenscript
pkt().addRecipe(<minecraft:bucket>, <minecraft:iron_ingot>);
```

### メモ

これらのアクションはすべてキャッシュされ、このマシンのデフォルトレジストリがすべてのレシピを登録し終えた後に実行されます (カスタム json からのものを含む)。