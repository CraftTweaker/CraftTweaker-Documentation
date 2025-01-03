# TagIngredient

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.ingredient.type.TagIngredient;
```


## Implemented Interfaces
TagIngredient implements the following interfaces. That means all methods defined in these interfaces are also available in TagIngredient

- [IIngredient](/vanilla/api/ingredient/IIngredient)

## Casters

|                              Result Type                               | Is Implicit |
|------------------------------------------------------------------------|-------------|
| [IData](/vanilla/api/data/IData)                                       | true        |
| [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount) | true        |
| [MapData](/vanilla/api/data/MapData)                                   | true        |

## Methods

:::group{name=addGlobalAttributeModifier}

This method no longer works and is deprecated, it is left in so it doesn't cause breaking changes.

 Please use Item Components instead.

```zenscript
TagIngredient.addGlobalAttributeModifier(attribute as Attribute, id as ResourceLocation, value as double, operation as AttributeOperation, slotTypes as EquipmentSlot[])
```

| Parameter |                                  Type                                  |
|-----------|------------------------------------------------------------------------|
| attribute | [Attribute](/vanilla/api/entity/attribute/Attribute)                   |
| id        | [ResourceLocation](/vanilla/api/resource/ResourceLocation)             |
| value     | double                                                                 |
| operation | [AttributeOperation](/vanilla/api/entity/attribute/AttributeOperation) |
| slotTypes | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)[]         |


:::

:::group{name=addShiftTooltip}

```zenscript
TagIngredient.addShiftTooltip(content as Component, showMessage as Component)
```

|  Parameter  |                   Type                   | Optional |
|-------------|------------------------------------------|----------|
| content     | [Component](/vanilla/api/text/Component) | false    |
| showMessage | [Component](/vanilla/api/text/Component) | true     |


:::

:::group{name=addTooltip}

```zenscript
TagIngredient.addTooltip(content as Component)
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| content   | [Component](/vanilla/api/text/Component) |


:::

:::group{name=anyDamage}

Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)

```zenscript
// TagIngredient.anyDamage() as IIngredient

myTagIngredient.anyDamage();
```

:::

:::group{name=asIIngredientWithAmount}

Used implicitly when a machine can accept more than one item but you only provide one.

Return Type: [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount)

```zenscript
// TagIngredient.asIIngredientWithAmount() as IIngredientWithAmount

myTagIngredient.asIIngredientWithAmount();
```

:::

:::group{name=clearTooltip}

```zenscript
TagIngredient.clearTooltip(leaveName as boolean)
```

| Parameter |  Type   | Optional | Default Value |
|-----------|---------|----------|---------------|
| leaveName | boolean | true     | false         |


:::

:::group{name=condition}

Use this if you already have the condition from another ingredient

Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)

```zenscript
TagIngredient.condition(condition as IIngredientCondition) as IIngredient
```

| Parameter |                                      Type                                      |
|-----------|--------------------------------------------------------------------------------|
| condition | [IIngredientCondition](/vanilla/api/ingredient/condition/IIngredientCondition) |


:::

:::group{name=contains}

Does the ingredient contain the given ingredient?

Return Type: boolean

```zenscript
// TagIngredient.contains(ingredient as IIngredient) as boolean

myTagIngredient.contains((<item:minecraft:iron_ingot> | <item:minecraft:gold_ingot>));
```

| Parameter  |                        Type                        |       Description       |
|------------|----------------------------------------------------|-------------------------|
| ingredient | [IIngredient](/vanilla/api/ingredient/IIngredient) | The ingredient to check |


:::

:::group{name=getRemainingItem}

When this ingredient stack is crafted, what will remain in the grid?
 Does not check if the stack matches though!
 Used e.g. in Crafting Table recipes.

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// TagIngredient.getRemainingItem(stack as IItemStack) as IItemStack

myTagIngredient.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Parameter |                    Type                    |                Description                |
|-----------|--------------------------------------------|-------------------------------------------|
| stack     | [IItemStack](/vanilla/api/item/IItemStack) | The stack to provide for this ingredient. |


:::

:::group{name=isEmpty}

Checks if this ingredient is empty.

Returns: true if empty, false otherwise  
Return Type: boolean

```zenscript
// TagIngredient.isEmpty() as boolean

myTagIngredient.isEmpty();
```

:::

:::group{name=modifyShiftTooltip}

```zenscript
TagIngredient.modifyShiftTooltip(shiftedFunction as ITooltipFunction, unshiftedFunction as ITooltipFunction)
```

|     Parameter     |                              Type                              | Optional |
|-------------------|----------------------------------------------------------------|----------|
| shiftedFunction   | [ITooltipFunction](/vanilla/api/item/tooltip/ITooltipFunction) | false    |
| unshiftedFunction | [ITooltipFunction](/vanilla/api/item/tooltip/ITooltipFunction) | true     |


:::

:::group{name=modifyTooltip}

```zenscript
TagIngredient.modifyTooltip(function as ITooltipFunction)
```

| Parameter |                              Type                              |
|-----------|----------------------------------------------------------------|
| function  | [ITooltipFunction](/vanilla/api/item/tooltip/ITooltipFunction) |


:::

:::group{name=mul}

Use this in contexts where machines accept more than one item to state that fact.

Return Type: [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount)

```zenscript
TagIngredient.mul(amount as int) as IIngredientWithAmount
```

| Parameter | Type |
|-----------|------|
| amount    | int  |


:::

:::group{name=onlyDamaged}

Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)

```zenscript
// TagIngredient.onlyDamaged() as IIngredient

myTagIngredient.onlyDamaged();
```

:::

:::group{name=onlyDamagedAtLeast}

Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)

```zenscript
TagIngredient.onlyDamagedAtLeast(minDamage as int) as IIngredient
```

| Parameter | Type |
|-----------|------|
| minDamage | int  |


:::

:::group{name=onlyDamagedAtMost}

Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)

```zenscript
TagIngredient.onlyDamagedAtMost(maxDamage as int) as IIngredient
```

| Parameter | Type |
|-----------|------|
| maxDamage | int  |


:::

:::group{name=onlyIf}

Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)

```zenscript
TagIngredient.onlyIf(uid as string, function as Predicate<IItemStack>) as IIngredient
```

| Parameter |                            Type                             | Optional |
|-----------|-------------------------------------------------------------|----------|
| uid       | string                                                      | false    |
| function  | Predicate&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; | true     |


:::

:::group{name=removeGlobalAttribute}

This method no longer works and is deprecated, it is left in so it doesn't cause breaking changes.

 Please use Item Components instead.

```zenscript
TagIngredient.removeGlobalAttribute(attribute as Attribute, slotTypes as EquipmentSlot[])
```

| Parameter |                              Type                              |
|-----------|----------------------------------------------------------------|
| attribute | [Attribute](/vanilla/api/entity/attribute/Attribute)           |
| slotTypes | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)[] |


:::

:::group{name=removeGlobalAttributeModifier}

This method no longer works and is deprecated, it is left in so it doesn't cause breaking changes.

 Please use Item Components instead.

```zenscript
TagIngredient.removeGlobalAttributeModifier(uuid as stdlib.UUID, slotTypes as EquipmentSlot[])
```

| Parameter |                              Type                              |
|-----------|----------------------------------------------------------------|
| uuid      | stdlib.UUID                                                    |
| slotTypes | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)[] |


:::

:::group{name=removeGlobalAttributeModifier}

This method no longer works and is deprecated, it is left in so it doesn't cause breaking changes.

 Please use Item Components instead.

```zenscript
TagIngredient.removeGlobalAttributeModifier(uuid as string, slotTypes as EquipmentSlot[])
```

| Parameter |                              Type                              |
|-----------|----------------------------------------------------------------|
| uuid      | string                                                         |
| slotTypes | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)[] |


:::

:::group{name=removeTooltip}

```zenscript
TagIngredient.removeTooltip(regex as string)
```

| Parameter |  Type  |
|-----------|--------|
| regex     | string |


:::

:::group{name=reuse}

Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)

```zenscript
// TagIngredient.reuse() as IIngredient

myTagIngredient.reuse();
```

:::

:::group{name=setBurnTime}

Sets the burn time of this ingredient, for use in the furnace and other machines

```zenscript
// TagIngredient.setBurnTime(time as int)

myTagIngredient.setBurnTime(500);
```

| Parameter | Type |    Description    |
|-----------|------|-------------------|
| time      | int  | the new burn time |


:::

:::group{name=transformCustom}

Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)

```zenscript
TagIngredient.transformCustom(uid as string, function as Function<IItemStack,IItemStack>) as IIngredient
```

| Parameter |                                                 Type                                                  | Optional |
|-----------|-------------------------------------------------------------------------------------------------------|----------|
| uid       | string                                                                                                | false    |
| function  | Function&lt;[IItemStack](/vanilla/api/item/IItemStack),[IItemStack](/vanilla/api/item/IItemStack)&gt; | true     |


:::

:::group{name=transformDamage}

Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)

```zenscript
TagIngredient.transformDamage(amount as int) as IIngredient
```

| Parameter | Type | Optional | Default Value |
|-----------|------|----------|---------------|
| amount    | int  | true     | 1             |


:::

:::group{name=transformReplace}

Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)

```zenscript
TagIngredient.transformReplace(replaceWith as IItemStack) as IIngredient
```

|  Parameter  |                    Type                    |
|-------------|--------------------------------------------|
| replaceWith | [IItemStack](/vanilla/api/item/IItemStack) |


:::


## Operators

:::group{name=CONTAINS}

Does the ingredient contain the given ingredient?

```zenscript
ingredient as IIngredient in myTagIngredient
(<item:minecraft:iron_ingot> | <item:minecraft:gold_ingot>) in myTagIngredient
```

:::

:::group{name=MUL}

Use this in contexts where machines accept more than one item to state that fact.

```zenscript
myTagIngredient * amount as int
```

:::

:::group{name=OR}

```zenscript
myTagIngredient | other as IIngredient
```

:::


## Properties

|   Name   |  Type   | Has Getter | Has Setter |                                   Description                                    |
|----------|---------|------------|------------|----------------------------------------------------------------------------------|
| burnTime | void    | false      | true       | Sets the burn time of this ingredient, for use in the furnace and other machines |
| empty    | boolean | true       | false      | Checks if this ingredient is empty.                                              |

