# MCItemExpireEvent

Event that is fired when an EntityItem's age has reached its maximum lifespan.

The event is cancelable.

If the event is canceled, will prevent the EntityItem from being flagged as dead, thus staying it's removal from the world. If canceled it will add more time to the entities life equal to extraLife.

The event does not have a result.



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.item.MCItemExpireEvent;
```


## Extending MCItemEvent

MCItemExpireEvent extends [MCItemEvent](/vanilla/api/event/entity/MCItemEvent). That means all methods available in [MCItemEvent](/vanilla/api/event/entity/MCItemEvent) are also available in MCItemExpireEvent

## Properties

| Name      | Type | Has Getter | Has Setter |
| --------- | ---- | ---------- | ---------- |
| extraLife | int  | true       | true       |

