# FuelAttribute

This class was added by a mod with mod-id `mekanism`. So you need to have this mod installed if you
want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an
Array), so better be safe than sorry and add the import at the very top of the file.

```zenscript
import mods.mekanism.content.attribute.gas.FuelAttribute;
```

## Implemented Interfaces

FuelAttribute implements the following interfaces. That means all methods defined in these
interfaces are also available in FuelAttribute

- [GasAttribute](/mods/Mekanism/content/attribute/GasAttribute)

## Static Methods

:::group{name=create}

Defines a fuel which can be processed by a Gas-Burning Generator to produce energy.

Returns: Attribute representing the stats a substance has as a fuel.  
Return Type: [FuelAttribute](/mods/Mekanism/content/attribute/gas/FuelAttribute)

```zenscript
FuelAttribute.create(burnTicks as int, energyDensity as FloatingLong) as FuelAttribute
```

| Parameter | Type | Description |
|-----------|------|-------------|
| burnTicks | int | The number of ticks one mB of fuel can be burned for before being depleted; must be greater than zero. |
| energyDensity | [FloatingLong](/mods/Mekanism/api/FloatingLong) | The energy density in one mB of fuel; must be greater than zero. |

:::

