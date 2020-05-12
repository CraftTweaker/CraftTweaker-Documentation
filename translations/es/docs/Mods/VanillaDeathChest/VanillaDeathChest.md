# VanillaDeathChest

## Information

[VanillaDeathChest](https://minecraft.curseforge.com/projects/vanilladeathchest) places chests (or shulker boxes) where players die containing all of their items.VanillaDeathChest is completely server-sided; it can be installed on the client for use on singleplayer worlds, but clients without this mod can connect to servers with this mod installed without losing functionality.

VanillaDeathChest can be paired with [Game Stages](https://minecraft.curseforge.com/projects/game-stages) and CraftTweaker to make accessing death chests more difficult for players as they progress.

If any properties are not set via CraftTweaker, the values set in the global configuration are used. Game stages should be defined in order. Calling any of the VanillaDeathChest functions causes the specified stage to be defined if it has not been already.

Any messages that take arguments, such as the unlock failed chat message, follow [this](https://dzone.com/articles/java-string-format-examples) format. For example, `%2$s` refers to the second argument.