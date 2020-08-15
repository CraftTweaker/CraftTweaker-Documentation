# パワードThingies :: 流体化合物プロデューサー

### インポート中

```zenscript
import mods.poweredthingies.Tweaker.fluidCompoundTweaker as fct;
```

### キーによるレシピの削除、キーのリスト化、クリア

```zenscript
fct().logKeys()
fct().removeRecipe('liquid:fluid_tf-molten_tesla') // <logKeys> の有効なキーの出力をチェック
fct().clear()
```

### レシピを追加中

##### 署名

```zenscript
addRecipe(output: ILiquidStack, inputA: ILiquidStack, inputB: ILiquidStack)
```

##### 例

```zenscript
fct().addRecipe(<liquid:tf-sewage> * 150, <liquid:water> * 300, <liquid:lava> * 100);
```

### メモ

これらのアクションはすべてキャッシュされ、このマシンのデフォルトレジストリがすべてのレシピを登録し終えた後に実行されます (カスタム json からのものを含む)。