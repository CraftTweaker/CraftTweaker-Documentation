# PigmentStackIngredient

This class was added by a mod with mod-id `mekanism`. So you need to have this mod installed if you
want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an
Array), so better be safe than sorry and add the import at the very top of the file.

```zenscript
import mods.mekanism.api.ingredient.ChemicalStackIngredient.PigmentStackIngredient;
```

## Implemented Interfaces

PigmentStackIngredient implements the following interfaces. That means all methods defined in these
interfaces are also available in PigmentStackIngredient

- [ChemicalStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient)

## Static Methods

:::group{name=createMulti}

Combines
multiple [PigmentStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/PigmentStackIngredient)
s into a
single [PigmentStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/PigmentStackIngredient)
.

Returns: A
single [PigmentStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/PigmentStackIngredient)
representing all the passed in ingredients.  
Return
Type: [PigmentStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/PigmentStackIngredient)

```zenscript
PigmentStackIngredient.createMulti(ingredients as PigmentStackIngredient[]) as PigmentStackIngredient
```

| Parameter | Type | Description |
|-----------|------|-------------|
| ingredients | [PigmentStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/PigmentStackIngredient)[] | Ingredients to combine |

:::

:::group{name=from}

Creates
a [PigmentStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/PigmentStackIngredient)
that matches a given pigment stack.

Returns:
A [PigmentStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/PigmentStackIngredient)
that matches a given pigment stack.  
Return
Type: [PigmentStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/PigmentStackIngredient)

```zenscript
PigmentStackIngredient.from(instance as PigmentStack) as PigmentStackIngredient
```

| Parameter | Type | Description |
|-----------|------|-------------|
| instance | [PigmentStack](/mods/Mekanism/api/chemical/PigmentStack) | Pigment stack to match |

:::

:::group{name=from}

Creates
a [PigmentStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/PigmentStackIngredient)
that matches a given pigment tag with amount.

Returns:
A [PigmentStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/PigmentStackIngredient)
that matches a given pigment tag with amount.  
Return
Type: [PigmentStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/PigmentStackIngredient)

```zenscript
PigmentStackIngredient.from(pigmentTag as MCTagWithAmount<Pigment>) as PigmentStackIngredient
```

| Parameter | Type | Description |
|-----------|------|-------------|
| pigmentTag | [MCTagWithAmount](/vanilla/api/tags/MCTagWithAmount)&lt;[Pigment](/mods/Mekanism/api/chemical/Pigment)&gt; | Tag and amount to match |

:::

:::group{name=from}

Creates
a [PigmentStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/PigmentStackIngredient)
that matches a given pigment and amount.

Returns:
A [PigmentStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/PigmentStackIngredient)
that matches a given pigment and amount.  
Return
Type: [PigmentStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/PigmentStackIngredient)

```zenscript
PigmentStackIngredient.from(instance as Pigment, amount as long) as PigmentStackIngredient
```

| Parameter | Type | Description |
|-----------|------|-------------|
| instance | [Pigment](/mods/Mekanism/api/chemical/Pigment) | Pigment to match |
| amount | long | Amount needed |

:::

:::group{name=from}

Creates
a [PigmentStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/PigmentStackIngredient)
that matches a given pigment tag with a given amount.

Returns:
A [PigmentStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/PigmentStackIngredient)
that matches a given pigment tag with a given amount.  
Return
Type: [PigmentStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/PigmentStackIngredient)

```zenscript
PigmentStackIngredient.from(pigmentTag as MCTag<Pigment>, amount as long) as PigmentStackIngredient
```

| Parameter | Type | Description |
|-----------|------|-------------|
| pigmentTag | [MCTag](/vanilla/api/tags/MCTag)&lt;[Pigment](/mods/Mekanism/api/chemical/Pigment)&gt; | Tag to match |
| amount | long | Amount needed |

:::

## Casters

| Result type | Is Implicit |
|-------------|-------------|
| [IData](/vanilla/api/data/IData) | true |

## Methods

:::group{name=asIData}

Converts
this [PigmentStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/PigmentStackIngredient)
into JSON ([IData](/vanilla/api/data/IData)).

Returns: [PigmentStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/PigmentStackIngredient)
as JSON.  
Return Type: [IData](/vanilla/api/data/IData)

```zenscript
// PigmentStackIngredient.asIData() as IData

myPigmentStackIngredient.asIData();
```

:::

:::group{name=or}

OR's
this [PigmentStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/PigmentStackIngredient)
with
another [PigmentStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/PigmentStackIngredient)
to create a
multi [PigmentStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/PigmentStackIngredient)

Returns:
Multi [PigmentStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/PigmentStackIngredient)
that matches both the
source [PigmentStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/PigmentStackIngredient)
and the
OR'd [PigmentStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/PigmentStackIngredient)
.  
Return
Type: [PigmentStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/PigmentStackIngredient)

```zenscript
PigmentStackIngredient.or(other as PigmentStackIngredient) as PigmentStackIngredient
```

| Parameter | Type | Description |
|-----------|------|-------------|
| other | [PigmentStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/PigmentStackIngredient) | [PigmentStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/PigmentStackIngredient) to combine with. |

:::


