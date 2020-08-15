# HCMovement

HCMovementは、特定のブロックの上または中でプレイヤーが移動できる速度に影響します。 たとえば、デフォルトでは、草ではゆっくり歩くが、石では速く歩く。

値は0から2の間の10進数で、1はHCMovementなしで通常の速度です。 1未満は遅く、1より大きい方が速いです。

HCMovementはブロックを入力として受け付けます。

```zenscript
mods.betterwithmods.Movement.set(IItemStack stack, float value);

```