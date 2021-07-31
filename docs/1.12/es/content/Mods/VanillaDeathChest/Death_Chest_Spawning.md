# Death Chest Spawning

## Importing the package

`import mods.vanilladeathchest.DeathChestSpawning;`

## Chat message

```zenscript
//DeathChestSpawning.setChatMessage(string stage, string message);
DeathChestSpawning.setChatMessage("example_stage", "A chest appears at [%s, %s, %s]!");
```

The string takes three arguments: the X, Y and Z coordinates of the death chest.

## Container display name

```zenscript
//DeathChestSpawning.setContainerDisplayName(string stage, string name);
DeathChestSpawning.setContainerDisplayName("example_stage", "Your Items");
```

## Registry name regex

```zenscript
//DeathChestSpawning.setRegistryNameRegex(string stage, string regex);
DeathChestSpawning.setRegistryNameRegex("example_stage", ".*dirt.*");
```

## Use container in inventory

```zenscript
//DeathChestSpawning.setUseContainerInInventory(string stage, bool flag);
DeathChestSpawning.setUseContainerInInventory("example_stage", false);
```