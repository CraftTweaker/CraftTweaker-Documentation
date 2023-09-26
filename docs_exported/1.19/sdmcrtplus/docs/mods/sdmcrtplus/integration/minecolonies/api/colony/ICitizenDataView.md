# ICitizenDataView

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.colony.ICitizenDataView;
```


## Implemented Interfaces
ICitizenDataView implements the following interfaces. That means all methods defined in these interfaces are also available in ICitizenDataView

- [ICitizen](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizen)

## Methods

:::group{name=getChildren}

Return Type: stdlib.List&lt;int?&gt;

```zenscript
// ICitizenDataView.getChildren() as stdlib.List<int?>

myICitizenDataView.getChildren();
```

:::

:::group{name=getCitizenSkillHandler}

Return Type: [ICitizenSkillHandler](/mods/sdmcrtplus/integration/minecolonies/api/entity/citizen/citizenhandlers/ICitizenSkillHandler)

```zenscript
// ICitizenDataView.getCitizenSkillHandler() as ICitizenSkillHandler

myICitizenDataView.getCitizenSkillHandler();
```

:::

:::group{name=getColonyId}

Return Type: int

```zenscript
// ICitizenDataView.getColonyId() as int

myICitizenDataView.getColonyId();
```

:::

:::group{name=getCustomTexture}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// ICitizenDataView.getCustomTexture() as ResourceLocation

myICitizenDataView.getCustomTexture();
```

:::

:::group{name=getEntityId}

Return Type: int

```zenscript
// ICitizenDataView.getEntityId() as int

myICitizenDataView.getEntityId();
```

:::

:::group{name=getHappiness}

Return Type: double

```zenscript
// ICitizenDataView.getHappiness() as double

myICitizenDataView.getHappiness();
```

:::

:::group{name=getHappinessHandler}

Return Type: [ICitizenHappinessHandler](/mods/sdmcrtplus/integration/minecolonies/api/entity/citizen/citizenhandlers/ICitizenHappinessHandler)

```zenscript
// ICitizenDataView.getHappinessHandler() as ICitizenHappinessHandler

myICitizenDataView.getHappinessHandler();
```

:::

:::group{name=getHealth}

Return Type: double

```zenscript
// ICitizenDataView.getHealth() as double

myICitizenDataView.getHealth();
```

:::

:::group{name=getHomeBuilding}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)?

```zenscript
// ICitizenDataView.getHomeBuilding() as BlockPos?

myICitizenDataView.getHomeBuilding();
```

:::

:::group{name=getInteractionIcon}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// ICitizenDataView.getInteractionIcon() as ResourceLocation

myICitizenDataView.getInteractionIcon();
```

:::

:::group{name=getJob}

Return Type: string

```zenscript
// ICitizenDataView.getJob() as string

myICitizenDataView.getJob();
```

:::

:::group{name=getJobView}

Return Type: **invalid**?

```zenscript
// ICitizenDataView.getJobView() as invalid?

myICitizenDataView.getJobView();
```

:::

:::group{name=getMaxHealth}

Return Type: double

```zenscript
// ICitizenDataView.getMaxHealth() as double

myICitizenDataView.getMaxHealth();
```

:::

:::group{name=getParents}

Return Type: string[string]

```zenscript
// ICitizenDataView.getParents() as string[string]

myICitizenDataView.getParents();
```

:::

:::group{name=getPartner}

Return Type: int??

```zenscript
// ICitizenDataView.getPartner() as int??

myICitizenDataView.getPartner();
```

:::

:::group{name=getPosition}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// ICitizenDataView.getPosition() as BlockPos

myICitizenDataView.getPosition();
```

:::

:::group{name=getSiblings}

Return Type: stdlib.List&lt;int?&gt;

```zenscript
// ICitizenDataView.getSiblings() as stdlib.List<int?>

myICitizenDataView.getSiblings();
```

:::

:::group{name=getVisibleStatus}

Return Type: **invalid**

```zenscript
// ICitizenDataView.getVisibleStatus() as invalid

myICitizenDataView.getVisibleStatus();
```

:::

:::group{name=getWorkBuilding}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)?

```zenscript
// ICitizenDataView.getWorkBuilding() as BlockPos?

myICitizenDataView.getWorkBuilding();
```

:::

:::group{name=hasBlockingInteractions}

Return Type: boolean

```zenscript
// ICitizenDataView.hasBlockingInteractions() as boolean

myICitizenDataView.hasBlockingInteractions();
```

:::

:::group{name=hasPendingInteractions}

Return Type: boolean

```zenscript
// ICitizenDataView.hasPendingInteractions() as boolean

myICitizenDataView.hasPendingInteractions();
```

:::

:::group{name=hasVisibleInteractions}

Return Type: boolean

```zenscript
// ICitizenDataView.hasVisibleInteractions() as boolean

myICitizenDataView.hasVisibleInteractions();
```

:::

:::group{name=setHomeBuilding}

```zenscript
ICitizenDataView.setHomeBuilding(var1 as BlockPos)
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=setJobView}

```zenscript
ICitizenDataView.setJobView(var1 as invalid)
```

| Parameter |    Type     |
|-----------|-------------|
| var1      | **invalid** |


:::

:::group{name=setWorkBuilding}

```zenscript
ICitizenDataView.setWorkBuilding(var1 as BlockPos)
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::


