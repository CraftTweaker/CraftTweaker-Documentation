# LivingExperienceDropEvent



The event is cancelable.

If the event is canceled, the experience will not drop.

The event does not have a result.



## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.living.LivingExperienceDropEvent;
```


## Extending LivingEvent

LivingExperienceDropEvent extends [LivingEvent](/forge/api/event/entity/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/LivingEvent) are also available in LivingExperienceDropEvent

## Metodi

:::group{name=getAttackingPlayer}

Return Type: [Player](/vanilla/api/entity/type/player/Player)

```zenscript
// LivingExperienceDropEvent.getAttackingPlayer() as Player

myLivingExperienceDropEvent.getAttackingPlayer();
```

:::

:::group{name=getDroppedExperience}

Return Type: int

```zenscript
// LivingExperienceDropEvent.getDroppedExperience() as int

myLivingExperienceDropEvent.getDroppedExperience();
```

:::

:::group{name=getDroppedExperience}

Return Type: void

```zenscript
LivingExperienceDropEvent.getDroppedExperience(value as int) as void
```

| Parametro | Tipo | Descrizione             |
| --------- | ---- | ----------------------- |
| valore    | int  | No Description Provided |


:::

:::group{name=getOriginalExperiencePoints}

Return Type: int

```zenscript
// LivingExperienceDropEvent.getOriginalExperiencePoints() as int

myLivingExperienceDropEvent.getOriginalExperiencePoints();
```

:::


## Proprietà

| Nome                     | Tipo                                             | Ha Getter | Ha Setter | Descrizione             |
| ------------------------ | ------------------------------------------------ | --------- | --------- | ----------------------- |
| attackingPlayer          | [Player](/vanilla/api/entity/type/player/Player) | sì        | no        | No Description Provided |
| droppedExperience        | int                                              | sì        | sì        | No Description Provided |
| originalExperiencePoints | int                                              | sì        | no        | No Description Provided |

