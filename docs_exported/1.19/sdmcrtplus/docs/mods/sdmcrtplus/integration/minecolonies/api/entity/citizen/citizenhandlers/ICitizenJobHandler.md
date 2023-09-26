# ICitizenJobHandler

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.entity.citizen.citizenhandlers.ICitizenJobHandler;
```


## Methods

:::group{name=getColonyJob}

Return Type: [IJob](/mods/sdmcrtplus/integration/minecolonies/api/colony/jobs/IJob)&lt;AI&gt;?

```zenscript
// ICitizenJobHandler.getColonyJob() as IJob<AI>?

myICitizenJobHandler.getColonyJob();
```

:::

:::group{name=onJobChanged}

```zenscript
ICitizenJobHandler.onJobChanged(var1 as IJob<AI>?)
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| var1      | [IJob](/mods/sdmcrtplus/integration/minecolonies/api/colony/jobs/IJob)&lt;AI&gt;? |


:::

:::group{name=setModelDependingOnJob}

```zenscript
ICitizenJobHandler.setModelDependingOnJob(var1 as IJob<AI>?)
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| var1      | [IJob](/mods/sdmcrtplus/integration/minecolonies/api/colony/jobs/IJob)&lt;AI&gt;? |


:::

:::group{name=shouldRunAvoidance}

Return Type: boolean

```zenscript
// ICitizenJobHandler.shouldRunAvoidance() as boolean

myICitizenJobHandler.shouldRunAvoidance();
```

:::


