# IRequester

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.colony.requestsystem.requester.IRequester;
```


## Methods

:::group{name=getId}

Return Type: [IToken](/mods/sdmcrtplus/integration/minecolonies/api/colony/requestsystem/token/IToken)

```zenscript
// IRequester.getId() as IToken

myIRequester.getId();
```

:::

:::group{name=getLocation}

Return Type: [ILocation](/mods/sdmcrtplus/integration/minecolonies/api/colony/requestsystem/location/ILocation)

```zenscript
// IRequester.getLocation() as ILocation

myIRequester.getLocation();
```

:::

:::group{name=getRequesterDisplayName}

Return Type: [MutableComponent](/vanilla/api/text/MutableComponent)

```zenscript
IRequester.getRequesterDisplayName(var1 as IRequestManager, var2 as IRequest) as MutableComponent
```

| Parameter |                                                    Type                                                     |
|-----------|-------------------------------------------------------------------------------------------------------------|
| var1      | [IRequestManager](/mods/sdmcrtplus/integration/minecolonies/api/colony/managers/interfaces/IRequestManager) |
| var2      | [IRequest](/mods/sdmcrtplus/integration/minecolonies/api/colony/requestsystem/request/IRequest)             |


:::

:::group{name=onRequestedRequestCancelled}

```zenscript
IRequester.onRequestedRequestCancelled(var1 as IRequestManager, var2 as IRequest)
```

| Parameter |                                                    Type                                                     |
|-----------|-------------------------------------------------------------------------------------------------------------|
| var1      | [IRequestManager](/mods/sdmcrtplus/integration/minecolonies/api/colony/managers/interfaces/IRequestManager) |
| var2      | [IRequest](/mods/sdmcrtplus/integration/minecolonies/api/colony/requestsystem/request/IRequest)             |


:::

:::group{name=onRequestedRequestComplete}

```zenscript
IRequester.onRequestedRequestComplete(var1 as IRequestManager, var2 as IRequest)
```

| Parameter |                                                    Type                                                     |
|-----------|-------------------------------------------------------------------------------------------------------------|
| var1      | [IRequestManager](/mods/sdmcrtplus/integration/minecolonies/api/colony/managers/interfaces/IRequestManager) |
| var2      | [IRequest](/mods/sdmcrtplus/integration/minecolonies/api/colony/requestsystem/request/IRequest)             |


:::


