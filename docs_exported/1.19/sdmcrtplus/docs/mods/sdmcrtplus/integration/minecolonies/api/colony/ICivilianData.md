# ICivilianData

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.colony.ICivilianData;
```


## Implemented Interfaces
ICivilianData implements the following interfaces. That means all methods defined in these interfaces are also available in ICivilianData

- [ICitizen](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizen)

## Methods

:::group{name=clearDirty}

```zenscript
// ICivilianData.clearDirty()

myICivilianData.clearDirty();
```

:::

:::group{name=decreaseSaturation}

```zenscript
ICivilianData.decreaseSaturation(var1 as double)
```

| Parameter |  Type  |
|-----------|--------|
| var1      | double |


:::

:::group{name=getEntity}

Return Type: [Optional](/mods/sdmcrtplus/utils/core/Optional)

```zenscript
// ICivilianData.getEntity() as Optional

myICivilianData.getEntity();
```

:::

:::group{name=getSoundProfile}

Return Type: int

```zenscript
// ICivilianData.getSoundProfile() as int

myICivilianData.getSoundProfile();
```

:::

:::group{name=getTextureId}

Return Type: int

```zenscript
// ICivilianData.getTextureId() as int

myICivilianData.getTextureId();
```

:::

:::group{name=getTextureSuffix}

Return Type: string

```zenscript
// ICivilianData.getTextureSuffix() as string

myICivilianData.getTextureSuffix();
```

:::

:::group{name=increaseSaturation}

```zenscript
ICivilianData.increaseSaturation(var1 as double)
```

| Parameter |  Type  |
|-----------|--------|
| var1      | double |


:::

:::group{name=initEntityValues}

```zenscript
// ICivilianData.initEntityValues()

myICivilianData.initEntityValues();
```

:::

:::group{name=initForNewCivilian}

```zenscript
// ICivilianData.initForNewCivilian()

myICivilianData.initForNewCivilian();
```

:::

:::group{name=isDirty}

Return Type: boolean

```zenscript
// ICivilianData.isDirty() as boolean

myICivilianData.isDirty();
```

:::

:::group{name=markDirty}

```zenscript
// ICivilianData.markDirty()

myICivilianData.markDirty();
```

:::

:::group{name=onResponseTriggered}

```zenscript
ICivilianData.onResponseTriggered(var1 as Component, var2 as int, var3 as Player)
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| var1      | [Component](/vanilla/api/text/Component)         |
| var2      | int                                              |
| var3      | [Player](/vanilla/api/entity/type/player/Player) |


:::

:::group{name=setEntity}

```zenscript
ICivilianData.setEntity(var1 as AbstractCivilianEntity?)
```

| Parameter |                                                      Type                                                      |
|-----------|----------------------------------------------------------------------------------------------------------------|
| var1      | [AbstractCivilianEntity](/mods/sdmcrtplus/integration/minecolonies/api/entity/citizen/AbstractCivilianEntity)? |


:::

:::group{name=setGender}

```zenscript
ICivilianData.setGender(var1 as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| var1      | boolean |


:::

:::group{name=setGenderAndGenerateName}

```zenscript
ICivilianData.setGenderAndGenerateName(var1 as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| var1      | boolean |


:::

:::group{name=setName}

```zenscript
ICivilianData.setName(var1 as string)
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |


:::

:::group{name=setSuffix}

```zenscript
ICivilianData.setSuffix(var1 as string)
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |


:::

:::group{name=tick}

```zenscript
// ICivilianData.tick()

myICivilianData.tick();
```

:::

:::group{name=triggerInteraction}

```zenscript
ICivilianData.triggerInteraction(var1 as invalid)
```

| Parameter |    Type     |
|-----------|-------------|
| var1      | **invalid** |


:::

:::group{name=updateEntityIfNecessary}

```zenscript
// ICivilianData.updateEntityIfNecessary()

myICivilianData.updateEntityIfNecessary();
```

:::


