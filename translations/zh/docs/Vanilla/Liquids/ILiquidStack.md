# ILiquidStack

LiquidStack包含一个 [液体定义](/Vanilla/Liquids/ILiquidDefinition/) 以及一个可选的标签和一个可选的数量值。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包(例如铸造一个 [数组](/AdvancedFunctions/Arrays_and_Loops/)), 这样比抱歉更安全并添加导入。  
`导入craftweaker.liquidStack；`

## 创建 ILiquidStack

可以通过使用 [液体碎片处理程序](/Vanilla/Brackets/Bracket_Liquid/) 来创建 ILiquidStack

```zenscript
//查看液体括号处理程序以获取更多信息
val lava = <liquid:lava>;

/液体。 ithTag(标记为 IData)
val lavaWidtag = <liquid:lava>ithTag(DATA)；

//液体* 毫巴克中的含量(-> 1000 = 1 桶)
val lavaWamount = <liquid:lava> * 1000;
```

## 获取流体属性

由于ILiquidStack是一种液体，肯定还有一种回收液体特性的方法。  
查看表格以查看您可以使用 ZenGetters 从 ILiquidStack 对象中获取什么。

| Zengetter   | 这是什么？                  | 返回值类型                                             | 例子                                      |
| ----------- | ---------------------- | ------------------------------------------------- | --------------------------------------- |
| name（名称）    | 这返回未本地化的液体名称           | 字符串                                               | `测试 = <liquid:lava>.name;`        |
| displayName | 这返回本地化的液体名称            | string                                            | `测试 = <liquid:lava>.displayname;` |
| 金额          | 这返回ILiquidObject 的金额   | 整数                                                | `test = <liquid:lava>.amount;`    |
| 亮度          | 这将返回所指液体的亮度            | 整数                                                | `测试= <liquid:lava>.luminosity;`   |
| 密度：         | 此函数返回所指液体的强度           | 整数                                                | `test = <liquid:lava>.density;`   |
| 温度          | 这将返回所指液体的温度            | 整数                                                | `测试 = <liquid:lava>.温度；`          |
| 视觉性         | 这将返回所指液体的粘性值           | 整数                                                | `测试 = <liquid:lava>.viscosity;`   |
| 气压          | 这将返回所指液体是否气体？          | boolean                                           | `test = <liquid:lava>.gaseous;`   |
| 标签          | 这返回 ILiquidObject's 标签 | [IData](/Vanilla/Data/IData/)                     | `测试 = <liquid:lava>.tag;`         |
| definition  | 这将返回所指的液体定义(见下文)       | [ILiquid 定义](/Vanilla/Liquids/ILiquidDefinition/) | `测试 = <liquid:lava>.definition;`  |

# Ingredient 实现

Java Jargon: ILiquidStack 实现IIngredient。 换言之， 所有可以在 [IIngredients](/Vanilla/Variable_Types/IIngredient/) 中使用的方法也可以用于 ILiquidStacks 请参阅IIngredient 条目以了解更多关于这个问题的信息。 这里有一些特殊情况，因为液体不是物品

* 您不能标记ILiquidStack，您可以尝试检索ILiquidStack的标记
* .item返回空列表
* .itemArray 返回一个空数组
* .液体返回液体为 ILiquidStack (所以正是这个对象)
* LiquidStacks 不能有变换器，要求变压器总是返回 false
* LiquidStack不能有条件 (.only 不可用)
* 匹配项目总是返回 false