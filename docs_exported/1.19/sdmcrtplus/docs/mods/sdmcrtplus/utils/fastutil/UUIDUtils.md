# UUIDUtils

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.utils.fastutils.UUIDUtils;
```


## Static Methods

:::group{name=fromString}

Return Type: **invalid**

```zenscript
UUIDUtils.fromString(uuid as string) as invalid
```

| Parameter |  Type  |
|-----------|--------|
| uuid      | string |


:::

:::group{name=nameUUIDFromBytes}

Return Type: **invalid**

```zenscript
UUIDUtils.nameUUIDFromBytes(name as byte[]) as invalid
```

| Parameter |  Type  |
|-----------|--------|
| name      | byte[] |


:::

:::group{name=randomUUID}

Return Type: **invalid**

```zenscript
// UUIDUtils.randomUUID() as invalid

UUIDUtils.randomUUID();
```

:::

