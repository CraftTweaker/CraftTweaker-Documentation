# MCTag

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.tag.MCTag
```

## Interfacce Implementate
MCTag implementa le seguenti interfacce. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
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


### addItems

```zenscript
myMCTag.addItems(elementi come crafttweaker.api.item.IItemStack[]);
```

| Parametro | Tipo                                                                | Descrizione                 |
| --------- | ------------------------------------------------------------------- | --------------------------- |
| elementi  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | Nessuna descrizione fornita |


### createBlockTag

Restituisce [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createBlockTag();
```

### createEntityTypeTag

Restituisce [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createEntityTypeTag();
```

### createItemTag

Restituisce [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createItemTag();
```

### getRemainingItem

Quando questa pila di ingredienti è creata, cosa rimarrà nella griglia? Non controlla se lo stack corrisponde però! Usato, ad esempio, nella net.minecraft.item.crafting.ICraftingRecipe

Restituisce [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCTag.getRemainingItem(stack as crafttweaker.api.item.IItemStack);
myMCTag.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Parametro | Tipo                                                              | Descrizione                             |
| --------- | ----------------------------------------------------------------- | --------------------------------------- |
| pila      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | La pila per fornire questo ingrediente. |


### corrispondenze

Lo stack dato corrisponde all'ingrediente?

Restituisce un booleano

```zenscript
myMCTag.matches(stack as crafttweaker.api.item.IItemStack);
myMCTag.matches(<item:minecraft:iron_ingot>);
```

| Parametro | Tipo                                                              | Descrizione             |
| --------- | ----------------------------------------------------------------- | ----------------------- |
| pila      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Lo stack da controllare |


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


### removeItems

```zenscript
myMCTag.removeItems(elementi come crafttweaker.api.item.IItemStack[]);
```

| Parametro | Tipo                                                                | Descrizione                 |
| --------- | ------------------------------------------------------------------- | --------------------------- |
| elementi  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | Nessuna descrizione fornita |



## Proprietà

| Nome          | Tipo                                                                         | Ha Getter | Ha Setter |
| ------------- | ---------------------------------------------------------------------------- | --------- | --------- |
| blocchi       | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[]              | vero      | falso     |
| commandString | Stringa                                                                      | vero      | falso     |
| entityTypes   | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | vero      | falso     |
| elementi      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[]          | vero      | falso     |

## Caster

| Tipo Risultato                                             | Implicito |
| ---------------------------------------------------------- | --------- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)     | vero      |
| [crafttweaker.api.data.MapData](/vanilla/api/data/MapData) | vero      |

