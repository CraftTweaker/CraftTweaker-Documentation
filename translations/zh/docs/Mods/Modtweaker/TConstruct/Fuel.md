# 燃料

`燃料` 软件包允许您添加冶炼燃料液体。

## 导入包

您可以使用 `mods.tconstruct.Fuel` 来调用合金包

## 添加燃料配方

```zenscript
//mods.tconstruct.Fuel.registerFuel(ILiquidStack fuel, int dur);
mods.tconstruct.Fuel.registerFuel(<liquid:water> * 2, 300);
```

参数：

- [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) fuel -> 液体。 金额是一次消耗的最低增量。
- 整数型变体持续时间→ 液体堆栈的消耗量为多少秒。

### 请考虑：

- [ILiquidStack的](/Vanilla/Liquids/ILiquidStack/) 数量是一次消耗的最小增量(例如冶炼厂一次只消耗2毫巴)。
- 时间长度是一个液体堆栈的数量。
- 你不能设置液体在熔炼中的温度。 使用 [ILiquidDefinitation's](/Vanilla/Liquids/ILiquidDefinition/) ZenSetter 事先更改液体温度！