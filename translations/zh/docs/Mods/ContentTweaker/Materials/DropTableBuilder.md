# DropTableBuilder

DropTableBuilder 用于为支持一次丢弃多个项目堆栈的矿石和样品创建“drops”字符串， 包含多个项目的项目堆栈和加权掉落。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包，所以比抱歉更安全并添加导入。  
`导入mods.contenttweiner.DropTableBuilder；`

## 方法

这些方法允许创建和修改一个丢弃表。 所有生成器方法都返回了他们运行的生成器, 允许使用链路方法.

| 方法名称            | 说明                         |
| --------------- | -------------------------- |
| newSlot()       | 如果静态运行，创建一个新的拖放表或添加一个新的槽位。 |
| addItem()       | 将指定项目添加到当前的数据栏。            |
| enableFortune() | 启用当前栏位从幸运附魔中受益。            |

### 用法：

#### `newSlot()`

DropTableBuilder.newSlot() 将创建一个新的生成器。 \<builder\>.newSlot() 将最后确定当前的槽位并开始一个新的槽位。

#### `附加项目 (条目字符串[, 整数[, 整数])`

`条目str` 可以是一个项目的名称，就像\<mod\>:\<item\>:\<meta\>, 像oredict:\<entry\>, 或者单词为空。 `权重` 控制该物品使用公式丢弃的几度<item weight\>/\<sum of item weights within slot\>. 省略时默认为1。 `计数` 是指如果选中的物品会掉落多少次。 省略时默认为1。

#### `enableFortune()`

运转良好的插槽将从插槽中选择一些其他物品，直到使用的运气水平。 在只有1个物品的槽上匹配原版运算行为。

## 使用构建器的实例

### 创建一个拖放表

```zenscript
var completable = DropTableBuilder.newSlot()
                    .addItem("minecraft:diamond", 1, 2)
                    .addItem("minecraft:coal", 9)
                    .enableFortune()
                    .newSlott()
                    .addItem("oredic:stone")
                    .newSlot()
                    .addItem("minecraft:cobblestone")
                    .addItem("empty");
```

这张跌落表将会掉落2钻石(10%)或1煤(90%)从财富中得益，一块石(100%)和一块煤炭(50%)。

```zenscript
var lapistable = DropTableBuilder.newSlot()
                   。 ddItem("minecraft:lazul", 1, 4)
                   ddItem("minecraft:lapis_lazul", 1, 5)
                   ddItem("minecraft:lapis_lazul", 1, 6)
                   ddItem("minecraft:lapis_lazul", 1, 7)
                   ddItem("minecraft:lapis_lazul", 1, 8)
                   .enableFortune();
```

这个可拖放的模仿原版失误，丢掉4-8 笔记本并从中受益。

### 使用拖放表

生成器被分配为“drops”数据值来使用。 由于数据值只接受字符串，生成器将使用其toString方法作为字符串投射。

```zenscript
var lapisData = MaterialSystem.getMaterialBuilder()
                  .setColor(12345678).setName("Fake Lapis").setColor(12345678).build()
                  .registerPart("ore").getData();
var completedData = MaterialSystem.getMaterialBuilder()
                    .setColor(12345678).setName("Complexx Ore").setColor(12345678).build()
                    .registerPart("ore").getData();
lapisData.addDataValue("drops",lapistable));
comprehensive Data.
```

当将两个生成器加在一起时，将创建一个新的表格，其中有两个表格的位置。