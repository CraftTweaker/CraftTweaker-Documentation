# FluidStackIngredient

This class was added by a mod with mod-id `mekanism`. So you need to have this mod installed if you
want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an
Array), so better be safe than sorry and add the import at the very top of the file.

```zenscript
import mods.mekanism.api.ingredient.FluidStackIngredient;
```

## Static Methods

:::group{name=createMulti}

Combines multiple [FluidStackIngredient](/mods/Mekanism/api/ingredient/FluidStackIngredient)s into a
single [FluidStackIngredient](/mods/Mekanism/api/ingredient/FluidStackIngredient).

Returns: A single [FluidStackIngredient](/mods/Mekanism/api/ingredient/FluidStackIngredient)
representing all the passed in ingredients.  
Return Type: [FluidStackIngredient](/mods/Mekanism/api/ingredient/FluidStackIngredient)

```zenscript
FluidStackIngredient.createMulti(ingredients as FluidStackIngredient[]) as FluidStackIngredient
```

| Parameter | Type | Description |
|-----------|------|-------------|
| ingredients | [FluidStackIngredient](/mods/Mekanism/api/ingredient/FluidStackIngredient)[] | Ingredients to combine |

:::

:::group{name=from}

Creates a [FluidStackIngredient](/mods/Mekanism/api/ingredient/FluidStackIngredient) that matches a
given fluid tag with amount.

Returns: A [FluidStackIngredient](/mods/Mekanism/api/ingredient/FluidStackIngredient) that matches a
given fluid tag with amount.  
Return Type: [FluidStackIngredient](/mods/Mekanism/api/ingredient/FluidStackIngredient)

```zenscript
FluidStackIngredient.from(fluidTag as MCTagWithAmount<MCFluid>) as FluidStackIngredient
```

| Parameter | Type | Description |
|-----------|------|-------------|
| fluidTag | [MCTagWithAmount](/vanilla/api/tags/MCTagWithAmount)&lt;[MCFluid](/vanilla/api/fluid/MCFluid)&gt; | Tag and amount to match |

:::

:::group{name=from}

Creates a [FluidStackIngredient](/mods/Mekanism/api/ingredient/FluidStackIngredient) that matches a
given fluid stack.

Returns: A [FluidStackIngredient](/mods/Mekanism/api/ingredient/FluidStackIngredient) that matches a
given fluid stack.  
Return Type: [FluidStackIngredient](/mods/Mekanism/api/ingredient/FluidStackIngredient)

```zenscript
FluidStackIngredient.from(instance as IFluidStack) as FluidStackIngredient
```

| Parameter | Type | Description |
|-----------|------|-------------|
| instance | [IFluidStack](/vanilla/api/fluid/IFluidStack) | Fluid stack to match |

:::

:::group{name=from}

Creates a [FluidStackIngredient](/mods/Mekanism/api/ingredient/FluidStackIngredient) that matches a
given fluid and amount.

Returns: A [FluidStackIngredient](/mods/Mekanism/api/ingredient/FluidStackIngredient) that matches a
given fluid and amount.  
Return Type: [FluidStackIngredient](/mods/Mekanism/api/ingredient/FluidStackIngredient)

```zenscript
FluidStackIngredient.from(fluid as MCFluid, amount as int) as FluidStackIngredient
```

| Parameter | Type | Description |
|-----------|------|-------------|
| fluid | [MCFluid](/vanilla/api/fluid/MCFluid) | Fluid to match |
| amount | int | Amount needed |

:::

:::group{name=from}

Creates a [FluidStackIngredient](/mods/Mekanism/api/ingredient/FluidStackIngredient) that matches a
given fluid tag with a given amount.

Returns: A [FluidStackIngredient](/mods/Mekanism/api/ingredient/FluidStackIngredient) that matches a
given fluid tag with a given amount.  
Return Type: [FluidStackIngredient](/mods/Mekanism/api/ingredient/FluidStackIngredient)

```zenscript
FluidStackIngredient.from(fluidTag as MCTag<MCFluid>, amount as int) as FluidStackIngredient
```

| Parameter | Type | Description |
|-----------|------|-------------|
| fluidTag | [MCTag](/vanilla/api/tags/MCTag)&lt;[MCFluid](/vanilla/api/fluid/MCFluid)&gt; | Tag to match |
| amount | int | Amount needed |

:::

## Casters

| Result type | Is Implicit |
|-------------|-------------|
| [IData](/vanilla/api/data/IData) | true |

## Methods

:::group{name=asIData}

Converts this [FluidStackIngredient](/mods/Mekanism/api/ingredient/FluidStackIngredient) into
JSON ([IData](/vanilla/api/data/IData)).

Returns: [FluidStackIngredient](/mods/Mekanism/api/ingredient/FluidStackIngredient) as JSON.  
Return Type: [IData](/vanilla/api/data/IData)

```zenscript
// FluidStackIngredient.asIData() as IData

myFluidStackIngredient.asIData();
```

:::

:::group{name=or}

OR's this [FluidStackIngredient](/mods/Mekanism/api/ingredient/FluidStackIngredient) with
another [FluidStackIngredient](/mods/Mekanism/api/ingredient/FluidStackIngredient) to create a
multi [FluidStackIngredient](/mods/Mekanism/api/ingredient/FluidStackIngredient)

Returns: Multi [FluidStackIngredient](/mods/Mekanism/api/ingredient/FluidStackIngredient) that
matches both the source [FluidStackIngredient](/mods/Mekanism/api/ingredient/FluidStackIngredient)
and the OR'd [FluidStackIngredient](/mods/Mekanism/api/ingredient/FluidStackIngredient).  
Return Type: [FluidStackIngredient](/mods/Mekanism/api/ingredient/FluidStackIngredient)

```zenscript
FluidStackIngredient.or(other as FluidStackIngredient) as FluidStackIngredient
```

| Parameter | Type | Description |
|-----------|------|-------------|
| other | [FluidStackIngredient](/mods/Mekanism/api/ingredient/FluidStackIngredient) | [FluidStackIngredient](/mods/Mekanism/api/ingredient/FluidStackIngredient) to combine with. |

:::


