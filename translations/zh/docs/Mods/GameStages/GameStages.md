# 游戏阶段

该模组添加了一个阶段 API。 阶段 API 允许玩家解锁阶段，并让模组可以与这些阶段交互。 此模组还处理了世界保存数据、数据包、网络连接和其他所需系统。 玩家和模组包作者可以使用命令与该模组交互。

- /gamestage add <玩家> <阶段> - 为玩家解锁一个阶段。
- /gamestage remove <玩家> <阶段> - 移除玩家的一个已解锁阶段。
- /gamestage clear <玩家> - 清除玩家解锁的所有阶段。
- /gamestage check <玩家> <阶段> - 检查玩家是否解锁了某个阶段。 
- /gamestage info - Shows all stages you have unlocked. 

Many addons for GameStages will hook into CraftTweaker for customization. You can learn more about said addons in this section of the docs. For more information, support and file downloads, check [here](https://minecraft.curseforge.com/projects/game-stages)