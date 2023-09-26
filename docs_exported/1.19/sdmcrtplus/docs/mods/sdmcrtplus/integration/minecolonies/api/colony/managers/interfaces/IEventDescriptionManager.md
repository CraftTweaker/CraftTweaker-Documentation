# IEventDescriptionManager

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.colony.managers.interfaces.IEventDescriptionManager;
```


## Methods

:::group{name=addEventDescription}

```zenscript
IEventDescriptionManager.addEventDescription(var1 as IColonyEventDescription)
```

| Parameter |                                                                    Type                                                                     |
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------|
| var1      | [IColonyEventDescription](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/colonyEvents/descriptions/IColonyEventDescription) |


:::

:::group{name=getEventDescriptions}

Return Type: stdlib.List&lt;[IColonyEventDescription](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/colonyEvents/descriptions/IColonyEventDescription)&gt;

```zenscript
// IEventDescriptionManager.getEventDescriptions() as stdlib.List<IColonyEventDescription>

myIEventDescriptionManager.getEventDescriptions();
```

:::


