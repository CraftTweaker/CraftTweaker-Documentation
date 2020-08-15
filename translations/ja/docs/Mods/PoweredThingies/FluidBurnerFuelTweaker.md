# パワードThingies :: Fluid Burner :: Fuel

### インポート中

```zenscript
import mods.poweredthingies.Tweaker.fluidBurnerFuelTweaker as fuel;
```

### キーによるレシピの削除、キーのリスト化、クリア

```zenscript
fuel().logKeys()
fuel().removeRecipe('liquid:fluid_lava') // <logKeys> 出力で有効なキー
fuel().clear()
```

### レシピを追加中

##### 署名

```zenscript
addFuel(fluid: ILiquidStack, ticks: Int)
```

`tick` は、指定された燃料が燃焼するティック数を表します。

##### 例

```zenscript
fuel().addFuel(<liquid:tf-sewage> * 50, 100);
```

### メモ

これらのアクションはすべてキャッシュされ、このマシンのデフォルトレジストリがすべてのレシピを登録し終えた後に実行されます (カスタム json からのものを含む)。