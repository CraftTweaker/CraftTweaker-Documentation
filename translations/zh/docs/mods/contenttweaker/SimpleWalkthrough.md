# 简单的走道

嘿，你好在这里。 所以你试试了 1.15, huh的ContentTbinde?

有时我会使用 CoT 缩写内容更弱以免我有几个字母 (已经是Discord 的自动化)，所以跟我呆在一起吗？ 然后我建议您安装一个资源管理器， 这样你以后可以添加块和项目的纹理和模型的块/项目。

ContentTbinde将尝试在资源文件夹中创建模型文件以及简单的无纹理图像。 只要检测到模组 [加载器](https://www.curseforge.com/minecraft/mc-mods/the-loader) 或 [打开加载器](https://www.curseforge.com/minecraft/mc-mods/open-loader) 已安装。 如果这两项都没有安装，它只会打印一条消息到日志，声明它不会为您创建纹理。 在某个时候，也可以完全禁用纹理的生成，但是不能在宵禁Alpha/Beta建筑物中这样做。

对于生成的文本，CoT不会覆盖已经存在的文件。 这样您可以用自己的文件来简单地替换现有的文件，CoT将不会撤消这些更改。


现在，让我们来讨论这个问题，我们吗？ 我将举一些简单的块和项目的例子。 如果您想看到所有这些类支持， 您可以在导航栏下方的API文件夹中找到API导出！

## Loader ContentTweaker
既然在 1.14 + 中的 CraftTinfirst将在服务器启动和运行时加载，我们需要一种方式在其他地方加载脚本。 这就是 `#loader contenttbinder` 的目的！  
只需把它放在你的文件的某个地方(最好是顶部)，你就可以离开了。  
记住 **不允许手工艺较弱的脚本** 在 `#loader contentbloader`因为它们是在劳德周期的不同阶段运行的!


## 方块

要创建方块，您需要创建一个 [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder) 对象。  
一旦您可以在生成器模式中设置最简单的属性。

然后你可以直接调用 `build(name)` ，并且如果你想要创建一个基本块就可以做到。  
或者您可以使用 `指定生成器。输入` 并提供一个专门的生成器类， 例如 [BuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs) 或 [BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable) 检查他们各自的页面以查看他们提供的额外功能。 请注意，一旦您不打电话，就不会退回，因此请在通话之前设置所有基本属性。

记住，无论你做了什么，在链末尾， **需要 `build(name)` 调用**，因为否则什么都不会发生！

说得够了，你想要一个复制/粘贴示例，你吗？

```zenscript
#loader contenttweaker

import mods.contenttweaker.block.BlockBuilder;
import mods.contenttweeper.block.stairs.BlockBuilderStairs;
import mods.contenttweeper.block.basic.BlockBuilderBasic;
import mods.contenttweiner.block.pillar.BlockBuilderPillarRotable;


///最简单的方式 使用blockamatric IRON
new BlockBuilder()
    //Will 代表 to the Basic Builder
    。 uild(“generic_block”)；


//设置不同的块材料。
新BlockBuilder(<blockmaterial:earth>)
    .withType<BlockBuilderBasic>()
    . uild(“earth_lik_block”)；


//The Pillar Type 基本上与logs、一种在顶部/底部的纹理和两侧的纹理相同。
//Can 将在所有轴上旋转，就像日志一样。
//texture name 默认为"block_name" + "end", "_sides"
new BlockBuilder()
    .withType<BlockBuilderPillarRotatable>()
    .build("preset_pillar_rotatable_noarg");


// Stairs.
/// 有3 种纹理，顶部, 底部, 边, 默认, 他们是 "block_name" + "_top", "_bow", "_sides"
new BlockBuilder()
    .withType<BlockBuilderStairs>()
    .build("stairs_noarg");
```


## 项目

对于一些物品，你或多或少做同样的事情，但这一次你需要一个 [个物品生成器](/mods/contenttweaker/API/item/ItemBuilder)。  
您可以再次使用 `build(name)` 直接， 或使用 `切换到专门版本`  
在撰写本报告时，只有 [项目生成工具](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

记住，无论你做了什么，在链末尾， **需要 `build(name)` 调用**，因为否则什么都不会发生！

说得够了，你想要一个复制/粘贴示例，你吗？
```zenscript
#loader contenttweaker

import mods.contenttweaker.item.ItemBuilder;
import mods.contenttweeper.item.tool.项目生成器工具；

///最简单的创建项目方式。
new ItemBuilder().build("generic_item");
new ItemBuilder().build("generic_item_2");
new ItemBuilder().build("generic_item_3");


//With setting properties
new ItemBuilder()
    . ithMaxStackSize(16) /MaxStackSize 和 MaxStackSize 和 MaxDamage 相互矛盾，因此只能使用 1
    uild("other_item")；


//如果你想要工具，你需要设置类型。
///从设置您要切换上下文的类型开始，所以其他方法将不再可用。
///这意味着您需要设置耐久性和 _before_the with类型的呼叫。
新 ItemBuilder()
    .withMaxDamage(100)
    .withType<ItemBuilderTool>()
    . ithToolType(<tooltype:axe>, 1) /轴收获级别 = 1
    .withToolType(<tooltype:shovel>, 3, 4. F) /Shovel收获水平3并破坏速度 4.0
    uild("my_tool");



//如果你想要一个能造成伤害的工具，你也可以使用工具类型
新 ItemBuilder()
    。 ithMaxDamage(100)
    ithType<ItemBuilderTool>()
    .withAttackDamage(10.0F)
    .withAttackSpeed(5). F)
    .withDurabilityCostAttack(1) //Of default: 2
    .build("my_mace");

```

## 名称
那么你将如何给出物品适当的名字？  
为此你需要一个lang文件。  
在编写本报告时，CoT尚未为ya创建那一个。 所以你需要自己创建它。  
在您的资源包中，找到 `assets/contenttbinder` 文件夹。  
在那里创建一个名为 `lang的文件夹` 如果它还不存在。 并创建一个名为 `en_us的文件。 儿子` 在那里。  
我建议总是从en_us One 开始。 因为这正是游戏如果找不到另一种语言的名称就会倒退到的位置。 其后也可以随意用其他lang代码重复这一点。

在那里，您必须为您的条目创建一个Key值地图。 这些密钥，也称作翻译密钥，或早期版本中的非本地化名称， 取决于你所使用的方块/项目的名字，它们看起来就像样了
```
"<block|item>.contenttweaker.<the_name_you_gave_them>"
```
对于值, 你可以设置该项是如何命名在那里的。 如果您不确定语法, 请选中下面的示例, 或者如果您得到了语法, 请尝试使用 JSON 验证器。


TLDR: `<resoruce_pack>/assets/contenttweaker/lang/en_us.json`.
```
很抱歉，
  "block.contenttweeper.generic_block": "Generic Block",
  "item.contenttweeper.generic_item": "Generic Item",
  "item.contenttweeper.generic_item_2": "Generic Item the 2nd",
  "item.contenttweeper.generic_item_3": "Generic Item the charame"
}
```