# MCIngredientTransformed

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.item.MCIngredientTransformed
```

## Interfacce Implementate
MCIngredientTransformed implementa le seguenti interfacce. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
- [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

## Methods
### anyDamage

Tipo di restituzione: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
null.anyDamage();
```

### getRemainingItem

When this ingredient stack is crafted, what will remain in the grid? Does not check if the stack matches though! Used e.g. in CrT's net.minecraft.item.crafting.ICraftingRecipe

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
null.getRemainingItem(stack as crafttweaker.api.item.IItemStack);
null.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Parameter | Type                                                              | Description                               |
| --------- | ----------------------------------------------------------------- | ----------------------------------------- |
| stack     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to provide for this ingredient. |


### matches

Does the given stack match the ingredient?

Return type: boolean

```zenscript
null.matches(stack as crafttweaker.api.item.IItemStack);
null.matches(<item:minecraft:iron_ingot>);
```

| Parameter | Type                                                              | Description        |
| --------- | ----------------------------------------------------------------- | ------------------ |
| stack     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to check |



Return type: boolean

```zenscript
myMCIngredientTransformed.matches(stack as crafttweaker.api.item.IItemStack, ignoreDamage as boolean);
```

| Parameter   | Type                                                              | Description                 |
| ----------- | ----------------------------------------------------------------- | --------------------------- |
| stack       | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Nessuna descrizione fornita |
| ignoreDanno | boolean                                                           | Nessuna descrizione fornita |


### onlyDamaged

Tipo di restituzione: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
null.onlyDamaged();
```

### onlyIf

Tipo di restituzione: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
null.onlyIf(uid as String, function as function.Predicate<crafttweaker.api.item.IItemStack>);
```

| Parameter | Type                                                                                                    | Description                 | IsOptional | Default Value |
| --------- | ------------------------------------------------------------------------------------------------------- | --------------------------- | ---------- | ------------- |
| uid       | String                                                                                                  | Nessuna descrizione fornita | false      | `null`        |
| function  | function.Predicate&lt;[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt; | Nessuna descrizione fornita | true       | `null`        |



## Properties

| Name           | Type                                                                                                           | Ha Getter | Ha Setter |
| -------------- | -------------------------------------------------------------------------------------------------------------- | --------- | --------- |
| baseIngredient | T                                                                                                              | true      | false     |
| commandString  | String                                                                                                         | true      | false     |
| items          | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[]                                            | true      | false     |
| trasformatore  | [crafttweaker.api.item.IIngredientTransformer](/vanilla/api/items/IIngredientTransformer)&lt;T&gt; | true      | false     |

## Operators
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

