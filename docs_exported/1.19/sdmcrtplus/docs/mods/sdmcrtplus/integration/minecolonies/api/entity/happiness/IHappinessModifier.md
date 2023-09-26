# IHappinessModifier

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.entity.happiness.IHappinessModifier;
```


## Methods

:::group{name=getFactor}

Return Type: double

```zenscript
IHappinessModifier.getFactor(var1 as ICitizenData) as double
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| var1      | [ICitizenData](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenData) |


:::

:::group{name=getId}

Return Type: string

```zenscript
// IHappinessModifier.getId() as string

myIHappinessModifier.getId();
```

:::

:::group{name=getWeight}

Return Type: double

```zenscript
// IHappinessModifier.getWeight() as double

myIHappinessModifier.getWeight();
```

:::

:::group{name=read}

```zenscript
IHappinessModifier.read(var1 as CompoundTag)
```

| Parameter |                      Type                       |
|-----------|-------------------------------------------------|
| var1      | [CompoundTag](/mods/sdmcrtplus/nbt/CompoundTag) |


:::

:::group{name=write}

```zenscript
IHappinessModifier.write(var1 as CompoundTag)
```

| Parameter |                      Type                       |
|-----------|-------------------------------------------------|
| var1      | [CompoundTag](/mods/sdmcrtplus/nbt/CompoundTag) |


:::


