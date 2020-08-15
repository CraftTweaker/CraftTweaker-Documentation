# IItemUse 函数

每当在方块上使用关联的 [项目](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) 时，都会调用物品功能。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包，所以比抱歉更安全并添加导入。  
`导入 mods.contenttweaker.IItemuse；`

## 参数

IItemUse 函数是一个具有以下参数的函数(按此顺序排列)：

- [ICTPlayer](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/) 播放器 → 执行右键的播放器
- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) world → 玩家所在的世界
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pos -> 该物品使用的方块的位置
- [Hand](/Mods/ContentTweaker/Vanilla/Types/Player/Hand/) hand → 用过的手(主或关闭)
- [正面](/Mods/ContentTweaker/Vanilla/Types/Block/Facing/) expressing -> 该物品使用的方块的边框
- [Position3f](/Vanilla/Utils/Position3f/) blockHit → 方块的相对X、Y 和 Z 坐标 → 所有三个位置在 0 和 1 之间

函数需要返回 [动作结果](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/ActionResult/) 对象。

## 例子

```zenscript
#loader contenttinfinder

import mods.contenttweiner.VanillaFactory;
import mods.contenttweiner.ActionResult;

var item = VanillaFactory.createItem("fake_flint");

it项。 axStackSize = 1；
item.maxDamage = 50；
项目。 nItemUse = function(player, world, pos, hand, facing, blockHit) v.
    var firePos = pos). etOffset(facing, 1);
    if world.getBlockState(firepos). sReplacable(world, firePos))
        world etBlockState(<block:minecraft:fire>, 火焰)；
        玩家. etHeldItem(hand).damage(1, player)；
        返回 ActionResult。 uccess();
    }

    return ActionResult.pass();
};
item.register();
```