# 核合成器

**注意：函数中的双括号， `([...])` 是必需的。** 这基本上是因为所有核工艺工艺工艺品的弱化方法都需要一组物体，无论是成分、字符串、整数还是双精。

所有配方都涉及五套信息――项目投入、流动投入、项目产出、液体输出和额外信息。 头四显然是该配方所涉及的成分和产品。 和额外信息包含数据，例如 处理时间和机能， 聚变量的基础寿命、功率和热变量

配方的所有部分只是在方法中列出——内部核工艺代码将处理将其拆分成 五个类别，并将信息包装成配方。

## 配方添加
配方方法将为项目输入指定 `项输入`。 <br/> 配方方法将为项目输出指定 `项输出`。 <br/> 配方方法将为流体输入指定 `流体输入`。 <br/> 配方方法将为液体输出指定 `液体输出`。 <br/> 配方方法将为方块输入指定 `块输入`。 <br/> 配方方法将为块输出指定 `块输出`。 <br/> **注意： `blockInput` 和 `blockoutput` 必须是 `IItemStack`/`Ingredient` 版本的块**

### Item Inputs
`IItemStack`: `<minecraft:gunpowder>` * 4 <br/> `IOreedictEnterprise`: `<ore:ingotIron>` * 2 <br/> `null`: null

### Item Outputs
`IItemStack`: `<minecraft:gunpowder>` * 4 <br/> `ChanceItemStack`: `<minecraft:diamond>` * 3, 50, 1 <br/> `IOReDictEnterprise`: `<ore:ingotIron>` * 2 <br/> `ChanceIOreDictEntre`: `<ore:gemDiamond>` * 5, 75 <br/> `null`: null

### 液体输入
`ILiquidStack`: `<liquid:lava>` * 1500 <br/> `null`: null

### Fluid Outputs
`ILiquidStack`: `<liquid:lava>` * 1500 <br/> `ChanceLiquidStack` : `<liquid:water>` * 2000, 40, 250, 500 <br/> `null`: null

### 方块输入
`IItemStack`: `<minecraft:dirt>` * 4 <br/> `IOreedictEnterprise`: `<ore:blockIron>` * 2 <br/> `null`: null

### 块输出
`IItemStack`: `<minecraft:dirt>` * 4 <br/> `IOreedictEnterprise`: `<ore:blockIron>` * 2 <br/> `null`: null

## 配方删除
当指定要删除的配方时，所需的全部内容都是指定所有输入或输出成分。 不需要成分几率数据。 同样，项目必须首先进行，然后是液体。

您也可能想要移除所有特定类型的配方 - 为了做到这一点，只需使用 `removeAllRecipes()` 方法。

## 概率属性
物品和液体输出可以附加附加信息，具体而言，可以随时随机输出堆栈 的大小的信息。 这个附加信息只是标记到指定成分的末尾。 <br/>

每个过程中生成的堆栈的大小是从几率 信息指定的二项式分布中随机分配的。 成份堆栈的百分比和大小分别起着试验概率和次数的作用。 <br/>

对于ChanceFluidStacks, 必须指定一个“堆栈差异”。 它决定了 个可能的堆栈之间的大小差异(对于ChanceItemStacks 和 ChanceOreStacks, 这实际上是 1)。 例如，一个 ChanceFluidStack 用于 个尺寸500的成分。 堆栈相差150个和最小堆栈尺寸50个，将产生液体50、200、350或500 毫桶。

### 商机物品
`ChanceItemStack` 的形式是 `IItemStack 输出, int 百分比, @Optional int minimumStack大小` <br/> `输出` 的机会是 `百分比` <br/> 如果未指定， `最小Stacksize` 为 0。

### 可能的切换条目
`ChanceOreDictentre` 的形式是 `IOreeDictEntry 输出, int 百分比, @Optional int minimumStackSize` <br/> `输出` 的机会是 `百分比` <br/> 输出的最小堆栈大小为 `最小堆栈大小`。 如果未指定，则默认为0。

### ChanceLiquidStack
`ChanceLiquidStack` 的形式是 `ILiquidStack, int 百分比, int stackDifference, @Optional int minimumStackSize` <br/> 输出的机会是 `百分比`。 <br/> 可能的堆栈大小之间的差别是 `堆栈差异`。 输出的最小堆栈大小是 `最小堆栈大小`。 如果未指定，则默认为0。

- 示例：``<liquid:ethanol>` * 500, 100, 150, 50
    - 机器将生产50、200、350或500毫桶乙醇。