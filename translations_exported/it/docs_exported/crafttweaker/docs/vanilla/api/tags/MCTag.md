# MCTag

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.tag.MCTag
```

## Interfacce Implementate
MCTag implementa le seguenti interfacce. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
- [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

## Metodi
### addBlocks

```zenscript
myMCTag.addBlocks(blocchi come crafttweaker.api.block.MCBlock[]);
```

| Parametro | Tipo                                                            | Descrizione                 |
| --------- | --------------------------------------------------------------- | --------------------------- |
| blocchi   | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[] | Nessuna descrizione fornita |


### addEntityTypes

```zenscript
myMCTag.addEntityTypes(entities as crafttweaker.api.entity.MCEntityType[]);
```

| Parametro | Tipo                                                                         | Descrizione                 |
| --------- | ---------------------------------------------------------------------------- | --------------------------- |
| entità    | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | Nessuna descrizione fornita |


### addFluids

```zenscript
myMCTag.addFluids(fluidi come crafttweaker.api.fluid.MCFluid[]);
```

| Parametro | Tipo                                                           | Descrizione                 |
| --------- | -------------------------------------------------------------- | --------------------------- |
| fluidi    | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)[] | Nessuna descrizione fornita |


### addItems

Aggiunge elementi a questo tag, fallirà se questo non è un tag che può contenere oggetti

```zenscript
myMCTag.addItems(items as crafttweaker.api.item.IItemStack[]);
myMCTag.addItems(<item:minecraft:dirt>);
```

| Parametro | Tipo                                                                | Descrizione                   |
| --------- | ------------------------------------------------------------------- | ----------------------------- |
| elementi  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | Elementi da aggiungere al tag |


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

Quando questa pila di ingredienti è creata, cosa rimarrà nella griglia? Non controlla se lo stack corrisponde però! Usato, ad esempio, nella net.minecraft.item.crafting.ICraftingRecipe

Tipo di restituzione: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
null.getRemainingItem(stack as crafttweaker.api.item.IItemStack);
null.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Parametro | Tipo                                                              | Descrizione                             |
| --------- | ----------------------------------------------------------------- | --------------------------------------- |
| pila      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | La pila per fornire questo ingrediente. |


### corrispondenze

Lo stack dato corrisponde all'ingrediente?

Tipo restituito: booleano

```zenscript
null.matches(stack as crafttweaker.api.item.IItemStack);
null.matches(<item:minecraft:iron_ingot>);
```

| Parametro | Tipo                                                              | Descrizione             |
| --------- | ----------------------------------------------------------------- | ----------------------- |
| pila      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Lo stack da controllare |



Lo stack dato corrisponde all'ingrediente?

Tipo restituito: booleano

```zenscript
null.matches(stack as crafttweaker.api.item.IItemStack, ignoreDamage as boolean);
```

| Parametro   | Tipo                                                              | Descrizione                            |
| ----------- | ----------------------------------------------------------------- | -------------------------------------- |
| pila        | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Lo stack da controllare                |
| ignoreDanno | boolean                                                           | I danni dovrebbero essere controllati? |


### Solo Danneggiato

Tipo di restituzione: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
null.onlyDamaged();
```

### onlyIf

Tipo di restituzione: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
null.onlyIf(uid as String, function as function.Predicate<crafttweaker.api.item.IItemStack>);
```

| Parametro | Tipo                                                                                                    | Descrizione                 | IsOptional | Valore Predefinito |
| --------- | ------------------------------------------------------------------------------------------------------- | --------------------------- | ---------- | ------------------ |
| uid       | Stringa                                                                                                 | Nessuna descrizione fornita | falso      | `null`             |
| funzione  | function.Predicate&lt;[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt; | Nessuna descrizione fornita | vero       | `null`             |


### removeBlocks

```zenscript
myMCTag.removeBlocks(block as crafttweaker.api.block.MCBlock[]);
```

| Parametro | Tipo                                                            | Descrizione                 |
| --------- | --------------------------------------------------------------- | --------------------------- |
| blocchi   | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[] | Nessuna descrizione fornita |


### removeEntityTypes

```zenscript
myMCTag.removeEntityTypes(entities as crafttweaker.api.entity.MCEntityType[]);
```

| Parametro | Tipo                                                                         | Descrizione                 |
| --------- | ---------------------------------------------------------------------------- | --------------------------- |
| entità    | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | Nessuna descrizione fornita |


### removeFluidi

```zenscript
myMCTag.removeFluidi(fluidi come crafttweaker.api.fluid.MCFluid[]);
```

| Parametro | Tipo                                                           | Descrizione                 |
| --------- | -------------------------------------------------------------- | --------------------------- |
| fluidi    | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)[] | Nessuna descrizione fornita |


### removeItems

rimuove gli elementi da questo tag, fallirà se questo non è un tag che può contenere oggetti

```zenscript
myMCTag.removeItems(items as crafttweaker.api.item.IItemStack[]);
myMCTag.removeItems(<item:minecraft:dirt>);
```

| Parametro | Tipo                                                                | Descrizione                  |
| --------- | ------------------------------------------------------------------- | ---------------------------- |
| elementi  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | Oggetti da rimuovere dal tag |



## Proprietà

| Nome            | Tipo                                                                             | Ha Getter | Ha Setter |
| --------------- | -------------------------------------------------------------------------------- | --------- | --------- |
| blocchi         | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[]                  | vero      | falso     |
| commandString   | Stringa                                                                          | vero      | falso     |
| entityTypes     | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[]     | vero      | falso     |
| firstBlock      | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)                    | vero      | falso     |
| firstEntityType | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)       | vero      | falso     |
| primaFluido     | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)                     | vero      | falso     |
| firstItem       | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                | vero      | falso     |
| fluidi          | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)[]                   | vero      | falso     |
| id              | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | vero      | falso     |
| isBlockTag      | boolean                                                                          | vero      | falso     |
| isEntityTypeTag | boolean                                                                          | vero      | falso     |
| isFluidTag      | boolean                                                                          | vero      | falso     |
| isItemTag       | boolean                                                                          | vero      | falso     |
| elementi        | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[]              | vero      | falso     |

## Operatori
### O

```zenscript
<tag:ingotIron> <unk> altro come crafttweaker.api.item.IIngredient
```

| Parametro | Tipo                                                                | Descrizione                 |
| --------- | ------------------------------------------------------------------- | --------------------------- |
| altri     | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | Nessuna descrizione fornita |

## Caster

| Tipo Risultato                                             | Implicito |
| ---------------------------------------------------------- | --------- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)     | vero      |
| [crafttweaker.api.data.MapData](/vanilla/api/data/MapData) | vero      |

