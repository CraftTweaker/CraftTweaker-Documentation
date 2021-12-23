# Chemical

This class was added by a mod with mod-id `mekanism`. So you need to have this mod installed if you
want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an
Array), so better be safe than sorry and add the import at the very top of the file.

```zenscript
import mods.mekanism.api.chemical.Chemical;
```

## Implemented Interfaces

Chemical implements the following interfaces. That means all methods defined in these interfaces are
also available in Chemical

- [HasTranslation](/mods/Mekanism/api/text/HasTranslation)

## Methods

:::group{name=isEmptyType}

Gets whether this chemical is the empty instance.

Returns: `true` if the chemical is the empty instance, `false` otherwise.  
Return Type: boolean

```zenscript
// Chemical.isEmptyType() as boolean

myChemical.isEmptyType();
```

:::

:::group{name=isHidden}

Gets whether this chemical is hidden.

Returns: `true` if the chemical is hidden, `false` otherwise.  
Return Type: boolean

```zenscript
// Chemical.isHidden() as boolean

myChemical.isHidden();
```

:::

:::group{name=getTags}

Gets the tags that this chemical is a part of.

Returns: All the tags this chemical is a part of.
Return Type: Set&lt;[MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt;

```zenscript
// Chemical.getTags() as Set<MCResourceLocation>

myChemical.getTags();
```

:::

## Properties

| Name   | Type                                                                   | Has Getter | Has Setter | Description                               |
|--------|------------------------------------------------------------------------|------------|------------|-------------------------------------------|
| empty  | boolean                                                                | true | false | Whether this chemical is the empty type.  |
| hidden | boolean                                                                | true | false | Whether this chemical is hidden.          |
| tags   | Set&lt;[MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt;  | true | false | Gets the tags that this chemical is a part of. |
