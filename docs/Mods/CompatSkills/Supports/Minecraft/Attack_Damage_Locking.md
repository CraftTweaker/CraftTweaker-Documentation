# Attack Damage Locking

## Feature:
This feature locks the ability for the player to use a weapon/tool with an attack damage value equal to or greater than the set amount.
This means like in the example below, any weapon with Attack Damage 0.75 or greater will only be useable in the end.

For reference: 1 Heart = 1.00, 1 Damage in-game is 0.5 Hearts so 0.50 for the lock!

## Syntax:
```
mods.compatskills.DamageLock.addDamageLock(double damage, String... requirements);

mods.compatskills.DamageLock.addDamageLock(0.75, "dim|1");
```