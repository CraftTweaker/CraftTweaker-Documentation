# CompoundTag

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.nbt.CompoundTag;
```


## Implemented Interfaces
CompoundTag implements the following interfaces. That means all methods defined in these interfaces are also available in CompoundTag

- [Tag](/mods/sdmcrtplus/nbt/Tag)

## Constructors


```zenscript
new CompoundTag() as CompoundTag
new CompoundTag();
```

## Methods

:::group{name=copy}

Return Type: [CompoundTag](/mods/sdmcrtplus/nbt/CompoundTag)

```zenscript
// CompoundTag.copy() as CompoundTag

myCompoundTag.copy();
```

:::

:::group{name=getBoolean}

Return Type: boolean

```zenscript
CompoundTag.getBoolean(var1 as string) as boolean
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |


:::

:::group{name=getByte}

Return Type: byte

```zenscript
CompoundTag.getByte(var1 as string) as byte
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |


:::

:::group{name=getByteArray}

Return Type: byte[]

```zenscript
CompoundTag.getByteArray(var1 as string) as byte[]
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |


:::

:::group{name=getCompound}

Return Type: [CompoundTag](/mods/sdmcrtplus/nbt/CompoundTag)

```zenscript
CompoundTag.getCompound(compound as string) as CompoundTag
```

| Parameter |  Type  |
|-----------|--------|
| compound  | string |


:::

:::group{name=getDouble}

Return Type: double

```zenscript
CompoundTag.getDouble(var1 as string) as double
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |


:::

:::group{name=getFloat}

Return Type: float

```zenscript
CompoundTag.getFloat(var1 as string) as float
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |


:::

:::group{name=getInt}

Return Type: int

```zenscript
CompoundTag.getInt(var1 as string) as int
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |


:::

:::group{name=getIntArray}

Return Type: int[]

```zenscript
CompoundTag.getIntArray(var1 as string) as int[]
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |


:::

:::group{name=getList}

Return Type: **invalid**

```zenscript
CompoundTag.getList(var1 as string, var2 as int) as invalid
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |
| var2      | int    |


:::

:::group{name=getLong}

Return Type: long

```zenscript
CompoundTag.getLong(var1 as string) as long
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |


:::

:::group{name=getLongArray}

Return Type: long[]

```zenscript
CompoundTag.getLongArray(var1 as string) as long[]
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |


:::

:::group{name=getShort}

Return Type: short

```zenscript
CompoundTag.getShort(var1 as string) as short
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |


:::

:::group{name=getString}

Return Type: string

```zenscript
CompoundTag.getString(var1 as string) as string
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |


:::

:::group{name=getTag}

Return Type: [Tag](/mods/sdmcrtplus/nbt/Tag)?

```zenscript
CompoundTag.getTag(var1 as string) as Tag?
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |


:::

:::group{name=getTagType}

Return Type: byte

```zenscript
CompoundTag.getTagType(var1 as string) as byte
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |


:::

:::group{name=getUUID}

Return Type: string

```zenscript
CompoundTag.getUUID(var1 as string) as string
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |


:::

:::group{name=hasUUID}

Return Type: boolean

```zenscript
CompoundTag.hasUUID(uuid as string) as boolean
```

| Parameter |  Type  |
|-----------|--------|
| uuid      | string |


:::

:::group{name=isEmpty}

Return Type: boolean

```zenscript
// CompoundTag.isEmpty() as boolean

myCompoundTag.isEmpty();
```

:::

:::group{name=merge}

Return Type: [CompoundTag](/mods/sdmcrtplus/nbt/CompoundTag)

```zenscript
CompoundTag.merge(compoundTag2 as CompoundTag) as CompoundTag
```

|  Parameter   |                      Type                       |
|--------------|-------------------------------------------------|
| compoundTag2 | [CompoundTag](/mods/sdmcrtplus/nbt/CompoundTag) |


:::

:::group{name=put}

Return Type: [Tag](/mods/sdmcrtplus/nbt/Tag)

```zenscript
CompoundTag.put(var1 as string, tag as Tag) as Tag
```

| Parameter |              Type               |
|-----------|---------------------------------|
| var1      | string                          |
| tag       | [Tag](/mods/sdmcrtplus/nbt/Tag) |


:::

:::group{name=putBoolean}

```zenscript
CompoundTag.putBoolean(var1 as string, var2 as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| var1      | string  |
| var2      | boolean |


:::

:::group{name=putByte}

```zenscript
CompoundTag.putByte(var1 as string, var2 as byte)
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |
| var2      | byte   |


:::

:::group{name=putByteArray}

```zenscript
CompoundTag.putByteArray(var1 as string, var2 as byte[])
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |
| var2      | byte[] |


:::

:::group{name=putByteArray}

```zenscript
CompoundTag.putByteArray(var1 as string, var2 as stdlib.List<byte?>)
```

| Parameter |           Type           |
|-----------|--------------------------|
| var1      | string                   |
| var2      | stdlib.List&lt;byte?&gt; |


:::

:::group{name=putDouble}

```zenscript
CompoundTag.putDouble(var1 as string, var2 as double)
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |
| var2      | double |


:::

:::group{name=putFloat}

```zenscript
CompoundTag.putFloat(var1 as string, var2 as float)
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |
| var2      | float  |


:::

:::group{name=putInt}

```zenscript
CompoundTag.putInt(var1 as string, var2 as int)
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |
| var2      | int    |


:::

:::group{name=putIntArray}

```zenscript
CompoundTag.putIntArray(var1 as string, var2 as int[])
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |
| var2      | int[]  |


:::

:::group{name=putIntArray}

```zenscript
CompoundTag.putIntArray(var1 as string, var2 as stdlib.List<int?>)
```

| Parameter |          Type           |
|-----------|-------------------------|
| var1      | string                  |
| var2      | stdlib.List&lt;int?&gt; |


:::

:::group{name=putLong}

```zenscript
CompoundTag.putLong(var1 as string, var2 as long)
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |
| var2      | long   |


:::

:::group{name=putLongArray}

```zenscript
CompoundTag.putLongArray(var1 as string, var2 as long[])
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |
| var2      | long[] |


:::

:::group{name=putLongArray}

```zenscript
CompoundTag.putLongArray(var1 as string, var2 as stdlib.List<long?>)
```

| Parameter |           Type           |
|-----------|--------------------------|
| var1      | string                   |
| var2      | stdlib.List&lt;long?&gt; |


:::

:::group{name=putShort}

```zenscript
CompoundTag.putShort(var1 as string, var2 as short)
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |
| var2      | short  |


:::

:::group{name=putString}

```zenscript
CompoundTag.putString(var1 as string, var2 as string)
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |
| var2      | string |


:::

:::group{name=putUUID}

```zenscript
CompoundTag.putUUID(var1 as string, uuid as string)
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |
| uuid      | string |


:::

:::group{name=remove}

```zenscript
CompoundTag.remove(var1 as string)
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |


:::


