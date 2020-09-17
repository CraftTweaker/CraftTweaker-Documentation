# 创意选项卡

这允许您添加创意标签到游戏！

## 创建 ICreativeTab 对象

在您可以添加标签前， 您需要创建一个将允许您设置您想要添加标签的属性的表示方式。  
这是 [Vanilla工厂](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/) 所处的位置：

```zenscript
mods.contenttweeper.VanillaFactory.createCreatativeTab(String unlocalizedName, IItemStack iItemStack);
mods.contenttweiner.VanillaFactory.createCreatativeTab(String unlocalizedName, ItemRepresentative iItem);
mods.contenttweepender.VanillaFactory.createCreatativeTab(String unlocalizedName, BlockRepresentation iBlock);
mods.contentbuiler.VanillaFactory.createCreativeTab(String unlocalizedName, IItemStackSupplier supplier);
```

字符串在这三种方法中的每一种都是相同的：它是以后标签会有的未本地化名称。  
第二个参数是你的标签稍后会带上的符号(e)。 。一个用于"misc"的岩浆桶。  
您可以决定你想要使用的项目表示、 项目堆栈、 块表示或项目堆栈供应商功能。

## 调用现有的 ICreativeTab 对象

您也可以调用 [现有的创造性](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Creative_Tab/) 标签，尽管您不能更改它的任何属性。  
你为什么需要这样做，你问？  
如果您想要将一个新创建的块或项目添加到一个现有标签中，您将需要这个选项卡！

## 参数

您可以使用普通的 ZenGetters 和 ZenSettes  
`标签来调用和设置所有这些属性。 nlocalizedName = "hh";`  
请注意，当您创建 ICreativeTab 对象时，这些属性已经初始化到您想要的值。  
您既不能设置也不能从现有的 ICreativeTab(您使用 [Backet 处理程序](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Creative_Tab/) 检索到的一个)设置或获取属性！

| 属性名称            | 类型                                                                                                      | 必填   | 默认值 | 描述/注释   |
| --------------- | ------------------------------------------------------------------------------------------------------- | ---- | --- | ------- |
| unlocalizedName | string                                                                                                  | 是的   |     | 创建标签的名称 |
| 冰箱              | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/)                                                           | 是/NO |     | 创意标签图标  |
| iconStackServer | [IItemStackSupplier](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemStackSupplier/) | 不/是  | 空的  | 确定什么?   |

## 注册创造性标签页

您需要调用此方法来注册游戏中的创造性选项卡！  
否则什么也不会发生！  
调用此函数后，您不能取消注册标签或更改它的任何属性！

```zenscript
tab.register();
```

## 示例脚本

```zenscript
#loader contenttweaker
import mods.contenttweaker.CreativeTab;
import mods.contenttweaker.VanillaFactory;

val zsTab = VanillaFactory.createCreativeTab("contenttweaker", <minecraft:dragon_egg>);
zsTab.register();
```