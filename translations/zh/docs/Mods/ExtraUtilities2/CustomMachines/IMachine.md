# IMachine

IMachine 是实际机器对象，你可以从 [IMachineRegistry](/Mods/ExtraUtilities2/CustomMachines/IMachineRegistry) 获取。

## 导入相关包

您可能需要 [导入类](/AdvancedFunctions/Import) 。  
您通常只需要在直接使用名称时导入类 例如在铸造或 [数组声明](/AdvancedFunctions/Arrays_and_Loops) 但比抱歉更安全并添加导入。

```zenscript
导入 exautilities2.Tweeper.IMachine;
```

## 添加配方

有两种方法来添加配方，一种方法使用产出概率图。 一个允许使用 [重量物品堆栈](/Vanilla/Items/WeightedItemStack) 和 [重量液化堆栈](/Vanilla/Liquids/WeightedLiquidStack) 对象。  
两种方法均使用 [映射](/AdvancedFunctions/Associative_Arrays) 以字符串作为指数。  
这些字符串将是给定的输入/输出位置的名称。 这就是为什么你不应该在机器中有两个名称相同的位置。

### 使用概率地图

```zenscript
myMachine.addRecipe(投入、产出、能源、时间、概率)；
```

此方法使用以下参数：

| 名称      | 类型                                               |
| ------- | ------------------------------------------------ |
| inputs  | [元素](/Vanilla/Variable_Types/IIngredient)[字符串\] |
| outputs | [元素](/Vanilla/Variable_Types/IIngredient)[字符串\] |
| 能源      | 整数                                               |
| 时间      | 整数                                               |
| 概率      | 浮点型变量[字符串\]                                     |

### 仅使用输出地图

您也只能使用输出映射。 然后ExtUtils2将检查任何 [重量物品堆栈](/Vanilla/Items/WeightedItemStack) 和 [重量液体堆栈](/Vanilla/Liquids/WeightedLiquidStack) 对象并使用他们的机会。  
记住，添加除这两者之外的任何东西或 [IIngredient](/Vanilla/Variable_Types/IIngredient) 作为映射值将不会产生任何效果。

```zenscript
myMachine.addRecipe(投入、产出、能源、时间)；
```

此方法使用以下参数：

| 名称      | 类型                                               |
| ------- | ------------------------------------------------ |
| inputs  | [元素](/Vanilla/Variable_Types/IIngredient)[字符串\] |
| outputs | 对象[字符串\]                                        |
| 能源      | 整数                                               |
| 时间      | 整数                                               |

## 删除配方

您也可以删除配方。 再说一遍，你使用 [地图](/AdvancedFunctions/Associative_Arrays) 作为指数字符串。

有两种方法，其中一种使用 [Igredient](/Vanilla/Variable_Types/IIngredient) 作为数值。 和一个接受带有 [IItemStack](/Vanilla/Items/IItemStack) 和带有 [ILiquidStack](/Vanilla/Liquids/ILiquidStack) 值的地图的人。

### 使用 Igredient

```zenscript
myMachine.removeRecipe(输入)；
```

| 名称     | 类型                                               |
| ------ | ------------------------------------------------ |
| inputs | [元素](/Vanilla/Variable_Types/IIngredient)[字符串\] |

### 使用单独的物品和液体地图

```zenscript
myMachine.removeRecipe(物项、液体)；
```

| 名称 | 类型                                                      |
| -- | ------------------------------------------------------- |
| 项目 | [IItemStack](/Vanilla/Items/IItemStack)[string\]       |
| 液体 | [ILiquidStack](/Vanilla/Liquids/ILiquidStack)[string\] |

## 检索机器信息

您还可以通过以下方法检索机器上的一些信息：

- `getInputSlots()`: 返回所有输入槽作为 [IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot)
- `getOutputSlots()`: 返回所有输出位置作为 [IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot)
- `getSlot()`: 返回 [IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot) 匹配名称。

## 给机器命名。

到目前为止，我们所有的机器都将被命名为 `machine.craftminstrer:your_machine_name` where `your_machine_name` 是你用来创建机器的任何名称。

如果你想要机器名称本地化，请使用 Crt's [IGame](/Vanilla/Game/IGame) 功能或自定义lang 文件。

所以，如果你的机器名称是 `time_phys`，你需要在脚本中调用这个脚本：

```zenscript
game.setLocalization("machine.craftminstrer:time_machine", "Space Time distribut (Time machine)");
```

或者将其添加到一个lang文件：

    machine.craftbiner:time_machine=Space Time districer (Time machine)