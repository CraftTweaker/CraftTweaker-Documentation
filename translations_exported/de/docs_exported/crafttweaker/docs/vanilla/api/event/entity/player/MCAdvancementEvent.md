# MCAdvancementEvent

This event is fired every time the player earns an advancement. This happens after the advancement has already been earned so it can not be prevented.

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.player.MCAdvancementEvent;
```


## Extending MCPlayerEvent

MCAdvancementEvent extends [MCPlayerEvent](/vanilla/api/event/entity/player/MCPlayerEvent). That means all methods available in [MCPlayerEvent](/vanilla/api/event/entity/player/MCPlayerEvent) are also available in MCAdvancementEvent

## Methoden

### getId

Gets the ID of the advancement being unlocked.

Return Type: [MCResourceLocation](/vanilla/api/util/MCResourceLocation)

```zenscript
MCAdvancementEvent.getId() as MCResourceLocation
event.getId();
```


## Properties

| Name | Type                                                        | Has Getter | Has Setter |
| ---- | ----------------------------------------------------------- | ---------- | ---------- |
| id   | [MCResource-Standort](/vanilla/api/util/MCResourceLocation) | true       | false      |

