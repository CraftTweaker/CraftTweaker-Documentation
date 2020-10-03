# MCTag

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.tag.MCTag
```

## Interfacce Implementate
MCTag implements the following interfaces. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
- [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

## Methods
### addBlocks

```zenscript
myMCTag.addBlocks(blocks as crafttweaker.api.block.MCBlock[]);
```

| Parameter | Type                                                            | Description                 |
| --------- | --------------------------------------------------------------- | --------------------------- |
| blocks    | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[] | Nessuna descrizione fornita |


### addEntityTypes

```zenscript
myMCTag.addEntityTypes(entities as crafttweaker.api.entity.MCEntityType[]);
```

| Parameter | Type                                                                         | Description                 |
| --------- | ---------------------------------------------------------------------------- | --------------------------- |
| entities  | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | Nessuna descrizione fornita |


### addFluids

```zenscript
myMCTag.addFluids(fluidi come crafttweaker.api.fluid.MCFluid[]);
```

| Parameter | Type                                                           | Description                 |
| --------- | -------------------------------------------------------------- | --------------------------- |
| fluids    | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)[] | Nessuna descrizione fornita |


### addItems

Aggiunge elementi a questo tag, fallirà se questo non è un tag che può contenere oggetti

```zenscript
myMCTag.addItems(items as crafttweaker.api.item.IItemStack[]);
myMCTag.addItems(<item:minecraft:dirt>);
```

| Parameter | Type                                                                | Description                   |
| --------- | ------------------------------------------------------------------- | ----------------------------- |
| items     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | Elementi da aggiungere al tag |


### anyDamage

Tipo di restituzione: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
null.anyDamage();
```

### createBlockTag

Tipo di restituzione: [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createBlockTag();
```

### createEntityTypeTag

Tipo di restituzione: [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createEntityTypeTag();
```

### createFluidTag

Tipo di restituzione: [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createFluidTag();
```

### createItemTag

Tipo di restituzione: [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createItemTag();
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



Does the given stack match the ingredient?

Return type: boolean

```zenscript
null.matches(stack as crafttweaker.api.item.IItemStack, ignoreDamage as boolean);
```

| Parameter   | Type                                                              | Description                            |
| ----------- | ----------------------------------------------------------------- | -------------------------------------- |
| stack       | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to check                     |
| ignoreDanno | boolean                                                           | I danni dovrebbero essere controllati? |


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


### removeBlocks

```zenscript
myMCTag.removeBlocks(blocks as crafttweaker.api.block.MCBlock[]);
```

| Parameter | Type                                                            | Description                 |
| --------- | --------------------------------------------------------------- | --------------------------- |
| blocks    | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[] | Nessuna descrizione fornita |


### removeEntityTypes

```zenscript
myMCTag.removeEntityTypes(entities as crafttweaker.api.entity.MCEntityType[]);
```

| Parameter | Type                                                                         | Description                 |
| --------- | ---------------------------------------------------------------------------- | --------------------------- |
| entities  | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | Nessuna descrizione fornita |


### removeFluidi

```zenscript
myMCTag.removeFluidi(fluidi come crafttweaker.api.fluid.MCFluid[]);
```

| Parameter | Type                                                           | Description                 |
| --------- | -------------------------------------------------------------- | --------------------------- |
| fluids    | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)[] | Nessuna descrizione fornita |


### removeItems

rimuove gli elementi da questo tag, fallirà se questo non è un tag che può contenere oggetti

```zenscript
myMCTag.removeItems(items as crafttweaker.api.item.IItemStack[]);
myMCTag.removeItems(<item:minecraft:dirt>);
```

| Parameter | Type                                                                | Description                  |
| --------- | ------------------------------------------------------------------- | ---------------------------- |
| items     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | Oggetti da rimuovere dal tag |



## Properties

| Name            | Type                                                                             | Ha Getter | Ha Setter |
| --------------- | -------------------------------------------------------------------------------- | --------- | --------- |
| blocks          | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[]                  | true      | false     |
| commandString   | String                                                                           | true      | false     |
| entityTypes     | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[]     | true      | false     |
| firstBlock      | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)                    | true      | false     |
| firstEntityType | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)       | true      | false     |
| primaFluido     | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)                     | true      | false     |
| firstItem       | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                | true      | false     |
| fluids          | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)[]                   | true      | false     |
| id              | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | true      | false     |
| isBlockTag      | boolean                                                                          | true      | false     |
| isEntityTypeTag | boolean                                                                          | true      | false     |
| isFluidTag      | boolean                                                                          | true      | false     |
| isItemTag       | boolean                                                                          | true      | false     |
| items           | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[]              | true      | false     |

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

