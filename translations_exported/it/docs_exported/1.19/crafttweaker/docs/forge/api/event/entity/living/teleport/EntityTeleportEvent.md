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

```zenscript
EntityTeleportEvent.setTargetX(targetX as double)
```

| Parametro | Tipo   |
| --------- | ------ |
| targetX   | double |


:::

:::group{name=setTargetY}

```zenscript
EntityTeleportEvent.setTargetY(targetY as double)
```

| Parametro | Tipo   |
| --------- | ------ |
| targetY   | double |


:::

:::group{name=setTargetZ}

```zenscript
EntityTeleportEvent.setTargetZ(targetZ as double)
```

| Parametro | Tipo   |
| --------- | ------ |
| targetZ   | double |


:::


## Proprietà

| Nome    | Tipo                                | Ha Getter | Ha Setter |
| ------- | ----------------------------------- | --------- | --------- |
| prev    | [Vec3](/vanilla/api/util/math/Vec3) | sì        | no        |
| prevX   | double                              | sì        | no        |
| prevY   | double                              | sì        | no        |
| prevZ   | double                              | sì        | no        |
| target  | [Vec3](/vanilla/api/util/math/Vec3) | sì        | no        |
| targetX | double                              | sì        | sì        |
| targetY | double                              | sì        | sì        |
| targetZ | double                              | sì        | sì        |

