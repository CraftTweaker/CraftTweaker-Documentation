# パワードThingies :: Fluid Burner :: Coolant

### インポート中

```zenscript
import mods.poweredthingies.Tweaker.fluidBurnerCoolantTweaker as coolant;
```

### キーによるレシピの削除、キーのリスト化、クリア

```zenscript
coolant().logKeys()
coolant().removeRecipe('teslathingies:fluid_tf-molten_tesla') // <logKeys> の出力で有効なキー
coolant().clear()
```

### レシピを追加中

##### 署名

```zenscript
addCoolant(fluid: ILiquidStack, timeMultiplier: Float)
```

`timeMultiplier` は、燃料が燃焼するティック数を増減するために使用される値です。

##### 例

```zenscript
coolant().addCoolant(<liquid:tf-sewage> * 50, 1.1);
```

### メモ

これらのアクションはすべてキャッシュされ、このマシンのデフォルトレジストリがすべてのレシピを登録し終えた後に実行されます (カスタム json からのものを含む)。