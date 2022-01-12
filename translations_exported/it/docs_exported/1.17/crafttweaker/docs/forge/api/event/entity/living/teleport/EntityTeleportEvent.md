# EntityTeleportEvent

EntityTeleportEvent is fired when an event involving any teleportation of an Entity occurs.

 This event is fired for all types of teleportation, it is generally advised to use the specific teleport events to target a specific thing instead of this event.

The event is cancelable.

If the event is canceled, the teleport won't happen.

The event does not have a result.



## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.living.teleport.EntityTeleportEvent;
```


## Extending EntityEvent

EntityTeleportEvent extends [EntityEvent](/forge/api/event/entity/EntityEvent). That means all methods available in [EntityEvent](/forge/api/event/entity/EntityEvent) are also available in EntityTeleportEvent

## Metodi

:::group{name=getPrev}

Return Type: [Vec3](/vanilla/api/util/math/Vec3)

```zenscript
// EntityTeleportEvent.getPrev() as Vec3

myEntityTeleportEvent.getPrev();
```

:::

:::group{name=getPrevX}

Return Type: double

```zenscript
// EntityTeleportEvent.getPrevX() as double

myEntityTeleportEvent.getPrevX();
```

:::

:::group{name=getPrevY}

Return Type: double

```zenscript
// EntityTeleportEvent.getPrevY() as double

myEntityTeleportEvent.getPrevY();
```

:::

:::group{name=getPrevZ}

Return Type: double

```zenscript
// EntityTeleportEvent.getPrevZ() as double

myEntityTeleportEvent.getPrevZ();
```

:::

:::group{name=getTarget}

Return Type: [Vec3](/vanilla/api/util/math/Vec3)

```zenscript
// EntityTeleportEvent.getTarget() as Vec3

myEntityTeleportEvent.getTarget();
```

:::

:::group{name=getTargetX}

Return Type: double

```zenscript
// EntityTeleportEvent.getTargetX() as double

myEntityTeleportEvent.getTargetX();
```

:::

:::group{name=getTargetY}

Return Type: double

```zenscript
// EntityTeleportEvent.getTargetY() as double

myEntityTeleportEvent.getTargetY();
```

:::

:::group{name=getTargetZ}

Return Type: double

```zenscript
// EntityTeleportEvent.getTargetZ() as double

myEntityTeleportEvent.getTargetZ();
```

:::

:::group{name=setTargetX}

Return Type: void

```zenscript
EntityTeleportEvent.setTargetX(targetX as double) as void
```

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| targetX   | double | No Description Provided |


:::

:::group{name=setTargetY}

Return Type: void

```zenscript
EntityTeleportEvent.setTargetY(targetY as double) as void
```

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| targetY   | double | No Description Provided |


:::

:::group{name=setTargetZ}

Return Type: void

```zenscript
EntityTeleportEvent.setTargetZ(targetZ as double) as void
```

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| targetZ   | double | No Description Provided |


:::


## Proprietà

| Nome    | Tipo                                | Ha Getter | Ha Setter | Descrizione             |
| ------- | ----------------------------------- | --------- | --------- | ----------------------- |
| prev    | [Vec3](/vanilla/api/util/math/Vec3) | sì        | no        | No Description Provided |
| prevX   | double                              | sì        | no        | No Description Provided |
| prevY   | double                              | sì        | no        | No Description Provided |
| prevZ   | double                              | sì        | no        | No Description Provided |
| target  | [Vec3](/vanilla/api/util/math/Vec3) | sì        | no        | No Description Provided |
| targetX | double                              | sì        | sì        | No Description Provided |
| targetY | double                              | sì        | sì        | No Description Provided |
| targetZ | double                              | sì        | sì        | No Description Provided |

