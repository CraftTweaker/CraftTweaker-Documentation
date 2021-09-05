# MCEntityTravelToDimensionEvent

The event is fired before an Entity travels to a dimension.
 <br>
 `dimension` getter is the id of the dimension the entity is traveling to.

The event is cancelable.

If the event is canceled, the Entity will not travel to the dimension.

The event does not have a result.



## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.MCEntityTravelToDimensionEvent;
```


## Extending MCEntityEvent

MCEntityTravelToDimensionEvent extends [MCEntityEvent](/vanilla/api/event/entity/MCEntityEvent). That means all methods available in [MCEntityEvent](/vanilla/api/event/entity/MCEntityEvent) are also available in MCEntityTravelToDimensionEvent

## Properties

| Name      | Type                                                        | Has Getter | Has Setter | Beschreibung            |
| --------- | ----------------------------------------------------------- | ---------- | ---------- | ----------------------- |
| dimension | [MCResource-Standort](/vanilla/api/util/MCResourceLocation) | true       | false      | No Description Provided |

