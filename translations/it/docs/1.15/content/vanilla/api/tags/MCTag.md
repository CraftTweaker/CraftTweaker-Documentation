# MCTag

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la Classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.tag.MCTag
```

## Interfacce Implementate
MCTag implements the following interfaces. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

## Metodi
### addBlocks

```zenscript
myMCTag.addBlocks(blocks as crafttweaker.api.block.MCBlock[]);
```

| Parametro | Tipo                                                            | Descrizione                 |
| --------- | --------------------------------------------------------------- | --------------------------- |
| blocks    | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[] | Nessuna descrizione fornita |


### addEntityTypes

```zenscript
myMCTag.addEntityTypes(entities as crafttweaker.api.entity.MCEntityType[]);
```

| Parametro | Tipo                                                                         | Descrizione                 |
| --------- | ---------------------------------------------------------------------------- | --------------------------- |
| entities  | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | Nessuna descrizione fornita |


### addItems

```zenscript
myMCTag.addItems(items as crafttweaker.api.item.IItemStack[]);
```

| Parametro | Tipo                                                                | Descrizione                 |
| --------- | ------------------------------------------------------------------- | --------------------------- |
| items     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | Nessuna descrizione fornita |


### createBlockTag

Returns [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createBlockTag();
```

### createEntityTypeTag

Returns [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createEntityTypeTag();
```

### createItemTag

Returns [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createItemTag();
```

### getRemainingItem

When this ingredient stack is crafted, what will remain in the grid? Does not check if the stack matches though! Used e.g. in CrT's net.minecraft.item.crafting.ICraftingRecipe

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCTag.getRemainingItem(stack as crafttweaker.api.item.IItemStack);
myMCTag.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Parametro | Tipo                                                              | Descrizione                               |
| --------- | ----------------------------------------------------------------- | ----------------------------------------- |
| stack     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to provide for this ingredient. |


### matches

Does the given stack match the ingredient?

Restituisce un booleano

```zenscript
myMCTag.matches(stack as crafttweaker.api.item.IItemStack);
myMCTag.matches(<item:minecraft:iron_ingot>);
```

| Parametro | Tipo                                                              | Descrizione        |
| --------- | ----------------------------------------------------------------- | ------------------ |
| stack     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to check |


### removeBlocks

```zenscript
myMCTag.removeBlocks(blocks as crafttweaker.api.block.MCBlock[]);
```

| Parametro | Tipo                                                            | Descrizione                 |
| --------- | --------------------------------------------------------------- | --------------------------- |
| blocks    | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[] | Nessuna descrizione fornita |


### removeEntityTypes

```zenscript
myMCTag.removeEntityTypes(entities as crafttweaker.api.entity.MCEntityType[]);
```

| Parametro | Tipo                                                                         | Descrizione                 |
| --------- | ---------------------------------------------------------------------------- | --------------------------- |
| entities  | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | Nessuna descrizione fornita |


### removeItems

```zenscript
myMCTag.removeItems(items as crafttweaker.api.item.IItemStack[]);
```

| Parametro | Tipo                                                                | Descrizione                 |
| --------- | ------------------------------------------------------------------- | --------------------------- |
| items     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | Nessuna descrizione fornita |



## Proprietà

| Nome          | Tipo                                                                         | Ha Getter | Ha Setter |
| ------------- | ---------------------------------------------------------------------------- | --------- | --------- |
| blocks        | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[]              | sì        | no        |
| commandString | String                                                                       | sì        | no        |
| entityTypes   | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | sì        | no        |
| items         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[]          | sì        | no        |

## Caster

| Tipo Risultato                                             | Implicito |
| ---------------------------------------------------------- | --------- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)     | sì        |
| [crafttweaker.api.data.MapData](/vanilla/api/data/MapData) | sì        |

