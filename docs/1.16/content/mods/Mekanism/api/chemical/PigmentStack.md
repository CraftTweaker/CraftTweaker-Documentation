# PigmentStack

This class was added by a mod with mod-id `mekanism`. So you need to have this mod installed if you
want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an
Array), so better be safe than sorry and add the import at the very top of the file.

```zenscript
import mods.mekanism.api.chemical.PigmentStack;
```

## Implemented Interfaces

PigmentStack implements the following interfaces. That means all methods defined in these interfaces
are also available in PigmentStack

- [ChemicalStack](/mods/Mekanism/api/chemical/ChemicalStack)

## Casters

| Result type | Is Implicit |
|-------------|-------------|
| CHEMICAL | true |
| [PigmentStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/PigmentStackIngredient) | true |

## Methods

:::group{name=asImmutable}

Makes this stack immutable

Returns: An immutable Stack. This is either a new stack if the current stack is mutable, or the same
stack if it is already immutable.  
Return Type: CRT_STACK

```zenscript
// PigmentStack.asImmutable() as CRT_STACK

myPigmentStack.asImmutable();
```

:::

:::group{name=asMutable}

Makes this stack mutable

Returns: A new Stack, that is mutable.  
Return Type: CRT_STACK

```zenscript
// PigmentStack.asMutable() as CRT_STACK

myPigmentStack.asMutable();
```

:::

:::group{name=containsOther}

Checks if this chemical stack, contains the given chemical stack by checking if the chemicals are
the same, and if this stack's amount is bigger than the given stack's amount

Returns: `true` if this stack contains the other stack  
Return Type: boolean

```zenscript
PigmentStack.containsOther(stack as CRT_STACK) as boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| stack | CRT_STACK | Chemical stack to compare against |

:::

:::group{name=copy}

Copies the stack. Only needed when mutable stacks are involved.

Returns: A new stack, that contains the same info as this one  
Return Type: CRT_STACK

```zenscript
// PigmentStack.copy() as CRT_STACK

myPigmentStack.copy();
```

:::

:::group{name=getAmount}

Gets the size of this chemical stack.

Returns: The size of this chemical stack or zero if it is empty  
Return Type: long

```zenscript
// PigmentStack.getAmount() as long

myPigmentStack.getAmount();
```

:::

:::group{name=getRegistryName}

Gets the registry name for the chemical this stack is representing.

Returns: A MCResourceLocation representing the registry name.  
Return Type: [MCResourceLocation](/vanilla/api/util/MCResourceLocation)

```zenscript
// PigmentStack.getRegistryName() as MCResourceLocation

myPigmentStack.getRegistryName();
```

:::

:::group{name=getType}

Retrieves this fluid stack's fluid.

Returns: The fluid.  
Return Type: CHEMICAL

```zenscript
// PigmentStack.getType() as CHEMICAL

myPigmentStack.getType();
```

:::

:::group{name=grow}

Grows the stack's amount by the given amount in MilliBuckets (MB)

Returns: A new stack, or this stack, depending on if this stack is mutable  
Return Type: CRT_STACK

```zenscript
PigmentStack.grow(amount as long) as CRT_STACK
```

| Parameter | Type | Description |
|-----------|------|-------------|
| amount | long | The amount to grow the stack by. |

:::

:::group{name=isEmpty}

Whether this chemical stack is empty.

Returns: `true` if this stack is empty, `false` otherwise.  
Return Type: boolean

```zenscript
// PigmentStack.isEmpty() as boolean

myPigmentStack.isEmpty();
```

:::

:::group{name=isEqual}

Checks if this chemical stack is equal another chemical stack.

Returns: `true` if the chemicals stacks are equal, `false` otherwise.  
Return Type: boolean

```zenscript
PigmentStack.isEqual(other as CRT_STACK) as boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| other | CRT_STACK | Chemical stack to check against. |

:::

:::group{name=isTypeEqual}

Whether this ChemicalStack's chemical type is equal to the other defined ChemicalStack.

Returns: if the ChemicalStacks contain the same chemical type  
Return Type: boolean

```zenscript
PigmentStack.isTypeEqual(stack as CRT_STACK) as boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| stack | CRT_STACK | - ChemicalStack to check |

:::

:::group{name=setAmount}

Sets the chemical's amount in MilliBuckets (MB)

Returns: A new stack, or this stack, depending on if this stack is mutable  
Return Type: CRT_STACK

```zenscript
PigmentStack.setAmount(amount as long) as CRT_STACK
```

| Parameter | Type | Description |
|-----------|------|-------------|
| amount | long | The amount to set the stack's amount to. |

:::

:::group{name=shrink}

Shrinks the stack's amount by the given amount in MilliBuckets (MB)

Returns: A new stack, or this stack, depending on if this stack is mutable  
Return Type: CRT_STACK

```zenscript
PigmentStack.shrink(amount as long) as CRT_STACK
```

| Parameter | Type | Description |
|-----------|------|-------------|
| amount | long | The amount to shrink the stack by. |

:::

## Operators

:::group{name=CONTAINS}

Checks if this chemical stack, contains the given chemical stack by checking if the chemicals are
the same, and if this stack's amount is bigger than the given <br />  stack's amount

```zenscript
stack as CRT_STACK in myPigmentStack
```

:::

:::group{name=EQUALS}

Checks if this chemical stack is equal another chemical stack.

```zenscript
myPigmentStack == other as CRT_STACK
```

:::

:::group{name=MUL}

Multiplies the stack's amount by the given amount in MilliBuckets (MB)

```zenscript
myPigmentStack * amount as long
```

:::

## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| amount | long | true | false | Gets the size of this chemical stack. |
| commandString | string | true | false | No Description Provided |
| empty | boolean | true | false | Whether this chemical stack is empty. |
| registryName | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | true | false | Gets the registry name for the chemical this stack is representing. |
| type | CHEMICAL | true | false | Retrieves this fluid stack's fluid. |

