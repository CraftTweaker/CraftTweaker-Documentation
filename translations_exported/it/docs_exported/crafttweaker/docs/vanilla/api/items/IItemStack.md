# IItemStack

This represents an item. It can be retrieved using an Item BEP. Is an [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.item.IItemStack
```

## Interfacce Implementate
IItemStack implements the following interfaces. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
- [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

## Methods
### addShiftTooltip

```zenscript
<item:minecraft:dirt>.addShiftTooltip(contenuto come crafttweaker.api.util.text.MCTextComponent, showMessage as crafttweaker.api.util.text.MCTextComponent);
```

| Parameter   | Type                                                                                 | Description                 | IsOptional | Default Value |
| ----------- | ------------------------------------------------------------------------------------ | --------------------------- | ---------- | ------------- |
| contenuto   | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | Nessuna descrizione fornita | false      | `null`        |
| showMessage | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | Nessuna descrizione fornita | true       | `null`        |


### addTooltip

```zenscript
<item:minecraft:dirt>.addTooltip(contenuto come crafttweaker.api.util.text.MCTextComponent);
```

| Parameter | Type                                                                                 | Description                 |
| --------- | ------------------------------------------------------------------------------------ | --------------------------- |
| contenuto | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | Nessuna descrizione fornita |


### anyDamage

Tipo di restituzione: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<item:minecraft:dirt>.anyDamage();
```

### clearCustomName

Clears any custom name set for this ItemStack

```zenscript
<item:minecraft:dirt>.clearCustomName();
```

### clearTooltip

```zenscript
<item:minecraft:dirt>.clearTooltip();
```

### copy

Crea una copia

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.copy();
```

### getRemainingItem

When this ingredient stack is crafted, what will remain in the grid? Does not check if the stack matches though! Used e.g. in CrT's net.minecraft.item.crafting.ICraftingRecipe

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.getRemainingItem(stack as crafttweaker.api.item.IItemStack);
<item:minecraft:dirt>.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Parameter | Type                                                              | Description                               |
| --------- | ----------------------------------------------------------------- | ----------------------------------------- |
| stack     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to provide for this ingredient. |


### matches

Does the given stack match the ingredient?

Return type: boolean

```zenscript
<item:minecraft:dirt>.matches(stack as crafttweaker.api.item.IItemStack);
<item:minecraft:dirt>.matches(<item:minecraft:iron_ingot>);
```

| Parameter | Type                                                              | Description        |
| --------- | ----------------------------------------------------------------- | ------------------ |
| stack     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to check |



Does the given stack match the ingredient?

Return type: boolean

```zenscript
<item:minecraft:dirt>.matches(stack as crafttweaker.api.item.IItemStack, ignoreDamage as boolean);
```

| Parameter   | Type                                                              | Description                            |
| ----------- | ----------------------------------------------------------------- | -------------------------------------- |
| stack       | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to check                     |
| ignoreDanno | boolean                                                           | I danni dovrebbero essere controllati? |


### modifyTooltip

```zenscript
<item:minecraft:dirt>.modifyTooltip(function as crafttweaker.api.item.tooltip.ITooltipFunction);
```

| Parameter | Type                                                                                              | Description                 |
| --------- | ------------------------------------------------------------------------------------------------- | --------------------------- |
| function  | [crafttweaker.api.item.tooltip.ITooltipFunction](/crafttweaker/api/item/tooltip/ITooltipFunction) | Nessuna descrizione fornita |


### mutabile

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.mutable();
```

### onlyDamaged

Tipo di restituzione: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<item:minecraft:dirt>.onlyDamaged();
```

### onlyIf

Tipo di restituzione: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<item:minecraft:dirt>.onlyIf(uid as String, function as function.Predicate<crafttweaker.api.item.IItemStack>);
```

| Parameter | Type                                                                                                    | Description                 | IsOptional | Default Value |
| --------- | ------------------------------------------------------------------------------------------------------- | --------------------------- | ---------- | ------------- |
| uid       | String                                                                                                  | Nessuna descrizione fornita | false      | `null`        |
| function  | function.Predicate&lt;[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt; | Nessuna descrizione fornita | true       | `null`        |


### removeTooltip

```zenscript
<item:minecraft:dirt>.removeTooltip(regex as String);
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| regex     | String | Nessuna descrizione fornita |


### setDisplayName

Sets the display name of the ItemStack

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.setDisplayName(name as String);
<item:minecraft:dirt>.setDisplayName("totally not dirt");
```

| Parameter | Type   | Description            |
| --------- | ------ | ---------------------- |
| name      | String | New name of the stack. |


### weight

Tipo di restituzione: [crafttweaker.api.item.MCWeightedItemStack](/vanilla/api/items/MCWeightedItemStack)

```zenscript
<item:minecraft:dirt>.weight(weight as double);
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| weight    | double | Nessuna descrizione fornita |


### withDamage

Sets the damage of the ItemStack

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.withDamage(damage as int);
<item:minecraft:dirt>.withDamage(10);
```

| Parameter | Type | Description          |
| --------- | ---- | -------------------- |
| damage    | int  | the new damage value |


### withTag

Sets the tag for the ItemStack.

 Restituisce: `Questo itemStack se è mutabile, uno nuovo con la proprietà modificata altrimenti`

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.withTag(tag as crafttweaker.api.data.IData);
<item:minecraft:dirt>.withTag({Display: {lore: ["Hello"]}});
```

| Parameter | Type                                                   | Description     |
| --------- | ------------------------------------------------------ | --------------- |
| tag       | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The tag to set. |



## Properties

| Name           | Type                                                                | Ha Getter | Ha Setter |
| -------------- | ------------------------------------------------------------------- | --------- | --------- |
| amount         | int                                                                 | true      | false     |
| burnTime       | int                                                                 | true      | true      |
| commandString  | String                                                              | true      | false     |
| damage         | int                                                                 | true      | false     |
| damageable     | boolean                                                             | true      | false     |
| damaged        | boolean                                                             | true      | false     |
| displayName    | String                                                              | true      | false     |
| empty          | boolean                                                             | true      | false     |
| food           | [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)            | true      | true      |
| getOrCreate    | [crafttweaker.api.data.IData](/vanilla/api/data/IData)              | true      | false     |
| getRepairCost  | int                                                                 | true      | false     |
| hasDisplayName | boolean                                                             | true      | false     |
| hasEffect      | boolean                                                             | true      | false     |
| hasTag         | boolean                                                             | true      | false     |
| isCrossbow     | boolean                                                             | true      | false     |
| isEnchantable  | boolean                                                             | true      | false     |
| isEnchanted    | boolean                                                             | true      | false     |
| items          | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | true      | false     |
| maxDamage      | int                                                                 | true      | false     |
| maxStackSize   | int                                                                 | true      | false     |
| owner          | String                                                              | true      | false     |
| registryName   | String                                                              | true      | false     |
| stackable      | boolean                                                             | true      | false     |
| tag            | [crafttweaker.api.data.IData](/vanilla/api/data/IData)              | true      | false     |
| translationKey | String                                                              | true      | false     |
| useDuration    | int                                                                 | true      | false     |

## Operators
### MUL

Sets the amount of the ItemStack

```zenscript
<item:minecraft:dirt> * amount as int
<item:minecraft:dirt> * 3
```

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| amount    | int  | new amount  |
### MOD

```zenscript
<item:minecraft:dirt> % % as int
```

| Parameter   | Type | Description                 |
| ----------- | ---- | --------------------------- |
| percentuale | int  | Nessuna descrizione fornita |
### OR

```zenscript
<tag:ingotIron> <unk> altro come crafttweaker.api.item.IIngredient
```

| Parameter | Type                                                                | Description                 |
| --------- | ------------------------------------------------------------------- | --------------------------- |
| other     | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | Nessuna descrizione fornita |

## Caster

| Tipo Risultato                                             | Implicito |
| ---------------------------------------------------------- | --------- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)     | true      |
| [crafttweaker.api.data.MapData](/vanilla/api/data/MapData) | true      |

