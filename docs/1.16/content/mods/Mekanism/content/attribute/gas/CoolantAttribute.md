# CoolantAttribute

This class was added by a mod with mod-id `mekanism`. So you need to have this mod installed if you
want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an
Array), so better be safe than sorry and add the import at the very top of the file.

```zenscript
import mods.mekanism.content.attribute.gas.CoolantAttribute;
```

## Implemented Interfaces

CoolantAttribute implements the following interfaces. That means all methods defined in these
interfaces are also available in CoolantAttribute

- [GasAttribute](/mods/Mekanism/content/attribute/GasAttribute)

## Static Methods

:::group{name=cooled}

Defines a 'cooled' variant of a coolant for use in Fission Reactors.

Returns: Attribute representing a 'cooled' variant of a coolant.  
Return Type: [CoolantAttribute](/mods/Mekanism/content/attribute/gas/CoolantAttribute)

```zenscript
CoolantAttribute.cooled(heatedGas as Supplier<Gas>, thermalEnthalpy as double, conductivity as double) as CoolantAttribute
```

| Parameter | Type | Description |
|-----------|------|-------------|
| heatedGas | Supplier&lt;[Gas](/mods/Mekanism/api/chemical/Gas)&gt; | Supplier to the heated variant of this chemical. |
| thermalEnthalpy | double | Defines how much energy one mB of the chemical can store; lower values will cause reactors to require more of the chemical to stay cool. <br />                         Must be greater than zero. |
| conductivity | double | Defines the proportion of a reactor's available heat that can be used at an instant to convert this coolant's cool variant to its heated <br />                         variant. This value should be greater than zero, and at most one. |

:::

:::group{name=heated}

Defines the 'heated' variant of a coolant for use in Fission Reactors.

Returns: Attribute representing the 'heated' variant of a coolant.  
Return Type: [CoolantAttribute](/mods/Mekanism/content/attribute/gas/CoolantAttribute)

```zenscript
CoolantAttribute.heated(cooledGas as Supplier<Gas>, thermalEnthalpy as double, conductivity as double) as CoolantAttribute
```

| Parameter | Type | Description |
|-----------|------|-------------|
| cooledGas | Supplier&lt;[Gas](/mods/Mekanism/api/chemical/Gas)&gt; | Supplier to the cooled variant of this chemical. |
| thermalEnthalpy | double | Defines how much energy one mB of the chemical can store; lower values will cause reactors to require more of the chemical to stay cool. <br />                         Must be greater than zero. |
| conductivity | double | Defines the proportion of a reactor's available heat that can be used at an instant to convert this coolant's cool variant to its heated <br />                         variant. This value should be greater than zero, and at most one. |

:::

