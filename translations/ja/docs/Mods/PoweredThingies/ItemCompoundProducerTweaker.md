# パワードThingies :: アイテムコンパウンドプロデューサー

### インポート中

```zenscript
import mods.poweredthingies.Tweaker.itemCompoundProducerTweaker as icp;
```

### キーによるレシピの削除、キーのリスト化、クリア

```zenscript
icp().logKeys()
icp().removeRecipe('minecraft:mossy_cobblestone') // <logKeys> 有効なキーの出力をチェック 
icp().clear()
```

### レシピを追加中

##### 署名

```zenscript
addRecipe(inputStack: IItemStack, inputFluid: ILiquidStack, result: IItemStack)
```

##### 例

```zenscript
icp().addRecipe(<minecraft:cobblestone>, <liquid:water> * 125, <minecraft:mossy_cobblestone>);
```

### メモ

これらのアクションはすべてキャッシュされ、このマシンのデフォルトレジストリがすべてのレシピを登録し終えた後に実行されます (カスタム json からのものを含む)。