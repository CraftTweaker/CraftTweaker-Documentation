# 柴油助手

柴油处理包可以用来改变IE燃料。

## 调用包

您可以使用 `mods.immersiveengineering.DieselHandler` 来调用 DieselHandler 包。

## 添加燃料

| 必填 | 类型 | 数据类型                                         |
| -- | -- | -------------------------------------------- |
| 必要 | 输出 | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| 必要 | 输入 | 整型                                           |

### 例子

```zenscript
//示例：
mods.immersiveengineering.DieselHandler.addFuel(ILiquidStack fuel, int time)；

mods.immersiveengineering.DieselHandler.addFuel(<liquid:water>, 2000年)；
```

## 移除燃料

| 必填 | 类型 | 数据类型                                         |
| -- | -- | -------------------------------------------- |
| 必填 | 输出 | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### 例子

```zenscript
//示例：
mods.immersiveengineering.DieselHandler.removeFuel(ILiquidStack 燃料)；

mods.immersiveengineering.DieselHandler.removeFuel(<liquid:water>)；
```

## 添加钻机燃料

| 必填 | 类型 | 数据类型                                         |
| -- | -- | -------------------------------------------- |
| 必填 | 输出 | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### 例子

```zenscript
//示例：
mods.immersiveengineering.DieselHandler.addDrillFuel(ILiquidStack 燃料)；

mods.immersiveengineering.DieselHandler.addDrillFuel(<liquid:water>)；
```

## 移除钻孔燃料

| 必填 | 类型 | 数据类型                                         |
| -- | -- | -------------------------------------------- |
| 必填 | 输出 | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### 例子

```zenscript
//示例：
mods.immersiveengineering.DieselHandler.removeDrillFuel(ILiquidStack 燃料)；

mods.immersiveengineering.DieselHandler.removeDrillFuel(<liquid:water>)；
```