# GasStackIngredient

This class was added by a mod with mod-id `mekanism`. So you need to have this mod installed if you
want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an
Array), so better be safe than sorry and add the import at the very top of the file.

```zenscript
import mods.mekanism.api.ingredient.ChemicalStackIngredient.GasStackIngredient;
```

## Implemented Interfaces

GasStackIngredient implements the following interfaces. That means all methods defined in these
interfaces are also available in GasStackIngredient

- [ChemicalStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient)

## Static Methods

:::group{name=createMulti}

Combines
multiple [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient)
s into a
single [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient)
.

Returns: A
single [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient)
representing all the passed in ingredients.  
Return
Type: [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient)

```zenscript
GasStackIngredient.createMulti(ingredients as GasStackIngredient[]) as GasStackIngredient
```

| Parameter | Type | Description |
|-----------|------|-------------|
| ingredients | [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient)[] | Ingredients to combine |

:::

:::group{name=from}

Creates
a [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient)
that matches a given gas tag with amount.

Returns:
A [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient)
that matches a given gas tag with amount.  
Return
Type: [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient)

```zenscript
GasStackIngredient.from(gasTag as MCTagWithAmount<Gas>) as GasStackIngredient
```

| Parameter | Type | Description |
|-----------|------|-------------|
| gasTag | [MCTagWithAmount](/vanilla/api/tags/MCTagWithAmount)&lt;[Gas](/mods/Mekanism/api/chemical/Gas)&gt; | Tag and amount to match |

:::

:::group{name=from}

Creates
a [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient)
that matches a given gas stack.

Returns:
A [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient)
that matches a given gas stack.  
Return
Type: [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient)

```zenscript
GasStackIngredient.from(instance as GasStack) as GasStackIngredient
```

| Parameter | Type | Description |
|-----------|------|-------------|
| instance | [GasStack](/mods/Mekanism/api/chemical/GasStack) | Gas stack to match |

:::

:::group{name=from}

Creates
a [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient)
that matches a given gas tag with a given amount.

Returns:
A [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient)
that matches a given gas tag with a given amount.  
Return
Type: [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient)

```zenscript
GasStackIngredient.from(gasTag as MCTag<Gas>, amount as long) as GasStackIngredient
```

| Parameter | Type | Description |
|-----------|------|-------------|
| gasTag | [MCTag](/vanilla/api/tags/MCTag)&lt;[Gas](/mods/Mekanism/api/chemical/Gas)&gt; | Tag to match |
| amount | long | Amount needed |

:::

:::group{name=from}

Creates
a [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient)
that matches a given gas and amount.

Returns:
A [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient)
that matches a given gas and amount.  
Return
Type: [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient)

```zenscript
GasStackIngredient.from(instance as Gas, amount as long) as GasStackIngredient
```

| Parameter | Type | Description |
|-----------|------|-------------|
| instance | [Gas](/mods/Mekanism/api/chemical/Gas) | Gas to match |
| amount | long | Amount needed |

:::

## Casters

| Result type | Is Implicit |
|-------------|-------------|
| [IData](/vanilla/api/data/IData) | true |

## Methods

:::group{name=asIData}

Converts
this [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient)
into JSON ([IData](/vanilla/api/data/IData)).

Returns: [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient)
as JSON.  
Return Type: [IData](/vanilla/api/data/IData)

```zenscript
// GasStackIngredient.asIData() as IData

myGasStackIngredient.asIData();
```

:::

:::group{name=or}

OR's
this [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient)
with
another [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient)
to create a
multi [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient)

Returns:
Multi [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient)
that matches both the
source [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient)
and the
OR'd [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient)
.  
Return
Type: [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient)

```zenscript
GasStackIngredient.or(other as GasStackIngredient) as GasStackIngredient
```

| Parameter | Type | Description |
|-----------|------|-------------|
| other | [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient) | [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient) to combine with. |

:::


