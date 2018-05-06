# 燃料注册

## 汽艇

### 注册汽艇燃料

|类型              |数据类型                                        |
|------------------|--------------------------------------------------|
|输入              |[Fluidstack（流体堆）](/Vanilla/Liquids/ILiquidStack)    |
|消耗速度mB/t      |整数                                          |


#### 代码示例:
```JAVA
mods.immersivepetroleum.Motorboat.registerMotorboatFuel(ILiquidStack fuelEntry, int mbPerTick);
mods.immersivepetroleum.Motorboat.registerMotorboatFuel(<liquid:water>, 5);
```



## 便携式发电机

### 注册便携式发电机燃料

|类型               |数据类型                                        |
|-------------------|-------------------------------------------------|
|输入               |[Fluidstack（流体堆）](/Vanilla/Liquids/ILiquidStack)      |
|能量产出Flux/t     |整数                                          |
|消耗速度mB/t       |整数                                          |


#### 代码示例:
```JAVA
mods.immersivepetroleum.PortableGenerator.registerPortableGenFuel(ILiquidStack fuelEntry, int fluxPerTick, int mbPerTick);
mods.immersivepetroleum.PortableGenerator.registerPortableGenFuel(<liquid:water>, 2048, 50);
```
