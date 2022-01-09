# MCCropGrowPreEvent



The event is not cancelable.

The event has a result.

If result is set to `default`, the default vanilla growth mechanics will run.

If result is set to `allow`, it will force the plant to advance a growth stage.

If result is set to `deny`, it will prevent the plant from advancing a growth stage



## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.block.MCCropGrowPreEvent;
```


## Extending MCCropGrowEvent

MCCropGrowPreEvent extends [MCCropGrowEvent](/vanilla/api/event/block/MCCropGrowEvent). That means all methods available in [MCCropGrowEvent](/vanilla/api/event/block/MCCropGrowEvent) are also available in MCCropGrowPreEvent

