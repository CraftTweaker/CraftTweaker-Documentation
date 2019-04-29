# VanillaDeathChest

## 信息

[原版死亡箱子](https://minecraft.curseforge.com/projects/vanilladeathchest) 在玩家死亡的位置放置一个包含了生前所有物品的箱子（或潜影盒）。原版死亡箱子只需要装在服务器端；也可以装在客户端供单机游玩，但是没装这个Mod的玩家也可以连到装有这个Mod的服务器上，并且死亡箱功能依然存在。

原版死亡箱子可以配合 [游戏阶段](https://minecraft.curseforge.com/projects/game-stages) 和 CraftTweaker 来让死亡箱的使用随着玩家发展越来越困难。

如果有属性没用CraftTweaker设置的话，将会使用全局配置中的设置。 游戏阶段要按顺序定义 调用任何原版死亡箱子函数，如果还未定义指定阶段的话，将自动定义此阶段。

任何带参数的消息，比如解锁失败的聊天信息，用 [这个](https://dzone.com/articles/java-string-format-examples) 格式。 比如，`%2$s` 指第二个参数。