# パワードThingies :: コンパウンドメーカー

### インポート中

```zenscript
import mods.poweredthingies.Tweaker.compoundTweaker as ct;
```

### キーによるレシピの削除、キーのリスト化、クリア

```zenscript
ct().logKeys()
ct().removeRecipe('minecraft:stone') // <logKeys> 出力で有効なキーがないか確認する
ct().clear()
```

### レシピを追加中

##### 署名

```zenscript
addRecipe(output: IItemStack, left: ILiquidStack?, top: Array<IItemStack>?, right: ILiquidStack?, bottom: Array<IItemStack>?)
```

##### 例

```zenscript
ct().addRecipe(<minecraft:obsidian>, <liquid:lava> * 250, [<minecraft:cobblestone>, <minecraft:cobblestone>], null, [<minecraft:cobblestone>, <minecraft:cobblestone>]);
```

### メモ

これらのアクションはすべてキャッシュされ、このマシンのデフォルトレジストリがすべてのレシピを登録し終えた後に実行されます (カスタム json からのものを含む)。