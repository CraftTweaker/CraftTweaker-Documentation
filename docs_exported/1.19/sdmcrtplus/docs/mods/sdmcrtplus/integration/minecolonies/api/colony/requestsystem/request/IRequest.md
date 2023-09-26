# IRequest&LT;R : IRequestable&GT;

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.colony.requestsystem.request.IRequest;
```


## Methods

:::group{name=getId}

Return Type: T

```zenscript
IRequest.getId<T : IToken>() as T
```

| Parameter |                                           Type                                            |
|-----------|-------------------------------------------------------------------------------------------|
| T         | [IToken](/mods/sdmcrtplus/integration/minecolonies/api/colony/requestsystem/token/IToken) |


:::

:::group{name=getStrategy}

Return Type: [AssigningStrategy](/mods/sdmcrtplus/integration/minecolonies/api/colony/requestsystem/manager/AssigningStrategy)

```zenscript
// IRequest.getStrategy() as AssigningStrategy

myIRequest.getStrategy();
```

:::


