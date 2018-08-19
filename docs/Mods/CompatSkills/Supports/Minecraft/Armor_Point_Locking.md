# Armor-Value Locking

## Feature:
This type of lock, locks the ability to use armor that provides a certain amount of Armor Points behind a set of requirements.
This means that if an armor provides 0.75 armor point, as in the example below, you can lock it behind only being useable in the End (Aka Dim 1)!

## Syntax:
```
mods.compatskills.ArmorLock.addArmorLock(double armor, String... requirements);

mods.compatskills.ArmorLock.addArmorLock(0.75, "dim|1");
```