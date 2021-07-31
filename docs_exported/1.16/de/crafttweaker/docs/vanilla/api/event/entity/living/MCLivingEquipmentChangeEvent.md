# MCLivingEquipmentChangeEvent

The event is not cancelable.

The event does not have a result.

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.living.MCLivingEquipmentChangeEvent;
```


## Extending MCLivingEvent

MCLivingEquipmentChangeEvent extends [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent). That means all methods available in [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent) are also available in MCLivingEquipmentChangeEvent

## Properties

| Name | Type                                                         | Has Getter | Has Setter |
| ---- | ------------------------------------------------------------ | ---------- | ---------- |
| from | [IItemStack](/vanilla/api/items/IItemStack)                  | true       | false      |
| slot | [MCEquipmentSlotType](/vanilla/api/util/MCEquipmentSlotType) | true       | false      |
| to   | [IItemStack](/vanilla/api/items/IItemStack)                  | true       | false      |

