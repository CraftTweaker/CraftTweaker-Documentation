# InfusionStackIngredient

This class was added by a mod with mod-id `mekanism`. So you need to have this mod installed if you
want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an
Array), so better be safe than sorry and add the import at the very top of the file.

```zenscript
import mods.mekanism.api.ingredient.ChemicalStackIngredient.InfusionStackIngredient;
```

## Implemented Interfaces

InfusionStackIngredient implements the following interfaces. That means all methods defined in these
interfaces are also available in InfusionStackIngredient

- [ChemicalStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient)

## Static Methods

:::group{name=createMulti}

Combines
multiple [InfusionStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/InfusionStackIngredient)
s into a
single [InfusionStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/InfusionStackIngredient)
.

Returns: A
single [InfusionStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/InfusionStackIngredient)
representing all the passed in ingredients.  
Return
Type: [InfusionStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/InfusionStackIngredient)

```zenscript
InfusionStackIngredient.createMulti(ingredients as InfusionStackIngredient[]) as InfusionStackIngredient
```

| Parameter | Type | Description |
|-----------|------|-------------|
| ingredients | [InfusionStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/InfusionStackIngredient)[] | Ingredients to combine |

:::

:::group{name=from}

Creates
a [InfusionStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/InfusionStackIngredient)
that matches a given infuse type tag with amount.

Returns:
A [InfusionStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/InfusionStackIngredient)
that matches a given infuse type tag with amount.  
Return
Type: [InfusionStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/InfusionStackIngredient)

```zenscript
InfusionStackIngredient.from(infuseTypeTag as MCTagWithAmount<InfuseType>) as InfusionStackIngredient
```

| Parameter | Type | Description |
|-----------|------|-------------|
| infuseTypeTag | [MCTagWithAmount](/vanilla/api/tags/MCTagWithAmount)&lt;[InfuseType](/mods/Mekanism/api/chemical/InfuseType)&gt; | Tag and amount to match |

:::

:::group{name=from}

Creates
a [InfusionStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/InfusionStackIngredient)
that matches a given infusion stack.

Returns:
A [InfusionStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/InfusionStackIngredient)
that matches a given infusion stack.  
Return
Type: [InfusionStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/InfusionStackIngredient)

```zenscript
InfusionStackIngredient.from(instance as InfusionStack) as InfusionStackIngredient
```

| Parameter | Type | Description |
|-----------|------|-------------|
| instance | [InfusionStack](/mods/Mekanism/api/chemical/InfusionStack) | Infusion stack to match |

:::

:::group{name=from}

Creates
a [InfusionStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/InfusionStackIngredient)
that matches a given infuse type tag with a given amount.

Returns:
A [InfusionStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/InfusionStackIngredient)
that matches a given infuse type tag with a given amount.  
Return
Type: [InfusionStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/InfusionStackIngredient)

```zenscript
InfusionStackIngredient.from(infuseTypeTag as MCTag<InfuseType>, amount as long) as InfusionStackIngredient
```

| Parameter | Type | Description |
|-----------|------|-------------|
| infuseTypeTag | [MCTag](/vanilla/api/tags/MCTag)&lt;[InfuseType](/mods/Mekanism/api/chemical/InfuseType)&gt; | Tag to match |
| amount | long | Amount needed |

:::

:::group{name=from}

Creates
a [InfusionStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/InfusionStackIngredient)
that matches a given infuse type and amount.

Returns:
A [InfusionStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/InfusionStackIngredient)
that matches a given infuse type and amount.  
Return
Type: [InfusionStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/InfusionStackIngredient)

```zenscript
InfusionStackIngredient.from(instance as InfuseType, amount as long) as InfusionStackIngredient
```

| Parameter | Type | Description |
|-----------|------|-------------|
| instance | [InfuseType](/mods/Mekanism/api/chemical/InfuseType) | Infuse type to match |
| amount | long | Amount needed |

:::

## Casters

| Result type | Is Implicit |
|-------------|-------------|
| [IData](/vanilla/api/data/IData) | true |

## Methods

:::group{name=asIData}

Converts
this [InfusionStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/InfusionStackIngredient)
into JSON ([IData](/vanilla/api/data/IData)).

Returns: [InfusionStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/InfusionStackIngredient)
as JSON.  
Return Type: [IData](/vanilla/api/data/IData)

```zenscript
// InfusionStackIngredient.asIData() as IData

myInfusionStackIngredient.asIData();
```

:::

:::group{name=or}

OR's
this [InfusionStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/InfusionStackIngredient)
with
another [InfusionStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/InfusionStackIngredient)
to create a
multi [InfusionStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/InfusionStackIngredient)

Returns:
Multi [InfusionStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/InfusionStackIngredient)
that matches both the
source [InfusionStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/InfusionStackIngredient)
and the
OR'd [InfusionStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/InfusionStackIngredient)
.  
Return
Type: [InfusionStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/InfusionStackIngredient)

```zenscript
InfusionStackIngredient.or(other as InfusionStackIngredient) as InfusionStackIngredient
```

| Parameter | Type | Description |
|-----------|------|-------------|
| other | [InfusionStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/InfusionStackIngredient) | [InfusionStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/InfusionStackIngredient) to combine with. |

:::


