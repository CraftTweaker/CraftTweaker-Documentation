# ToolIngredient

An ingredient that matches any item with the given tool type.

This class was added by a mod with mod-id `farmersdelight`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.farmersdelight.ToolIngredient;
```


## Interfacce Implementate
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

| Parametro | Tipo   | Descrizione          |
| --------- | ------ | -------------------- |
| type      | string | The name of the type |


:::

:::group{name=getToolIngredient}

Get a tool ingredient from a tool type.

Returns: The ingredient  
Return Type: [ToolIngredient](/mods/farmersdelight/ToolIngredient)

```zenscript
// ToolIngredient.getToolIngredient(type as ToolType) as ToolIngredient

ToolIngredient.getToolIngredient(<tooltype:axe>);
```

| Parametro | Tipo                                   | Descrizione          |
| --------- | -------------------------------------- | -------------------- |
| type      | [ToolType](/vanilla/api/tool/ToolType) | Il tipo di strumento |


:::

## Caster

| Tipo Risultato                       | Implicito |
| ------------------------------------ | --------- |
| [IData](/vanilla/api/data/IData)     | sì        |
| [MapData](/vanilla/api/data/MapData) | sì        |

## Metodi

:::group{name=addGlobalAttributeModifier}

Return Type: void

```zenscript
ToolIngredient.addGlobalAttributeModifier(attribute as Attribute, name as string, value as double, operation as AttributeOperation, slotTypes as MCEquipmentSlotType[]) as void
```

| Parametro | Tipo                                                           | Descrizione             |
| --------- | -------------------------------------------------------------- | ----------------------- |
| attribute | [Attribute](/vanilla/api/entity/Attribute)                     | No Description Provided |
| nome      | string                                                         | No Description Provided |
| valore    | double                                                         | No Description Provided |
| operation | [AttributeOperation](/vanilla/api/entity/AttributeOperation)   | No Description Provided |
| slotTypes | [MCEquipmentSlotType](/vanilla/api/util/MCEquipmentSlotType)[] | No Description Provided |


:::

:::group{name=addGlobalAttributeModifier}

Return Type: void

```zenscript
ToolIngredient.addGlobalAttributeModifier(attribute as Attribute, uuid as string, name as string, value as double, operation as AttributeOperation, slotTypes as MCEquipmentSlotType[]) as void
```

| Parametro | Tipo                                                           | Descrizione             |
| --------- | -------------------------------------------------------------- | ----------------------- |
| attribute | [Attribute](/vanilla/api/entity/Attribute)                     | No Description Provided |
| uuid      | string                                                         | No Description Provided |
| nome      | string                                                         | No Description Provided |
| valore    | double                                                         | No Description Provided |
| operation | [AttributeOperation](/vanilla/api/entity/AttributeOperation)   | No Description Provided |
| slotTypes | [MCEquipmentSlotType](/vanilla/api/util/MCEquipmentSlotType)[] | No Description Provided |


:::

:::group{name=addShiftTooltip}

Return Type: void

```zenscript
ToolIngredient.addShiftTooltip(arg0 as MCTextComponent, arg1 as MCTextComponent) as void
```

| Parametro | Tipo                                                      | Descrizione             | Optional | DefaultValue |
| --------- | --------------------------------------------------------- | ----------------------- | -------- | ------------ |
| arg0      | [MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No Description Provided | no       |              |
| arg1      | [MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No Description Provided | sì       |              |


:::

:::group{name=addTooltip}

Return Type: void

```zenscript
ToolIngredient.addTooltip(content as MCTextComponent) as void
```

| Parametro | Tipo                                                      | Descrizione             |
| --------- | --------------------------------------------------------- | ----------------------- |
| contenuto | [MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No Description Provided |


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

| Parametro  | Tipo                                          | Descrizione             |
| ---------- | --------------------------------------------- | ----------------------- |
| ingredient | [IIngredient](/vanilla/api/items/IIngredient) | No Description Provided |


:::

:::group{name=getRemainingItem}

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
ToolIngredient.getRemainingItem(stack as IItemStack) as IItemStack
```

| Parametro | Tipo                                        | Descrizione             |
| --------- | ------------------------------------------- | ----------------------- |
| stack     | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |


:::

:::group{name=matches}

Return Type: boolean

```zenscript
ToolIngredient.matches(stack as IItemStack) as boolean
```

| Parametro | Tipo                                        | Descrizione             |
| --------- | ------------------------------------------- | ----------------------- |
| stack     | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |


:::

:::group{name=modifyShiftTooltip}

Return Type: void

```zenscript
ToolIngredient.modifyShiftTooltip(arg0 as ITooltipFunction, arg1 as ITooltipFunction) as void
```

| Parametro | Tipo                                                    | Descrizione             | Optional | DefaultValue |
| --------- | ------------------------------------------------------- | ----------------------- | -------- | ------------ |
| arg0      | [ITooltipFunction](/vanilla/api/items/ITooltipFunction) | No Description Provided | no       |              |
| arg1      | [ITooltipFunction](/vanilla/api/items/ITooltipFunction) | No Description Provided | sì       |              |


:::

:::group{name=modifyTooltip}

Return Type: void

```zenscript
ToolIngredient.modifyTooltip(function as ITooltipFunction) as void
```

| Parametro | Tipo                                                    | Descrizione             |
| --------- | ------------------------------------------------------- | ----------------------- |
| function  | [ITooltipFunction](/vanilla/api/items/ITooltipFunction) | No Description Provided |


:::

:::group{name=only}

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
ToolIngredient.only(condition as IIngredientCondition<IIngredient>) as MCIngredientConditioned<IIngredient>
```

| Parametro | Tipo                                                                                                                             | Descrizione             |
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

| Parametro | Tipo                                                                     | Descrizione             | Optional | DefaultValue |
| --------- | ------------------------------------------------------------------------ | ----------------------- | -------- | ------------ |
| arg0      | string                                                                   | No Description Provided | no       |              |
| arg1      | Predicate&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt; | No Description Provided | sì       |              |


:::

:::group{name=removeGlobalAttribute}

Return Type: void

```zenscript
ToolIngredient.removeGlobalAttribute(attribute as Attribute, slotTypes as MCEquipmentSlotType[]) as void
```

| Parametro | Tipo                                                           | Descrizione             |
| --------- | -------------------------------------------------------------- | ----------------------- |
| attribute | [Attribute](/vanilla/api/entity/Attribute)                     | No Description Provided |
| slotTypes | [MCEquipmentSlotType](/vanilla/api/util/MCEquipmentSlotType)[] | No Description Provided |


:::

:::group{name=removeGlobalAttributeModifier}

Return Type: void

```zenscript
ToolIngredient.removeGlobalAttributeModifier(uuid as string, slotTypes as MCEquipmentSlotType[]) as void
```

| Parametro | Tipo                                                           | Descrizione             |
| --------- | -------------------------------------------------------------- | ----------------------- |
| uuid      | string                                                         | No Description Provided |
| slotTypes | [MCEquipmentSlotType](/vanilla/api/util/MCEquipmentSlotType)[] | No Description Provided |


:::

:::group{name=removeTooltip}

Return Type: void

```zenscript
ToolIngredient.removeTooltip(regex as string) as void
```

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| regex     | string | No Description Provided |


:::


## Operators

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


## Proprietà

| Nome     | Tipo | Ha Getter | Ha Setter | Descrizione             |
| -------- | ---- | --------- | --------- | ----------------------- |
| burnTime | void | no        | sì        | No Description Provided |

