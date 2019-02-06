# Death Chest Defense

## Importing the package
`import mods.vanilladeathchest.DeathChestDefense;`

## Unlocker item
```
//DeathChestDefense.setUnlocker(string stage, IItemStack unlocker);
DeathChestDefense.setUnlocker("example_stage", <minecraft:diamond_axe>);
```
A consumption/damage amount can also be set.

## Damage the unlocker item rather than consuming it
```
DeathChestDefense.setDamageUnlockerInsteadOfConsume(string stage, bool flag);
DeathChestDefense.setDamageUnlockerInsteadOfConsume("example_stage", true);
```

## Unlock failed chat message
```
//DeathChestDefense.setUnlockFailedChatMessage(string stage, string message);
DeathChestDefense.setUnlockFailedChatMessage("example_stage", "You need to get a %2$ to unlock your chest!");
```
The string takes two arguments: the amount and display name of the required items.

## Defense entity
```
//DeathChestDefense.setDefenseEntity(string stage, IEntityDefinition defenseEntity);
DeathChestDefense.setDefenseEntity("example_stage", <entity:minecraft:zombie_pigman>);
```

## Defense entity NBT
```
//DeathChestDefense.setDefenseEntityNBT(string stage, IData nbt);
DeathChestDefense.setDefenseEntityNBT("example_stage", {
	HandItems: [
		{
			Count: 1,
			id: "minecraft:diamond_sword"
		}
	]
});
```
`nbt` should be a [DataMap](/Vanilla/Data/DataMap/).

## Defense entity spawn count
```
//DeathChestDefense.setDefenseEntitySpawnCount(string stage, int count);
DeathChestDefense.setDefenseEntitySpawnCount("example_stage", 500);
```
