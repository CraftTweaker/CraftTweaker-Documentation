# MCPlayerEvent

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.player.MCPlayerEvent;
```


## Extending MCLivingEvent

MCPlayerEvent extends [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent). That means all methods available in [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent) are also available in MCPlayerEvent

## Methoden

### getPlayer

Return Type: [MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity)

```zenscript
MCPlayerEvent.getPlayer() as MCPlayerEntity
myMCPlayerEvent.getPlayer();
```

## Properties

| Name   | Type                                                 | Has Getter | Has Setter |
| ------ | ---------------------------------------------------- | ---------- | ---------- |
| player | [MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity) | true       | false      |

