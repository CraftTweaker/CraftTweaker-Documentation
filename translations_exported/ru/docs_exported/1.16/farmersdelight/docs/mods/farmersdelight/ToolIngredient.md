# ToolIngredient

An ingredient that matches any item with the given tool type.

This class was added by a mod with mod-id `farmersdelight`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.farmersdelight.ToolIngredient;
```


## Implemented Interfaces
ToolIngredient implements the following interfaces. That means all methods defined in these interfaces are also available in ToolIngredient

- [IIngredient](/vanilla/api/items/IIngredient)

## Static Methods

:::group{name=getToolIngredient}

Get a tool ingredient from a tool type name.

Returns: The ingredient  
Return Type: [ToolIngredient](/mods/farmersdelight/ToolIngredient)

```zenscript
<toolingredient:axe>

// ToolIngredient.getToolIngredient(type as string) as ToolIngredient

ToolIngredient.getToolIngredient("axe");
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| type     | string | The name of the type |


:::

:::group{name=getToolIngredient}

Get a tool ingredient from a tool type.

Returns: The ingredient  
Return Type: [ToolIngredient](/mods/farmersdelight/ToolIngredient)

```zenscript
// ToolIngredient.getToolIngredient(type as ToolType) as ToolIngredient

ToolIngredient.getToolIngredient(<tooltype:axe>);
```

| Параметр | Тип                                    | Описание      |
| -------- | -------------------------------------- | ------------- |
| type     | [ToolType](/vanilla/api/tool/ToolType) | The tool type |


:::

## Утилиты

| Тип результата                       | Является неявным |
| ------------------------------------ | ---------------- |
| [IData](/vanilla/api/data/IData)     | true             |
| [MapData](/vanilla/api/data/MapData) | true             |

## Методы

:::group{name=addGlobalAttributeModifier}

Return Type: void

```zenscript
ToolIngredient.addGlobalAttributeModifier(attribute as Attribute, name as string, value as double, operation as AttributeOperation, slotTypes as MCEquipmentSlotType[]) as void
```

| Параметр  | Тип                                                            | Описание                |
| --------- | -------------------------------------------------------------- | ----------------------- |
| attribute | [Attribute](/vanilla/api/entity/Attribute)                     | No Description Provided |
| name      | string                                                         | No Description Provided |
| value     | double                                                         | No Description Provided |
| operation | [AttributeOperation](/vanilla/api/entity/AttributeOperation)   | No Description Provided |
| slotTypes | [MCEquipmentSlotType](/vanilla/api/util/MCEquipmentSlotType)[] | No Description Provided |


:::

:::group{name=addGlobalAttributeModifier}

Return Type: void

```zenscript
ToolIngredient.addGlobalAttributeModifier(attribute as Attribute, uuid as string, name as string, value as double, operation as AttributeOperation, slotTypes as MCEquipmentSlotType[]) as void
```

| Параметр  | Тип                                                            | Описание                |
| --------- | -------------------------------------------------------------- | ----------------------- |
| attribute | [Attribute](/vanilla/api/entity/Attribute)                     | No Description Provided |
| uuid      | string                                                         | No Description Provided |
| name      | string                                                         | No Description Provided |
| value     | double                                                         | No Description Provided |
| operation | [AttributeOperation](/vanilla/api/entity/AttributeOperation)   | No Description Provided |
| slotTypes | [MCEquipmentSlotType](/vanilla/api/util/MCEquipmentSlotType)[] | No Description Provided |


:::

:::group{name=addShiftTooltip}

Return Type: void

```zenscript
ToolIngredient.addShiftTooltip(arg0 as MCTextComponent, arg1 as MCTextComponent) as void
```

| Параметр | Тип                                                                 | Описание                | Optional | DefaultValue |
| -------- | ------------------------------------------------------------------- | ----------------------- | -------- | ------------ |
| arg0     | [Компонент MCTextcomponent](/vanilla/api/util/text/MCTextComponent) | No Description Provided | false    |              |
| arg1     | [Компонент MCTextcomponent](/vanilla/api/util/text/MCTextComponent) | No Description Provided | true     |              |


:::

:::group{name=addTooltip}

Return Type: void

```zenscript
ToolIngredient.addTooltip(content as MCTextComponent) as void
```

| Параметр | Тип                                                                 | Описание                |
| -------- | ------------------------------------------------------------------- | ----------------------- |
| контент  | [Компонент MCTextcomponent](/vanilla/api/util/text/MCTextComponent) | No Description Provided |


:::

:::group{name=anyDamage}

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
// ToolIngredient.anyDamage() as MCIngredientConditioned<IIngredient>

myToolIngredient.anyDamage();
```

:::

:::group{name=clearTooltip}

Return Type: void

```zenscript
// ToolIngredient.clearTooltip() as void

myToolIngredient.clearTooltip();
```

:::

:::group{name=contains}

Return Type: boolean

```zenscript
ToolIngredient.contains(ingredient as IIngredient) as boolean
```

| Параметр   | Тип                                           | Описание                |
| ---------- | --------------------------------------------- | ----------------------- |
| ingredient | [IIngredient](/vanilla/api/items/IIngredient) | No Description Provided |


:::

:::group{name=getRemainingItem}

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
ToolIngredient.getRemainingItem(stack as IItemStack) as IItemStack
```

| Параметр | Тип                                         | Описание                |
| -------- | ------------------------------------------- | ----------------------- |
| stack    | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |


:::

:::group{name=matches}

Return Type: boolean

```zenscript
ToolIngredient.matches(stack as IItemStack) as boolean
```

| Параметр | Тип                                         | Описание                |
| -------- | ------------------------------------------- | ----------------------- |
| stack    | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |


:::

:::group{name=modifyShiftTooltip}

Return Type: void

```zenscript
ToolIngredient.modifyShiftTooltip(arg0 as ITooltipFunction, arg1 as ITooltipFunction) as void
```

| Параметр | Тип                                                     | Описание                | Optional | DefaultValue |
| -------- | ------------------------------------------------------- | ----------------------- | -------- | ------------ |
| arg0     | [ITooltipFunction](/vanilla/api/items/ITooltipFunction) | No Description Provided | false    |              |
| arg1     | [ITooltipFunction](/vanilla/api/items/ITooltipFunction) | No Description Provided | true     |              |


:::

:::group{name=modifyTooltip}

Return Type: void

```zenscript
ToolIngredient.modifyTooltip(function as ITooltipFunction) as void
```

| Параметр | Тип                                                     | Описание                |
| -------- | ------------------------------------------------------- | ----------------------- |
| function | [ITooltipFunction](/vanilla/api/items/ITooltipFunction) | No Description Provided |


:::

:::group{name=only}

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
ToolIngredient.only(condition as IIngredientCondition<IIngredient>) as MCIngredientConditioned<IIngredient>
```

| Параметр  | Тип                                                                                                                              | Описание                |
| --------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| condition | [IIngredientCondition](/vanilla/api/items/IIngredientCondition)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt; | No Description Provided |


:::

:::group{name=onlyDamaged}

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
// ToolIngredient.onlyDamaged() as MCIngredientConditioned<IIngredient>

myToolIngredient.onlyDamaged();
```

:::

:::group{name=onlyIf}

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
ToolIngredient.onlyIf(arg0 as string, arg1 as Predicate<IItemStack>) as MCIngredientConditioned<IIngredient>
```

| Параметр | Тип                                                                      | Описание                | Optional | DefaultValue |
| -------- | ------------------------------------------------------------------------ | ----------------------- | -------- | ------------ |
| arg0     | string                                                                   | No Description Provided | false    |              |
| arg1     | Predicate&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt; | No Description Provided | true     |              |


:::

:::group{name=removeGlobalAttribute}

Return Type: void

```zenscript
ToolIngredient.removeGlobalAttribute(attribute as Attribute, slotTypes as MCEquipmentSlotType[]) as void
```

| Параметр  | Тип                                                            | Описание                |
| --------- | -------------------------------------------------------------- | ----------------------- |
| attribute | [Attribute](/vanilla/api/entity/Attribute)                     | No Description Provided |
| slotTypes | [MCEquipmentSlotType](/vanilla/api/util/MCEquipmentSlotType)[] | No Description Provided |


:::

:::group{name=removeGlobalAttributeModifier}

Return Type: void

```zenscript
ToolIngredient.removeGlobalAttributeModifier(uuid as string, slotTypes as MCEquipmentSlotType[]) as void
```

| Параметр  | Тип                                                            | Описание                |
| --------- | -------------------------------------------------------------- | ----------------------- |
| uuid      | string                                                         | No Description Provided |
| slotTypes | [MCEquipmentSlotType](/vanilla/api/util/MCEquipmentSlotType)[] | No Description Provided |


:::

:::group{name=removeTooltip}

Return Type: void

```zenscript
ToolIngredient.removeTooltip(regex as string) as void
```

| Параметр | Тип    | Описание                |
| -------- | ------ | ----------------------- |
| regex    | string | No Description Provided |


:::


## Операторы

:::group{name=CONTAINS}

```zenscript
ingredient as IIngredient in myToolIngredient
```

:::

:::group{name=OR}

```zenscript
myToolIngredient | other as IIngredient
```

:::


## Свойства

| Название | Тип  | Имеет Getter | Имеет Setter | Описание                |
| -------- | ---- | ------------ | ------------ | ----------------------- |
| burnTime | void | false        | true         | No Description Provided |

