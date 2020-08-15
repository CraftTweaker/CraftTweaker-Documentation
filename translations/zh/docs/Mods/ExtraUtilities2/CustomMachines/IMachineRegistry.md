# IMachineRegistration

您使用IMachineRegistration来注册一个新的 [IMachine](/Mods/ExtraUtilities2/CustomMachines/IMachine) 到游戏中，或者在事后检索一个先前注册的机器。

## 导入相关包

如果你想要缩短方法调用或遇到任何问题，你可能需要 [导入包](/AdvancedFunctions/Import)  
您可以使用

```zenscript
导入 exautilities2.微弱.IMachineRegistry;
```

## 创建机

有两种机器：

- 机器
- 生成器

机器消耗能源，发电机排放能源，否则其行为几乎完全相同。

```zenscript
exautilities2.Tweeper.IMachineRegistry. ReateNewMachine(
    name, 
    energyBufferSize, 
    能量传输限度， 
    输入槽， 
    输出插槽， 
    前置纹理， 
    frontTextureActive, 
    颜色
;


校外信息 弱化的 IMachineRegistry。 ReateNewGenerator(
    name,
    energyBufferSize,
    energyTransferLimit,
    inputSlots,
    输出插槽，
    前置纹理，
    frontTextureActive,
    颜色
;
```

正如你可以看到的那样，两个方法都接受相同的参数，唯一的差异是如果它们需要或生产能量。  
参数是：

| 名称                  | 类型                                                                  |
| ------------------- | ------------------------------------------------------------------- |
| name（名称）            | string                                                              |
| 能量缓存大小              | int                                                                 |
| energyTransferLimit | 整数                                                                  |
| inputSlots          | [[IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot)] |
| outputSlots         | [[IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot)] |
| frontTexture        | 字符串                                                                 |
| 前置纹理激活              | string                                                              |
| 颜色(可选)              | 整数型变量(默认为 `0xffff` (黑色))                                            |

位置接受 [IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot) 的列表。 可以通过在位置周围使用[…]来创建与Arrays相同的列表。 这两种方法都返回了表示已创建机器的 [IMachine](/Mods/ExtraUtilities2/CustomMachines/IMachine) 对象。  
记住这一点，因为你需要该对象来稍后创建配方！

## 获取现有的机

### 按名称获取机床。

您也可以使用注册表获取已经生成的机器：

```zenscript
extrautilities2.调节.IMachineRegistry.getMachine(String name);
```

此方法将返回给定名称的机器为 [IMachine](/Mods/ExtraUtilities2/CustomMachines/IMachine) 或 `null`

### 获取所有注册机

这将作为 [IMachine](/Mods/ExtraUtilities2/CustomMachines/IMachine) 列表返回所有注册的机器.

```zenscript
extrautilities2.Tweeper.IMachineRegistry.getRegisterdMachineNames();
```

### 获取 XU2 机

您也可以使用这些getter来从 XU2 模组中获取机器作为 [IMachine](/Mods/ExtraUtilities2/CustomMachines/IMachine) 对象：

    extrautilities2.Tweaker.IMachineRegistry.crusher;
    extrautilities2.Tweaker.IMachineRegistry.enchanter;
    extrautilities2.Tweaker.IMachineRegistry.generator_culinary;
    extrautilities2.Tweaker.IMachineRegistry.generator_death;
    extrautilities2.Tweaker.IMachineRegistry.generator_dragon;
    extrautilities2.Tweaker.IMachineRegistry.generator_enchant;
    extrautilities2.Tweaker.IMachineRegistry.generator_ender;
    extrautilities2.Tweaker.IMachineRegistry.generator_furnace;
    extrautilities2.Tweaker.IMachineRegistry.generator_ice;
    extrautilities2.Tweaker.IMachineRegistry.generator_lava;
    extrautilities2.Tweaker.IMachineRegistry.generator_netherstar;
    extrautilities2.Tweaker.IMachineRegistry.generator_overclock;
    extrautilities2.Tweaker.IMachineRegistry.generator_pink;
    extrautilities2.Tweaker.IMachineRegistry.generator_potion;
    extrautilities2.Tweaker.IMachineRegistry.generator_redstone;
    extrautilities2.Tweaker.IMachineRegistry.generator_slime;
    extrautilities2.Tweaker.IMachineRegistry.generator_survivalist;
    extrautilities2.Tweaker.IMachineRegistry.generator_tnt;