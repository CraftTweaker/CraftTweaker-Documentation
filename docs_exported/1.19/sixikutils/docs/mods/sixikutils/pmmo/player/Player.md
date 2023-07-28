# Player

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.type.player.Player;
```


## Extending LivingEntity

Player extends [LivingEntity](/mods/sixikutils/utils/entity/ExpandLivingEntity). That means all methods available in [LivingEntity](/mods/sixikutils/utils/entity/ExpandLivingEntity) are also available in Player

## Methods

:::group{name=getProjectMmo}

Return Type: [CTPMMOPlayer](/mods/sixikutils/pmmo/player/PMMOPlayer)

```zenscript
// Player.getProjectMmo() as CTPMMOPlayer

myPlayer.getProjectMmo();
```

:::


## Properties

| Name |                          Type                           | Has Getter | Has Setter |
|------|---------------------------------------------------------|------------|------------|
| pmmo | [CTPMMOPlayer](/mods/sixikutils/pmmo/player/PMMOPlayer) | true       | false      |

