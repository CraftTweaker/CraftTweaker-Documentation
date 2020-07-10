# VanillaDeathChest

## 信息

[VanillaDeathChest](https://www.curseforge.com/minecraft/mc-mods/vanilladeathchest) places chests (or shulker boxes) where players die containing all of their items.VanillaDeathChest is completely server-sided; it can be installed on the client for use on singleplayer worlds, but clients without this mod can connect to servers with this mod installed without losing functionality.

VanillaDeathChest can be paired with [Game Stages](https://www.curseforge.com/minecraft/mc-mods/game-stages) and CraftTweaker to make accessing death chests more difficult for players as they progress.

如果有属性没用CraftTweaker设置的话，将会使用全局配置中的设置。 游戏阶段要按顺序定义 调用任何原版死亡箱子函数，如果还未定义指定阶段的话，将自动定义此阶段。

任何带参数的消息，比如解锁失败的聊天信息，用 [这个](https://dzone.com/articles/java-string-format-examples) 格式。 比如，`%2$s` 指第二个参数。