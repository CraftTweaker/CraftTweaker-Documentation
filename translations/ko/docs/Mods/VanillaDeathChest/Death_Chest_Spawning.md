# Death Chest Spawning

## 패키지 임포트하기

`import mods.vanilladeathchest.DeathChestSpawning;`

## Chat message

    //DeathChestSpawning.setChatMessage(string stage, string message);
    DeathChestSpawning.setChatMessage("example_stage", "A chest appears at [%s, %s, %s]!");
    

The string takes three arguments: the X, Y and Z coordinates of the death chest.

## Container display name

    //DeathChestSpawning.setContainerDisplayName(string stage, string name);
    DeathChestSpawning.setContainerDisplayName("example_stage", "Your Items");