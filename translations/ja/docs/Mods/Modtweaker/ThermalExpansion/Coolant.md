# 冷却剤

Coolant マネージャーは特定のマシンに属するのではなく、他のすべてのマシンの冷却値を管理します。  
例えば、エネルギーダイナミクスは冷却値を使用します。

## パッケージをインポート

メソッド呼び出しを短くするには、 [パッケージを](/AdvancedFunctions/Import/) インポートすることができます。

```zenscript
import mods.thermalexpansion.Coolant;
```

## クーラントを追加

Use this to register a new coolant to the manager.  
CoolantRF needs to be non-negative, and the coolant factor needs to be between 1 and 100 (inclusive).  
If those ranges are not met, the coolant will not be registered!

```zenscript
//mods.thermalexpansion.Coolant.addCoolant(ILiquidStack fluid, int coolantRf, int coolantFactor);
mods.thermalexpansion.Coolant.addCoolant(<liquid:lava>, 0, 1);


//These are two of the values TE uses by default:
//mods.thermalexpansion.Coolant.addCoolant(<liquid:water>, 250000, 20);
//mods.thermalexpansion.Coolant.addCoolant(<liquid:cryotheum>, 3000000, 60);
```

## クーラントを削除

これを使用して、マネージャーから既存のクーラントを削除します。

```zenscript
//mods.thermalexpansion.Coolant.removeCoolant(ILiquidStack fluid);
mods.thermalexpansion.Coolant.removeCoolant(<liquid:water>);
```