# VanillaDeathChest

## 信息

[VanillaDeathChest](https://www.curseforge.com/minecraft/mc-mods/vanilladeathchest) 放置箱子 (或潜水箱)，其中玩家死亡包含他们所有的物品。 andilla DeathChest是 完全服务器端； 它可以安装在客户端上，用于单人游戏世界， 但是没有这个模组的客户端可以连接到安装这个模组的服务器而不会丢失 功能。

Vanilla DeathChest可以与 [游戏阶段](https://www.curseforge.com/minecraft/mc-mods/game-stages) 和 CraftTinventer 配对，使玩家更难访问死亡箱。

如果有属性没用CraftTweaker设置的话，将会使用全局配置中的设置。 游戏阶段要按顺序定义 调用任何原版死亡箱子函数，如果还未定义指定阶段的话，将自动定义此阶段。

任何带参数的消息，比如解锁失败的聊天信息，用 [这个](https://dzone.com/articles/java-string-format-examples) 格式。 比如，`%2$s` 指第二个参数。