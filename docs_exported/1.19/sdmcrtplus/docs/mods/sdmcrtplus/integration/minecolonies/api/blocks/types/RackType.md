# RackType

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.blocks.types.RackType;
```


## Implemented Interfaces
RackType implements the following interfaces. That means all methods defined in these interfaces are also available in RackType

- [StringRepresentable](/vanilla/api/util/StringRepresentable)

## Enum Constants

RackType is an enum. It has 5 enum constants. They are accessible using the code below.

```zenscript
<constant:minecolonies:building/rack/type:default>
<constant:minecolonies:building/rack/type:full>
<constant:minecolonies:building/rack/type:defaultdouble>
<constant:minecolonies:building/rack/type:fulldouble>
<constant:minecolonies:building/rack/type:emptyair>
```
## Methods

:::group{name=getInvBasedVariant}

Return Type: [RackType](/mods/sdmcrtplus/integration/minecolonies/api/blocks/types/RackType)

```zenscript
RackType.getInvBasedVariant(empty as boolean) as RackType
```

| Parameter |  Type   |
|-----------|---------|
| empty     | boolean |


:::

:::group{name=getName}

Return Type: string

```zenscript
// RackType.getName() as string

myRackType.getName();
```

:::

:::group{name=getTranslationKey}

Return Type: string

```zenscript
// RackType.getTranslationKey() as string

myRackType.getTranslationKey();
```

:::

:::group{name=isDoubleVariant}

Return Type: boolean

```zenscript
// RackType.isDoubleVariant() as boolean

myRackType.isDoubleVariant();
```

:::

:::group{name=toString}

Return Type: string

```zenscript
// RackType.toString() as string

myRackType.toString();
```

:::


