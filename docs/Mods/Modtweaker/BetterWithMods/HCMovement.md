# HCMovement

HCMovement effects the speed at which the Player can move while on or inside certain blocks.
For example by default you walk slower on grass but faster on stone.

Value is a decimal number between 0 and 2, where 1 is the normal speed without HCMovement, less than 1 is slower, greater than 1 is faster.

HCMovement ONLY accepts Blocks as inputs.

```
mods.betterwithmods.Movement.set(IItemStack stack, float value);

```