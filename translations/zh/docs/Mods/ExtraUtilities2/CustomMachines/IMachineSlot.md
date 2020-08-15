# IMachineSlot

机器栏位是一个接受物品或液体的栏位。  
你在使用 [IMachineRegistration](/Mods/ExtraUtilities2/CustomMachines/IMachineRegistry) 稍后创建机器时需要他们。

## 导入相关包

如果你想要缩短方法调用或遇到任何问题，你可能需要 [导入包](/AdvancedFunctions/Import)  
您可以使用

```zenscript
导入 exautilities2.微弱.IMachineSlot;
```

## 创建一个新的 IMachineSlot

IMachineSlot软件包提供了创建新IMachineSlot对象的方法：

```zenscript
extrautilities2.Tweeper.IMachinet.newItemStackSlot(name);
extrautilities2.Tweeper.IMachineSlot.newItemStackSlot(name, isOptional);
extrautilities2.Tweeper.IMachinet.newItemStackSlot(name, stackCapacity);
extrautilities2.Tweeker.IMachineSlot.newItemStackSlot(name, isOpal, stackCapacity);
extrautilities2.Tiner.IMachineSlot. ewItemStackSlot(名字，颜色，非可选，背景，stackCapacity)；


newFluidSlot(名称)，
newFluidSlot(名字，stackCapacity)；
newFluidSlot(名字，stackCapacity，filterLiquidStack)；
newFluidSlot(名字，stackCapacity，isOpal, filterLiquidStack)；
newFluidSlot(名字，stackCapacity，彩色，isopic，filterLiquidStack)；
```

所有这些方法都会返回作为IMachineSlot对象的新槽。

这些参数是：

| 名称                | 类型                                            |
| ----------------- | --------------------------------------------- |
| name（名称）          | string                                        |
| 是可选的              | 布尔值                                           |
| 堆栈能力              | 整数                                            |
| 颜色                | 整数                                            |
| 背景纹理              | 字符串                                           |
| filterLiquidStack | [ILiquidStack](/Vanilla/Liquids/ILiquidStack) |

参数做什么：

- `name`: The slot name. 用于稍后配方。 请确保机器没有具有相同名称的两个槽位。
- `是可选的`: 是否必须填充此栏位才能启动配方检查。
- `堆栈能力`: 在这个槽位里可以放多少个物品/毫巴克？
- `颜色`: 插槽将有什么颜色？
- `背景纹理`: 可以在此处添加此槽背景的自定义纹理路径。
- `filterLiquidStack`: 如果您提供了 [ILiquidStack](/Vanilla/Liquids/ILiquidStack) 对象，那么只允许这个液体进入槽位。

## 获取器

您也可以从IMachineSlot获取基本信息。  
请不要期望这些getter们在创建插槽时返回与你设置的位置不同的魔法。

| 名称   | 类型  |
| ---- | --- |
| 名称   | 字符串 |
| 可选的  | 布尔值 |
| 堆栈能力 | 整数  |