# EnderPearlTeleportEvent

EnderPearlTeleportEvent is fired before an Entity is teleported from a ThrownEnderpearl.

The event is cancelable.

If the event is canceled, the teleport won't happen.

The event does not have a result.



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.living.teleport.EnderPearlTeleportEvent;
```


## Extending EntityTeleportEvent

EnderPearlTeleportEvent extends [EntityTeleportEvent](/forge/api/event/entity/living/teleport/EntityTeleportEvent). That means all methods available in [EntityTeleportEvent](/forge/api/event/entity/living/teleport/EntityTeleportEvent) are also available in EnderPearlTeleportEvent

## Methods

:::group{name=getAttackDamage}

Return Type: float

```zenscript
// EnderPearlTeleportEvent.getAttackDamage() as float

myEnderPearlTeleportEvent.getAttackDamage();
```

:::

:::group{name=getPearlEntity}

Return Type: [ThrownEnderpearl](/vanilla/api/entity/type/projectile/ThrownEnderpearl)

```zenscript
// EnderPearlTeleportEvent.getPearlEntity() as ThrownEnderpearl

myEnderPearlTeleportEvent.getPearlEntity();
```

:::

:::group{name=getPlayer}

Return Type: [ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)

```zenscript
// EnderPearlTeleportEvent.getPlayer() as ServerPlayer

myEnderPearlTeleportEvent.getPlayer();
```

:::

:::group{name=setAttackDamage}

```zenscript
EnderPearlTeleportEvent.setAttackDamage(attackDamage as float)
```

| Parameter    | Type  |
| ------------ | ----- |
| attackDamage | float |


:::


## Properties

| 名称           | Type                                                                     | Has Getter | Has Setter |
| ------------ | ------------------------------------------------------------------------ | ---------- | ---------- |
| attackDamage | float                                                                    | true       | true       |
| pearlEntity  | [ThrownEnderpearl](/vanilla/api/entity/type/projectile/ThrownEnderpearl) | true       | false      |
| player       | [ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)             | true       | false      |

