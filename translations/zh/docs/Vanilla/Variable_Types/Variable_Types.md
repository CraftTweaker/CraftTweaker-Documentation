# 变量类型

你肯定已经给一些变量和值致电，你必须已经知道， CraftTinvente是如何知道它是与Integer、物品还是oredic 条目的交易的？

申报变量的最简单方式是使用 ```var name = 值；```. 这就产生了变量，并使它具有它认为对局势最为恰当的价值。

## 将变量投射到指定类型

更复杂的脚本可能要求您将变量作为特定类型投射。 例如，这将会失败：

```zenscript
var 测试；

测试 = <minecraft:dirt>;
配方.remove(测试)；
```

因此，为什么会失败？ 这是因为CT 将没有给Iany类型给出起始值的变量。 之所以这样做是为了便利某些配方的处理，尽管这种做法从未真正付诸实施，因此有时会带来更多的伤害而不是好处。 它原来是一种类型，可以采取大多数其他类型的形式，所以你不需要随时更改变量。 但接口从未实现。

回到主题： 我们如何解决这个问题？ 通过将变量测试转换到 ```IItemStack```, 这是用于项目的类型。 不幸的是，有些类型首先需要进口，这是其中之一。

```zenscript
导入craftweeper.item.IItemStack;
var tests as IItemStack;

test = <minecraft:dirt>;
配方.remove(test);
```

## 变量类型列表

下面是大多数变量类型的列表(不完整)

| 名称(在CT中名称)                                              | 解释                                                                         | 例子                                                   | 导入                                   |
| ------------------------------------------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------- | ------------------------------------ |
| 整数(int)                                                 | 整数为整数(如1,2,3,...)，上限为2 147 483 647                                         | `a. 真空测试=10；`                                        |                                      |
| [IItemStack](/Vanilla/Items/IItemStack/)                | 单个项目                                                                       | `var 测试 = <minecraft:dirt> 作为 IItemStack;`     | 导入craftweeper.item.IItemStack;       |
| [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/) | 单项或多项项目 (例如 `<minecraft:dirt>`, `<ore:ingotIron>`,...)         | `var 测试 = <minecraft:dirt> 为 IIngredial；`      | 导入 craftweeper.item.IIngredial；      |
| [IOREDictentre](/Vanilla/OreDict/IOreDictEntry/)        | 来自OreDict 的多个项目 (例如 `<ore:ingotIron>`, `<ore:ingotGold>`, ...) | `var 测试 = <ore:ingotIron> 作为 IOreedDictEntry;` | 导入 craftweeker.oredict.IOreDictEnter |
| 布尔值(布尔)                                                 | 布尔值要么是真的，要么是假的。                                                            | `var 测试 = false 为 bool;`                             |                                      |
| 字节(字节)                                                  | 字节值是从0到255() 的整数                                                           | `var 测试=125为字节；`                                     |                                      |
| 浮点数(浮点数)                                                | 小数                                                                         | `a. 真空测试=1.25以浮点数；`                                  |                                      |
| 双精度(双精度)                                                | 像浮点一样，只需更加精确和更高的数字范围                                                       | `var 测试=1.25倍；`                                      |                                      |
| 长(长)                                                    | 像Integer一样，但数字范围较高(通常整数值很好)                                                | `a. 真空试验=30个长度；`                                     |                                      |
| 空(空)                                                    | 不，没有什么，没有。 实际上不是一种类型，但仍然是有用的                                               | `var 测试 = null;`                                     |                                      |
| 短(短)                                                    | 像整数，但数字范围较小的                                                               | `var 测试=16短；`                                        |                                      |
| 字符串 (字符串)                                               | 字符串是文本。 这里您通常不需要"as"，因为"s"中的任何东西都自动是一个字符串。                                 | `var 测试 = "Hello World!" 作为字符串；`                     |                                      |
| 虚空(空)                                                   | 甚至低于空值。 您可能只需要在处理函数时的无效类型                                                  | `a. 虚拟测试为无效；`                                        |                                      |
| [ILiquidStack](/Vanilla/Liquids/ILiquidStack/)          | 与IItemStack相同，仅适用于液体的                                                      | `var 测试 = <liquid:water> 作为 ILiquidStack;`     | 导入 craftweeker.liquidStack;          |