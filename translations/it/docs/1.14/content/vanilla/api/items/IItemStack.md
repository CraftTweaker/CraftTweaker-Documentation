# IItemStack

This represents an item. It can be retrieved using an Item BEP. Is an [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la Classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.item.IItemStack
```

## Interfacce Implementate
IItemStack implements the following interfaces. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

## Metodi
### clearCustomName

Clears any custom name set for this ItemStack

```zenscript
<item:minecraft:dirt>.clearCustomName();
```

### getRemainingItem

When this ingredient stack is crafted, what will remain in the grid? Does not check if the stack matches though! Used e.g. in CrT's net.minecraft.item.crafting.ICraftingRecipe

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.getRemainingItem(stack as crafttweaker.api.item.IItemStack);
<item:minecraft:dirt>.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Parametro | Tipo                                                              | Descrizione                               |
| --------- | ----------------------------------------------------------------- | ----------------------------------------- |
| stack     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to provide for this ingredient. |


### matches

Does the given stack match the ingredient?

Restituisce un booleano

```zenscript
<item:minecraft:dirt>.matches(stack as crafttweaker.api.item.IItemStack);
<item:minecraft:dirt>.matches(<item:minecraft:iron_ingot>);
```

| Parametro | Tipo                                                              | Descrizione        |
| --------- | ----------------------------------------------------------------- | ------------------ |
| stack     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to check |


### setDisplayName

Sets the display name of the ItemStack

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.setDisplayName(name as String);
<item:minecraft:dirt>.setDisplayName("totally not dirt");
```

| Parametro | Tipo   | Descrizione            |
| --------- | ------ | ---------------------- |
| nome      | String | New name of the stack. |


### withDamage

Sets the damage of the ItemStack

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.withDamage(damage as int);
<item:minecraft:dirt>.withDamage(10);
```

| Parametro | Tipo | Descrizione          |
| --------- | ---- | -------------------- |
| damage    | int  | the new damage value |


### withTag

Sets the tag for the ItemStack.

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.withTag(tag as crafttweaker.api.data.IData);
<item:minecraft:dirt>.withTag({Display: {lore: ["Hello"]}});
```

| Parametro | Tipo                                                   | Descrizione     |
| --------- | ------------------------------------------------------ | --------------- |
| tag       | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The tag to set. |



## Proprietà

| Nome           | Tipo                                                                | Ha Getter | Ha Setter |
| -------------- | ------------------------------------------------------------------- | --------- | --------- |
| amount         | int                                                                 | sì        | no        |
| burnTime       | int                                                                 | sì        | sì        |
| commandString  | String                                                              | sì        | no        |
| damageable     | boolean                                                             | sì        | no        |
| damaged        | boolean                                                             | sì        | no        |
| displayName    | String                                                              | sì        | no        |
| empty          | boolean                                                             | sì        | no        |
| food           | [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)            | sì        | sì        |
| getOrCreate    | [crafttweaker.api.data.IData](/vanilla/api/data/IData)              | sì        | no        |
| getRepairCost  | int                                                                 | sì        | no        |
| hasDisplayName | boolean                                                             | sì        | no        |
| hasEffect      | boolean                                                             | sì        | no        |
| hasTag         | boolean                                                             | sì        | no        |
| isCrossbow     | boolean                                                             | sì        | no        |
| isEnchantable  | boolean                                                             | sì        | no        |
| isEnchanted    | boolean                                                             | sì        | no        |
| items          | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | sì        | no        |
| maxDamage      | int                                                                 | sì        | no        |
| maxStackSize   | int                                                                 | sì        | no        |
| registryName   | String                                                              | sì        | no        |
| stackable      | boolean                                                             | sì        | no        |
| tag            | [crafttweaker.api.data.IData](/vanilla/api/data/IData)              | sì        | no        |
| translationKey | String                                                              | sì        | no        |
| useDuration    | int                                                                 | sì        | no        |

## Operators
### MUL

Sets the amount of the ItemStack

```zenscript
<item:minecraft:dirt> * amount as int
<item:minecraft:dirt> * 3
```

| Parametro | Tipo | Descrizione |
| --------- | ---- | ----------- |
| amount    | int  | new amount  |

## Caster

| Tipo Risultato                                                    | Implicito |
| ----------------------------------------------------------------- | --------- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)            | sì        |
| [crafttweaker.api.data.MapData](/vanilla/api/data/MapData)        | sì        |
| [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | no        |

