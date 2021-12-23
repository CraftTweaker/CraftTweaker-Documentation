# SlurryStackIngredient

This class was added by a mod with mod-id `mekanism`. So you need to have this mod installed if you
want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an
Array), so better be safe than sorry and add the import at the very top of the file.

```zenscript
import mods.mekanism.api.ingredient.ChemicalStackIngredient.SlurryStackIngredient;
```

## Implemented Interfaces

SlurryStackIngredient implements the following interfaces. That means all methods defined in these
interfaces are also available in SlurryStackIngredient

- [ChemicalStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient)

## Static Methods

:::group{name=createMulti}

Combines
multiple [SlurryStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/SlurryStackIngredient)
s into a
single [SlurryStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/SlurryStackIngredient)
.

Returns: A
single [SlurryStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/SlurryStackIngredient)
representing all the passed in ingredients.  
Return
Type: [SlurryStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/SlurryStackIngredient)

```zenscript
SlurryStackIngredient.createMulti(ingredients as SlurryStackIngredient[]) as SlurryStackIngredient
```

| Parameter | Type | Description |
|-----------|------|-------------|
| ingredients | [SlurryStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/SlurryStackIngredient)[] | Ingredients to combine |

:::

:::group{name=from}

Creates
a [SlurryStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/SlurryStackIngredient)
that matches a given slurry stack.

Returns:
A [SlurryStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/SlurryStackIngredient)
that matches a given slurry stack.  
Return
Type: [SlurryStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/SlurryStackIngredient)

```zenscript
SlurryStackIngredient.from(instance as SlurryStack) as SlurryStackIngredient
```

| Parameter | Type | Description |
|-----------|------|-------------|
| instance | [SlurryStack](/mods/Mekanism/api/chemical/SlurryStack) | Slurry stack to match |

:::

:::group{name=from}

Creates
a [SlurryStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/SlurryStackIngredient)
that matches a given slurry tag with amount.

Returns:
A [SlurryStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/SlurryStackIngredient)
that matches a given slurry tag with amount.  
Return
Type: [SlurryStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/SlurryStackIngredient)

```zenscript
SlurryStackIngredient.from(slurryTag as MCTagWithAmount<Slurry>) as SlurryStackIngredient
```

| Parameter | Type | Description |
|-----------|------|-------------|
| slurryTag | [MCTagWithAmount](/vanilla/api/tags/MCTagWithAmount)&lt;[Slurry](/mods/Mekanism/api/chemical/Slurry)&gt; | Tag and amount to match |

:::

:::group{name=from}

Creates
a [SlurryStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/SlurryStackIngredient)
that matches a given slurry and amount.

Returns:
A [SlurryStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/SlurryStackIngredient)
that matches a given slurry and amount.  
Return
Type: [SlurryStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/SlurryStackIngredient)

```zenscript
SlurryStackIngredient.from(instance as Slurry, amount as long) as SlurryStackIngredient
```

| Parameter | Type | Description |
|-----------|------|-------------|
| instance | [Slurry](/mods/Mekanism/api/chemical/Slurry) | Slurry to match |
| amount | long | Amount needed |

:::

:::group{name=from}

Creates
a [SlurryStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/SlurryStackIngredient)
that matches a given slurry tag with a given amount.

Returns:
A [SlurryStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/SlurryStackIngredient)
that matches a given slurry tag with a given amount.  
Return
Type: [SlurryStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/SlurryStackIngredient)

```zenscript
SlurryStackIngredient.from(slurryTag as MCTag<Slurry>, amount as long) as SlurryStackIngredient
```

| Parameter | Type | Description |
|-----------|------|-------------|
| slurryTag | [MCTag](/vanilla/api/tags/MCTag)&lt;[Slurry](/mods/Mekanism/api/chemical/Slurry)&gt; | Tag to match |
| amount | long | Amount needed |

:::

## Casters

| Result type | Is Implicit |
|-------------|-------------|
| [IData](/vanilla/api/data/IData) | true |

## Methods

:::group{name=asIData}

Converts
this [SlurryStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/SlurryStackIngredient)
into JSON ([IData](/vanilla/api/data/IData)).

Returns: [SlurryStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/SlurryStackIngredient)
as JSON.  
Return Type: [IData](/vanilla/api/data/IData)

```zenscript
// SlurryStackIngredient.asIData() as IData

mySlurryStackIngredient.asIData();
```

:::

:::group{name=or}

OR's
this [SlurryStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/SlurryStackIngredient)
with
another [SlurryStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/SlurryStackIngredient)
to create a
multi [SlurryStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/SlurryStackIngredient)

Returns:
Multi [SlurryStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/SlurryStackIngredient)
that matches both the
source [SlurryStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/SlurryStackIngredient)
and the
OR'd [SlurryStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/SlurryStackIngredient)
.  
Return
Type: [SlurryStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/SlurryStackIngredient)

```zenscript
SlurryStackIngredient.or(other as SlurryStackIngredient) as SlurryStackIngredient
```

| Parameter | Type | Description |
|-----------|------|-------------|
| other | [SlurryStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/SlurryStackIngredient) | [SlurryStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/SlurryStackIngredient) to combine with. |

:::


