# PostCropGrowEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.block.crop.PostCropGrowEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.block.crop.PostCropGrowEvent>(event => {
    println("PostCropGrowEvent ran!");
});
```


## Supertype

PostCropGrowEvent extends [CropGrowEvent](/neoforge/api/event/block/crop/CropGrowEvent). That means all methods available in [CropGrowEvent](/neoforge/api/event/block/crop/CropGrowEvent) are also available in PostCropGrowEvent

## Properties

|     Name      |                    Type                     | Has Getter | Has Setter |
|---------------|---------------------------------------------|------------|------------|
| originalState | [BlockState](/vanilla/api/block/BlockState) | true       | false      |

