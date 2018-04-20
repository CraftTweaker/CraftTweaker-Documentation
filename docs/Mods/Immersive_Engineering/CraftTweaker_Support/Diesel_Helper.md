# 柴油助手
柴油助手相关包可以被用于改变沉浸工程的燃料。

## 导入相关包
使用`mods.immersiveengineering.DieselHandler`以导入柴油助手相关包。

## 添加燃料

|是否必要  |类型                  |数据类型                                          										|
|----------|---------------------|------------------------------------------------------------------------------------------|
|必要      |Output               |[Fluidstack（流体堆）](/Vanilla/Liquids/ILiquidStack)   											|
|必要      |Input                |Integer      																				|

### 例子
```JAVA
//例:
mods.immersiveengineering.DieselHandler.addFuel(ILiquidStack fuel, int time);

mods.immersiveengineering.DieselHandler.addFuel(<liquid:water>, 2000);
```


## 移除燃料

|是否必要  |类型                  |数据类型                                         										|
|----------|---------------------|------------------------------------------------------------------------------------------|
|必要     |Output               |[Fluidstack（流体堆）](/Vanilla/Liquids/ILiquidStack)  												|

### 例子
```JAVA
//例:
mods.immersiveengineering.DieselHandler.removeFuel(ILiquidStack fuel);

mods.immersiveengineering.DieselHandler.removeFuel(<liquid:water>);
```



## 添加采矿机械钻燃料

|是否必要   |类型                 |数据类型                                          										|
|----------|---------------------|------------------------------------------------------------------------------------------|
|必要      |Output               |[Fluidstack（流体堆）](/Vanilla/Liquids/ILiquidStack)  												|

### 例子
```JAVA
//例:
mods.immersiveengineering.DieselHandler.addDrillFuel(ILiquidStack fuel);

mods.immersiveengineering.DieselHandler.addDrillFuel(<liquid:water>);
```


## 移除采矿机械钻燃料

|是否必要  |类型                 |数据类型                                          										|
|----------|---------------------|------------------------------------------------------------------------------------------|
|Required  |Output               |[Fluidstack（流体堆）](/Vanilla/Liquids/ILiquidStack)  												|

### 例子
```JAVA
//例:
mods.immersiveengineering.DieselHandler.removeDrillFuel(ILiquidStack fuel);

mods.immersiveengineering.DieselHandler.removeDrillFuel(<liquid:water>);
```
