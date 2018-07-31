# 液体燃料 (Liquid Fuel)

液体燃料在气动工艺中的用途包括：在（高级）液体压缩机中产生气压和（可选的）在煤油灯中用作照明。
默认情况下所有在精炼厂生产的液体和任意温度高于 305K 的流体都被认为是液体燃料。

## 导入

使用 `mods.pneumaticcraft.liquidfuel` 以导入液体燃料相关包。

## 移除

以下函数会使 `fluid`（数据类型为[流体堆（ILiquidStack）](/Vanilla/Variable_Types/ILiquidStack)）无法作为液体燃料：

```
mods.pneumaticcraft.liquidfuel.removeFuel(ILiquidStack fluid);
//fluid 流体

// 实例
mods.pneumaticcraft.liquidfuel.removeFuel(<liquid:lpg>);
```

以下函数会移除*所有*注册的燃料：

```
mods.pneumaticcraft.liquidfuel.removeAllFuels();
```

## 添加

以下函数可以使流体注册为液体燃料：

```java
// 将指定的流体注册为液体燃料。 mlPerBucket 指每一桶燃料可以产生压缩空气的体积。例如在空气压缩机中，一个煤可以产生 16000mL 的压缩空气。
mods.pneumaticcraft.liquidfuel.addFuel(ILiquidStack fluid, double mlPerBucket);

// 实例：将水注册为每桶可以产生 16000mL 的压缩空气的液体燃料。
mods.pneumaticcraft.liquidfuel.addFuel(<liquid:water>, 16000);
```
