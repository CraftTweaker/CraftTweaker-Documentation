# 项目

这允许您将项目添加到游戏中！

## 创建项目表示

在您可以添加项目之前， 您需要创建一个项目，允许您设置要添加的项目的属性。  
这是 [Vanilla工厂](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/) 所处的位置：

```zenscript
mods.contenttweaker.VanillaFactory.createItem(String unlocalizedName);
```

## 导入校验包

如果您遇到任何问题，可能需要导入软件包，所以比抱歉更安全并添加导入。  
`导入 mods.contenttweakerItem；`

## ZenProperties

要获取/设置属性，您可以使用尊敬的 ZenGetters/Setters或ZenMethods：

```zenscript
//房产名称：maxStackSize
//ZenGetter
print(item.maxStackSize);
//ZenSetter
item.maxStackSize = 16;
//ZenMethod
item.getMaxStackSize();
item.setMaxStackSize(64)；
```

| 属性名称                  | 类型                                                                                                          | 必填 | 默认值     | 描述/注释                                                 |
| --------------------- | ----------------------------------------------------------------------------------------------------------- | -- | ------- | ----------------------------------------------------- |
| 信标支付                  | boolean                                                                                                     | 否  | false   | 可以给信标以启用加成                                            |
| creativeTab           | [ICreativeTab](/Mods/ContentTweaker/Vanilla/Creatable_Content/Creative_Tab/)                                | 否  | 其他      | 项目将放入的创建标签                                            |
| 发光中                   | boolean                                                                                                     | 否  | false   | 可以用来给你的物品带来发光效果(如附魔)。                                 |
| 项目颜色提供商               | [IItemColorSupplier](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemColorSupplier/)     | 否  | -1 作为颜色 | 项目颜色                                                  |
| 项目已破坏方块               | [IItemDestroyedBlock](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemDestroyedBlock/)   | 否  | false   | 当项目刚刚摧毁一个方块时会发生什么情况？                                  |
| 物品破坏速度                | [IItemDestroySpeed](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemDestroySpeed/)       | 否  | 空的      | 确定项目方块破碎速度。                                           |
| 物品容器物品                | [IItemGetContainer项目](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemGetContainerItem/) | 否  | 空的      | 当这个物品被用于累犯时，在制作网格中还会留下什么？                             |
| 右键点击                  | [IItemRightClick](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemRightClick/)           | 否  |         | 当玩家右键点击项目时拨打电话                                        |
| 项目使用                  | 枚举UseAction                                                                                                 | 否  | “无”     | 项目使用的动画 ("无"EAT", "DRINK", "BLOCK", "BOW")            |
| 本地化名称提供商              | [本地化名称提供商](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/ILocalizedNameSupplier/)           | 否  | 空的      | 可以用来编程确定您的物品的显示名称                                     |
| maxDamage             | 整数                                                                                                          | 否  | -1      | 该物品有多少用途？ 小于0表示不能损坏                                   |
| maxStackSize          | 整数                                                                                                          | 否  | 64      | 有多少项目可以适合于一个堆栈？ 小于0表示标准堆栈大小(64)                       |
| onItemUpdate          | [IItemUpdate](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemUpdate/)                   | 否  | 空的      | 只要项目在玩家的物品栏中，就拨打每个刻度                                  |
| onItemUse             | [IItemUse](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemUse/)                         | 否  | 空的      | 当玩家右键点击项目方块时拨打电话                                      |
| onItemUseFinish       | [IItemUseFinish](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemUseFinish/)             | 否  | 空的      | 当玩家使用项目结束时拨打电话                                        |
| 稀有度                   | 稀有度                                                                                                         | 否  | 常驻代表    | 一个项目多少，确定工具提示颜色("COMMON", "UNCOMMON", "RARE", "EPIC") |
| 冶炼Exprerience         | 浮点数                                                                                                         | 否  | -1      | 玩家在熔炉中熔化该物品赚取多少经验？                                    |
| textureLocation（材质位置） | [CTResourceLocation](/Mods/ContentTweaker/Vanilla/Types/Resources/CTResourceLocation/)                      | 否  | 空的      | 项目的资源位置，用于纹理等                                         |
| 工具类                   | 字符串                                                                                                         | 否  |         | 工具可以破坏的模块类型                                           |
| 工具级别                  | 整数                                                                                                          | 否  | -1      | 方块级别可能损坏                                              |
| unlocalizedName       | 字符串                                                                                                         | 否  |         | 名字，应该是所有小写                                            |

## 注册项目

您需要调用此方法来注册游戏中的项目！  
不会发生任何事情！  
在你调用此函数后，你不能取消注册该项或更改它的任何属性！

```zenscript
文 件：
```

## 示例脚本

```zenscript
#loader contenttweaker
import mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.Item;
import mods.contenttweaker.IItemRightClick;
import mods.contenttweaker.Commands;

var zsItem = VanillaFactory.createItem("zs_item");
zsItem.maxStackSize = 8;
zsItem.rarity = "rare";
zsItem.creativeTab = zsCreativeTab;
zsItem.smeltingExperience = 10;
zsItem.toolClass = "pickaxe";
zsItem.toolLevel = 5;
zsItem.beaconPayment = true;
zsItem.itemRightClick = function(stack, world, player, hand) {
    Commands.call("scoreboard players set @p name 5", player, world);
    return "Pass";
};
zsItem.register();
```

## 物品本地化

您需要将 `item.contenttweiner.itemName=本地化名称` 添加到响应语言文件。  
en_us中的示例。 ang file `item.contenttweiner.zsItem.name=your itemsname where` will show `your items items` in the bay.

或者，您可以使用 CraftTweaker 的 [本地化功能](/Vanilla/Game/IGame/)，尽管它建议使用语言文件！