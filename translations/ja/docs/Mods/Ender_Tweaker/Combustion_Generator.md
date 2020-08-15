# 燃焼ジェネレーター

## パッケージ

`import mods.enderio.CombustionGen;`

## メソッド

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) 燃料** 追加する流体燃料。
- **int powerPerCycleRF** 塩基ラインマシンでティックあたりに生成されるエネルギー量。
- **int totalBurnTime** 燃料バケットの合計燃焼時間。
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) クーラント** 追加する流体クーラント。
- **float度CoolingPerMB** 加えられたクーラントの1mBは、すべての方法で加熱されるまで吸収することができますか?

## 燃料を追加

```zenscript
mods.enderio.CombustionGen.addFuel(ILiquidStack燃料, int powerPerCycleRF, int totalBurnTime);

mods.enderio.CombustionGen.addFuel(<liquid:lava>, 25, 40);
```

## クーラントを追加

```zenscript
mods.enderio.CombustionGen.addCoolant(ILiquidStack流体クーラント, float度CoolingPerMB);

mods.enderio.CombustionGen.addCoolant(<liquid:liquid_sunshine>, 100);
```

## 燃料を取り除く

```zenscript
mods.enderio.CombustionGen.removeFuel(ILiquidStack fuel);

mods.enderio.CombustionGen.removeFuel(<liquid:fire_water>);
```

## クーラントを削除

```zenscript
mods.enderio.AlloySmelter.removeCoolant(ILiquidStackクーラント);

mods.enderio.AlloySmelter.removeCoolant(<liquid:water>);
```