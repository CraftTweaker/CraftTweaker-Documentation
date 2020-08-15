# パワードThingies :: Incinerator

### インポート中

```zenscript
import mods.poweredthingies.Tweaker.incineratorTweaker as it;
```

### キーによるレシピの削除、キーのリスト化、クリア

```zenscript
it().logKeys()
it().removeRecipe('minecraft:log') // <logKeys> の有効なキーの出力をチェック
it().clear()
```

### レシピを追加中

##### 署名

```zenscript
addRecipe(input: IItemStack, power : Long, output: Array<WeightedItemStack>)
```

`電力` は、入力項目が生成する電力単位(RF、T、または FE)の合計数を表します。

##### 例

```zenscript
it().addRecipe(<minecraft:bucket>, 3600, [<minecraft:iron_ingot> % 15]);
```

### メモ

これらのアクションはすべてキャッシュされ、このマシンのデフォルトレジストリがすべてのレシピを登録し終えた後に実行されます (カスタム json からのものを含む)。