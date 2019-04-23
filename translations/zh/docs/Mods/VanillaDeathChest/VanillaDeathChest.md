# VanillaDeathChest

## 信息

[VanillaDeathChest](https://minecraft.curseforge.com/projects/vanilladeathchest) 在玩家死亡的位置放置一个包含了生前所有物品的箱子（或潜影盒）。VanillaDeathChest 只需要装在服务器端；也可以装在客户端供单机游玩，但是没装这个 mod 的玩家也可以连到装有这个 mod 的服务器上，并且死亡箱功能依然存在。

VanillaDeathChest 可以配合 [Game Stages](https://minecraft.curseforge.com/projects/game-stages) 和 CraftTweaker 来让死亡箱的使用随着玩家发展越来越困难。

如果有属性没用 CraftTweaker 设置的话，将会使用全局配置中的设置。 Game stages should be defined in order. Calling any of the VanillaDeathChest functions causes the specified stage to be defined if it has not been already.

Any messages that take arguments, such as the unlock failed chat message, follow [this](https://dzone.com/articles/java-string-format-examples) format. For example, `%2$s` refers to the second argument.