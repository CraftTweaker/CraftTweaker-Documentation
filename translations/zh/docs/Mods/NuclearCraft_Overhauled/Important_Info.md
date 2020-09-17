# 核合成: 过高的

所有配方都涉及五套信息――项目投入、流动投入、项目产出、液体输出和额外信息。 头四显然是该配方所涉及的成分和产品。 和额外信息包含数据，例如 处理时间和机能， 固体裂变燃料的基础耗竭时间、热基因、效率、临界性和辐射水平 等。

配方的所有部分只是在方法中列出——内部的 NC 代码将处理将其拆分成 五个类别，并将信息包装成一个配方。


## 概率属性

物品和液体输出可以附加附加信息，具体而言，可以随时随机输出堆栈 的大小的信息。 这个附加信息是使用 NC 的“几率成分”提供的。

每个过程中生成的堆栈的大小是从几率 信息指定的二项式分布中随机分配的。 成份堆栈的百分比和大小分别起着试验概率和次数的作用。 还可以指定 最小堆栈大小 - 否则最小堆栈大小为 0。

对于ChanceFluidIngrediers，还必须指明“堆栈差异”。 它决定了 个可能的堆栈之间的大小差异(对于ChanceItemIngredients, 这实际上是 1)。 例如，一个 大小500的商机液体成分。 堆栈相差150个和最小堆栈尺寸50个，将产生液体50、200、350或500 毫桶。

**注意： `ChanceItemIngredient` and `ChanceFluidIngredient` 计数为 `IIngredient` 用于核工艺中的配方：过高的**

### 可能的物品

#### 设定

```zenscript
nuclearcraft。ChanceItemIngredient.create(I成分、int chancePercent、@Optional int minStackSize)；
```

#### 例子

```zenscript
ChanceItemIngredient.create(<minecraft:coal>*2, 25);
ChanceItemIngredient.create(<ore:dustGlowstone>*3, 60, 2);
```

#### 额外方法

```zenscript
Ingredient getInternalIngredient();
int getChancePercent();
int getMinStackSize();
```

### 切换流体元素
这些可以在任何正常使用 `ILiquidStack` 的地方使用。

#### 设定
```zenscript
nuclearcraft。ChanceFluidIngredient.create(I成分、int chancePercent、int stackDiff、@Opinion minStackSize)；
```

#### 例子
```zenscript
ChanceFluidIngredient.create(<liquid:water>*1500, 35, 300);
ChanceFluidIngredient.create(<liquid:oil>*1000, 80, 200, 400);
```

#### 额外方法
```zenscript
Ingredient getInternalIngredient();
int getChancePercent();
int getStackDiff();
int getMinStackSize();
```

## 配方添加
配方方法将为项目输入指定 `项输入`。 <br/> 配方方法将为项目输出指定 `项输出`。 <br/> 配方方法将为流体输入指定 `流体输入`。 <br/> 配方方法将为液体输出指定 `液体输出`。 <br/> 配方方法将为方块输入指定 `块输入`。 <br/> 配方方法将为块输出指定 `块输出`。 <br/> **注意： `blockInput` 和 `blockoutput` 必须是 `IItemStack`/`Ingredient` 版本的块**

### Item Inputs
`IItemStack`: `<minecraft:gunpowder>` * 4 <br/> `IOreedictEnterprise`: `<ore:ingotIron>` * 2 <br/> `null`: null

### Item Outputs
`IItemStack`: `<minecraft:gunpowder>` * 4 <br/> `IOreedictEnterprise`: `<ore:ingotIron>` * 2 <br/> `ChanceItemIngredient`: `<ore:gemDiamond>` * 5, 75 <br/> `null`: null

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
