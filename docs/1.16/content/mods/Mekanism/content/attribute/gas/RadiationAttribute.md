# RadiationAttribute

This class was added by a mod with mod-id `mekanism`. So you need to have this mod installed if you
want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an
Array), so better be safe than sorry and add the import at the very top of the file.

```zenscript
import mods.mekanism.content.attribute.gas.RadiationAttribute;
```

## Implemented Interfaces

RadiationAttribute implements the following interfaces. That means all methods defined in these
interfaces are also available in RadiationAttribute

- [GasAttribute](/mods/Mekanism/content/attribute/GasAttribute)

## Static Methods

:::group{name=create}

Creates an attribute representing the radioactivity of a chemical. This attribute <i>requires
validation</i>, meaning chemical containers won't be able to accept <br />  chemicals with this
attribute by default.

Returns: Attribute representing the radioactivity of a substance.  
Return Type: [RadiationAttribute](/mods/Mekanism/content/attribute/gas/RadiationAttribute)

```zenscript
RadiationAttribute.create(radioactivity as double) as RadiationAttribute
```

| Parameter | Type | Description |
|-----------|------|-------------|
| radioactivity | double | Radioactivity of the chemical measured in Sv/h, must be greater than zero. |

:::

