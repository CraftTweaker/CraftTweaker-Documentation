# IIngredientAny

An IIngredient which matches all items

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.ingredient.type.IIngredientAny;
```


## Implemented Interfaces
IIngredientAny implements the following interfaces. That means all methods defined in these interfaces are also available in IIngredientAny

- [IIngredient](/vanilla/api/ingredient/IIngredient)

## Static Methods

:::group{name=getInstance}

Return Type: [IIngredientAny](/vanilla/api/ingredient/type/IIngredientAny)

```zenscript
// IIngredientAny.getInstance() as IIngredientAny

IIngredientAny.getInstance();
```

:::

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
IIngredientAny.addGlobalAttributeModifier(attribute as Attribute, id as ResourceLocation, value as double, operation as AttributeOperation, slotTypes as EquipmentSlot[])
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
IIngredientAny.addShiftTooltip(content as Component, showMessage as Component)
```

|  Parameter  |                   Type                   | Optional |
|-------------|------------------------------------------|----------|
| content     | [Component](/vanilla/api/text/Component) | false    |
| showMessage | [Component](/vanilla/api/text/Component) | true     |


:::

:::group{name=addTooltip}

```zenscript
IIngredientAny.addTooltip(content as Component)
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| content   | [Component](/vanilla/api/text/Component) |


:::

:::group{name=anyDamage}

Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)

```zenscript
// IIngredientAny.anyDamage() as IIngredient

IIngredientAny.getInstance().anyDamage();
```

:::

:::group{name=asIIngredientWithAmount}

Used implicitly when a machine can accept more than one item but you only provide one.

Return Type: [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount)

```zenscript
// IIngredientAny.asIIngredientWithAmount() as IIngredientWithAmount

IIngredientAny.getInstance().asIIngredientWithAmount();
```

:::

:::group{name=clearTooltip}

```zenscript
IIngredientAny.clearTooltip(leaveName as boolean)
```

| Parameter |  Type   | Optional | Default Value |
|-----------|---------|----------|---------------|
| leaveName | boolean | true     | false         |


:::

:::group{name=contains}

Does the ingredient contain the given ingredient?

Return Type: boolean

```zenscript
// IIngredientAny.contains(ingredient as IIngredient) as boolean

IIngredientAny.getInstance().contains((<item:minecraft:iron_ingot> | <item:minecraft:gold_ingot>));
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
// IIngredientAny.getRemainingItem(stack as IItemStack) as IItemStack

IIngredientAny.getInstance().getRemainingItem(<item:minecraft:iron_ingot>);
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
// IIngredientAny.isEmpty() as boolean

IIngredientAny.getInstance().isEmpty();
```

:::

:::group{name=modifyShiftTooltip}

```zenscript
IIngredientAny.modifyShiftTooltip(shiftedFunction as ITooltipFunction, unshiftedFunction as ITooltipFunction)
```

|     Parameter     |                              Type                              | Optional |
|-------------------|----------------------------------------------------------------|----------|
| shiftedFunction   | [ITooltipFunction](/vanilla/api/item/tooltip/ITooltipFunction) | false    |
| unshiftedFunction | [ITooltipFunction](/vanilla/api/item/tooltip/ITooltipFunction) | true     |


:::

:::group{name=modifyTooltip}

```zenscript
IIngredientAny.modifyTooltip(function as ITooltipFunction)
```

| Parameter |                              Type                              |
|-----------|----------------------------------------------------------------|
| function  | [ITooltipFunction](/vanilla/api/item/tooltip/ITooltipFunction) |


:::

:::group{name=mul}

Use this in contexts where machines accept more than one item to state that fact.

Return Type: [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount)

```zenscript
IIngredientAny.mul(amount as int) as IIngredientWithAmount
```

| Parameter | Type |
|-----------|------|
| amount    | int  |


:::

:::group{name=onlyDamaged}

Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)

```zenscript
// IIngredientAny.onlyDamaged() as IIngredient

IIngredientAny.getInstance().onlyDamaged();
```

:::

:::group{name=onlyDamagedAtLeast}

Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)

```zenscript
IIngredientAny.onlyDamagedAtLeast(minDamage as int) as IIngredient
```

| Parameter | Type |
|-----------|------|
| minDamage | int  |


:::

:::group{name=onlyDamagedAtMost}

Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)

```zenscript
IIngredientAny.onlyDamagedAtMost(maxDamage as int) as IIngredient
```

| Parameter | Type |
|-----------|------|
| maxDamage | int  |


:::

:::group{name=onlyIf}

Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)

```zenscript
IIngredientAny.onlyIf(uid as string, function as Predicate<IItemStack>) as IIngredient
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
IIngredientAny.removeGlobalAttribute(attribute as Attribute, slotTypes as EquipmentSlot[])
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
IIngredientAny.removeGlobalAttributeModifier(uuid as stdlib.UUID, slotTypes as EquipmentSlot[])
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
IIngredientAny.removeGlobalAttributeModifier(uuid as string, slotTypes as EquipmentSlot[])
```

| Parameter |                              Type                              |
|-----------|----------------------------------------------------------------|
| uuid      | string                                                         |
| slotTypes | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)[] |


:::

:::group{name=removeTooltip}

```zenscript
IIngredientAny.removeTooltip(regex as string)
```

| Parameter |  Type  |
|-----------|--------|
| regex     | string |


:::

:::group{name=reuse}

Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)

```zenscript
// IIngredientAny.reuse() as IIngredient

IIngredientAny.getInstance().reuse();
```

:::

:::group{name=setBurnTime}

Sets the burn time of this ingredient, for use in the furnace and other machines

```zenscript
// IIngredientAny.setBurnTime(time as int)

IIngredientAny.getInstance().setBurnTime(500);
```

| Parameter | Type |    Description    |
|-----------|------|-------------------|
| time      | int  | the new burn time |


:::

:::group{name=transformCustom}

Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)

```zenscript
IIngredientAny.transformCustom(uid as string, function as Function<IItemStack,IItemStack>) as IIngredient
```

| Parameter |                                                 Type                                                  | Optional |
|-----------|-------------------------------------------------------------------------------------------------------|----------|
| uid       | string                                                                                                | false    |
| function  | Function&lt;[IItemStack](/vanilla/api/item/IItemStack),[IItemStack](/vanilla/api/item/IItemStack)&gt; | true     |


:::

:::group{name=transformDamage}

Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)

```zenscript
IIngredientAny.transformDamage(amount as int) as IIngredient
```

| Parameter | Type | Optional | Default Value |
|-----------|------|----------|---------------|
| amount    | int  | true     | 1             |


:::

:::group{name=transformReplace}

Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)

```zenscript
IIngredientAny.transformReplace(replaceWith as IItemStack) as IIngredient
```

|  Parameter  |                    Type                    |
|-------------|--------------------------------------------|
| replaceWith | [IItemStack](/vanilla/api/item/IItemStack) |


:::


## Operators

:::group{name=CONTAINS}

Does the ingredient contain the given ingredient?

```zenscript
ingredient as IIngredient in myIIngredientAny
(<item:minecraft:iron_ingot> | <item:minecraft:gold_ingot>) in IIngredientAny.getInstance()
```

:::

:::group{name=MUL}

Use this in contexts where machines accept more than one item to state that fact.

```zenscript
myIIngredientAny * amount as int
```

:::

:::group{name=OR}

```zenscript
myIIngredientAny | other as IIngredient
```

:::


## Properties

|   Name   |  Type   | Has Getter | Has Setter |                                   Description                                    |
|----------|---------|------------|------------|----------------------------------------------------------------------------------|
| burnTime | void    | false      | true       | Sets the burn time of this ingredient, for use in the furnace and other machines |
| empty    | boolean | true       | false      | Checks if this ingredient is empty.                                              |

