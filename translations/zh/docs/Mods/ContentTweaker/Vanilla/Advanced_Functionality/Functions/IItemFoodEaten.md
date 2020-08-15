# IItemFoodEaten

每当相关的 [食品项](/Mods/ContentTweaker/Vanilla/Creatable_Content/ItemFood/) 被食用时，IItemFoodEaten 函数被调用。 请注意，如果项目已经提供 [IItemUseFinish](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemUseFinish/) 则此事件 *不会触发*。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包，所以比抱歉更安全并添加导入。  
`导入 mods.contenttweaker.IItemFoodEaten；`

## 参数

IItemFoodEaten是具有以下参数的函数(按此顺序排列)：

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) mutableItemStack = 食用的食品。
- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) world → 玩家所在的世界
- [CTPlayer](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/) 玩家 → 吃食物的玩家。

## 例子

```zenscript
#loader contenttweaker

import mods.contenttweaker.VanillaFactory;

var item = VanillaFactory.createItem("suspicious_soup");

item.healAmount = 4;
item.saturation = 1.5;
item.onItemFoodEaten = function(stack, world, player) {
    if (!world.isRemote()) {
        player.addPotionEffect(<potion:minecraft:weakness>.makePotionEffect(60, 1));
    }
};
item.register();
```