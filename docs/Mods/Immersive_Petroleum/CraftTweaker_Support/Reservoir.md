# 油藏

## 注册油藏

|类型                      |数据类型                                  |
|-------------------------|-------------------------------------------|
|Name Identifier（名称）   |字符串                                     |
|Fluid（流体）            |[Fluidstack（流体堆）](/Vanilla/Liquids/ILiquidStack)|
|Minimum Size（最大体积）  |整数                                    |
|Maximum Size（最小体积）  |整数                                    |
|Replenish Rate（更新速率）|整数                                    |
|Weight（权重）            |整数                                    |

### 权重
权重是一个区块包含指定油藏的加权概率。
权重概率是由权重除以总数计算的。

所以如果5种油藏的权值分别如下:
5, 5, 6, 8, 10

对应每一个油藏的加权概率就是:
```
5  in 34
5  in 34
6  in 34
8  in 34
10 in 34
```


### 代码示例:
```JAVA
mods.immersivepetroleum.Reservoir.registerReservoir(String name, ILiquidStack fluid, int minSize, int maxSize, int replenishRate, int weight);
mods.immersivepetroleum.Reservoir.registerReservoir("WaterTest", <liquid:water>, 48000, 64000, 200, 5);
```
