# 缶詰機

## パッケージ

```zenscript
import mods.ic2.CanningMachine;
```

### エフェクトIDのリスト
* 1:空腹(ロッテン・フレッシュ)(80%)
* 2：毒（クモの目）
* 3：飢餓（鶏ガラ）（30%）
* 4: 金のリンゴ（金）
* 5: ノッチのリンゴ（リンゴ）
* 6: コーラスフルーツ

## メソッド

### エフェクトのアイテムを登録する (int id, IItemstack... inputs)


```zenscript
mods.ic2.CanningMachine.registerItemsForEffect(int id, IItemstack... inputs);    

mods.ic2.CanningMachine.registerItemsForEffect(4, <minecraft:fish>);
```

- **[IItemStack](/Vanilla/Items/IItemStack/)... 入力** 食物を得る入力が効果を発揮する。
- **int id** 指定した項目に適用するエフェクトID。 有効なエフェクトIDは次のとおりです。

### Delete Effect Id (int id, boolean deleteItems)
```zenscript    
mods.ic2.CanningMachine.deleteEffectId(int id, boolean deleteItems);

mods.ic2.CanningMachine.deleteEffectId(5, false);
```

- **int id** 塗りつぶされた缶から削除するエフェクトID。 有効なエフェクトIDについては上記を参照してください。
- **boolean deleteItems** その効果を持つアイテムをファイルされた缶からも削除するかどうか。 現在このブール値は動作しない可能性があります。

### 燃料値の登録 (int fuelValue, IItemStack input)
```zenscript
mods.ic2.CanningMachine.registerFuelValue(int fuelValue, IItemStack input);

mods.ic2.CanningMachine.registerFuelValue(10, <minecraft:diamond_block>);

mods.ic2.CanningMachine.registerFuelValue(1274, <ic2:itemmisc:102>); //Formerly has value of 2548
```

- **int fuelValue** 指定されたアイテムの燃料量。
- **[IItemStack](/Vanilla/Items/IItemStack/) input** その燃料値を登録する項目。 既存の値を持つアイテムにすることもできます。この場合、以前に指定した値が上書きされます。 注: アイテムスタックでなければなりません。鉱石は許可されていません。

### 燃料乗算器を登録 (fuelMultiplier, IItemStack input)
```zenscript
mods.ic2.CanningMachine.registerFuelMultiplier(float fuelMultiplier, IItemStack input);

mods.ic2.CanningMachine.registerFuelMultiplier(0.5f, <minecraft:diamond>);
```

- **float型のfuelMultiplier** 以前の入力値がどの程度増加するか。 例えば、1 = 100%、0.5 = 50%、0 = 0%、ect。
- **[IItemStack](/Vanilla/Items/IItemStack/) 入力** 燃料乗算器を登録する項目。 既存の乗数を持つアイテムであってもかまいません。この場合、以前に指定した乗数は上書きされます。 注: アイテムスタックでなければなりません。鉱石は許可されていません。

### アイテム燃料を削除 (IItemStack input)
```zenscript
mods.ic2.CanningMachine.deleteItemFuel(IItemStack input);

mods.ic2.CanningMachine.deleteItemFuel(<ic2:itemmisc:102>);
```

- **[IItemStack](/Vanilla/Items/IItemStack/) 入力** 燃料缶の入力から取り除かれるアイテム。

燃料缶の仕組みについては、こちら [](https://github.com/TinyModularThings/IC2Classic/wiki/Fuel-Cans) をご覧ください。

### キャンニングレシピの追加 (IItemStack 出力, IIngredient filler, IItemStack container)
```zenscript
mods.ic2.CanningMachine.addCanningRecipe(IItemStack output, IIngredient filler, IItemStack container);  

mods.ic2.CanningMachine.addCanningRecipe(<minecraft:emerald>, <minecraft:diamond>, <minecraft:bucket>);
```
- **[IItemStack](/Vanilla/Items/IItemStack/) 出力** 製品
- **[IItemStack](/Vanilla/Items/IItemStack/) コンテナ** "塗りつぶされるアイテムスタック。
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) フィラー** 容器に埋め込まれた成分。

