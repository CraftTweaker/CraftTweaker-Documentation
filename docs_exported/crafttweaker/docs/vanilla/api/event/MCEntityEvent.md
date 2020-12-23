# MCEntityEvent

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
import crafttweaker.api.event.entity.MCEntityEvent;
```


## Extending MCEvent

MCEntityEvent extends [MCEvent](/vanilla/api/event/MCEvent). That means all methods available in [MCEvent](/vanilla/api/event/MCEvent) are also available in MCEntityEvent

## Methods

### getEntity

Return Type: [MCEntity](/vanilla/api/entity/MCEntity)

```zenscript
MCEntityEvent.getEntity() as MCEntity
myMCEntityEvent.getEntity()
```

## Properties

| Name | Type | Has Getter | Has Setter |
|------|------|------------|------------|
| entity | [MCEntity](/vanilla/api/entity/MCEntity) | true | false |

