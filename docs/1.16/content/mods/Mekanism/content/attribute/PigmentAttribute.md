# PigmentAttribute

Marker interface for [Pigment](/mods/Mekanism/api/chemical/Pigment) attributes to make it so that
people don't accidentally add attributes to different chemical types that may not be expecting them,
or have a sense of how to handle them.

This class was added by a mod with mod-id `mekanism`. So you need to have this mod installed if you
want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an
Array), so better be safe than sorry and add the import at the very top of the file.

```zenscript
import mods.mekanism.content.attribute.PigmentAttribute;
```

## Implemented Interfaces

PigmentAttribute implements the following interfaces. That means all methods defined in these
interfaces are also available in PigmentAttribute

- [ChemicalAttribute](/mods/Mekanism/content/attribute/ChemicalAttribute)

