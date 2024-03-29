# EntityTravelToDimensionEvent

The event is fired before an Entity travels to a dimension.
 <br>
 `dimension` getter is the id of the dimension the entity is traveling to.

The event is cancelable.

If the event is canceled, the Entity will not travel to the dimension.

The event does not have a result.



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.EntityTravelToDimensionEvent;
```


## Extending EntityEvent

EntityTravelToDimensionEvent extends [EntityEvent](/forge/api/event/entity/EntityEvent). That means all methods available in [EntityEvent](/forge/api/event/entity/EntityEvent) are also available in EntityTravelToDimensionEvent

## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| dimension | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | true | false | No Description Provided |

