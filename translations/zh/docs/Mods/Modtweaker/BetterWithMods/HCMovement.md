# HCMovement

HHCMovement 影响玩家在某些方块上或内部移动的速度。 例如，默认情况下，您在草地上行走较慢，但在石头上行走较快。

值是 0 和 2 之间的十进制数字，其中，1 是不带HCMovement的正常速度。 小于1更慢，大于1更快。

HCMovement 仅接受方块作为输入。

```zenscript
mods.betterwithmods.Movement.set(IItemStack, float value);

```