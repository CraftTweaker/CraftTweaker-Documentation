# IItemStack

This represents an item. It can be retrieved using an Item BEP. Is an [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
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
| pila      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to provide for this ingredient. |


### matches

Does the given stack match the ingredient?

Restituisce un booleano

```zenscript
<item:minecraft:dirt>.matches(stack as crafttweaker.api.item.IItemStack);
<item:minecraft:dirt>.matches(<item:minecraft:iron_ingot>);
```

| Parametro | Tipo                                                              | Descrizione        |
| --------- | ----------------------------------------------------------------- | ------------------ |
| pila      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to check |


### setDisplayName

Sets the display name of the ItemStack

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.setDisplayName(name as String);
<item:minecraft:dirt>.setDisplayName("totally not dirt");
```

| Parametro | Tipo    | Descrizione            |
| --------- | ------- | ---------------------- |
| nome      | Stringa | New name of the stack. |


### withDamage

Sets the damage of the ItemStack

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.withDamage(damage as int);
<item:minecraft:dirt>.withDamage(10);
```

| Parametro | Tipo | Descrizione          |
| --------- | ---- | -------------------- |
| danno     | int  | the new damage value |


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
| importo        | int                                                                 | vero      | falso     |
| burnTime       | int                                                                 | vero      | vero      |
| commandString  | Stringa                                                             | vero      | falso     |
| danneggiabile  | boolean                                                             | vero      | falso     |
| damaged        | boolean                                                             | vero      | falso     |
| displayName    | Stringa                                                             | vero      | falso     |
| vuoto          | boolean                                                             | vero      | falso     |
| food           | [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)            | vero      | vero      |
| getOrCreate    | [crafttweaker.api.data.IData](/vanilla/api/data/IData)              | vero      | falso     |
| getRepairCost  | int                                                                 | vero      | falso     |
| hasDisplayName | boolean                                                             | vero      | falso     |
| hasEffect      | boolean                                                             | vero      | falso     |
| hasTag         | boolean                                                             | vero      | falso     |
| isCrossbow     | boolean                                                             | vero      | falso     |
| isEnchantable  | boolean                                                             | vero      | falso     |
| isEnchanted    | boolean                                                             | vero      | falso     |
| elementi       | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | vero      | falso     |
| maxDamage      | int                                                                 | vero      | falso     |
| maxStackSize   | int                                                                 | vero      | falso     |
| registryName   | Stringa                                                             | vero      | falso     |
| stackable      | boolean                                                             | vero      | falso     |
| tag            | [crafttweaker.api.data.IData](/vanilla/api/data/IData)              | vero      | falso     |
| translationKey | Stringa                                                             | vero      | falso     |
| useDuration    | int                                                                 | vero      | falso     |

## Operatori
### MUL

Sets the amount of the ItemStack

```zenscript
<item:minecraft:dirt> * amount as int
<item:minecraft:dirt> * 3
```

| Parametro | Tipo | Descrizione |
| --------- | ---- | ----------- |
| importo   | int  | new amount  |

## Caster

| Tipo Risultato                                                    | Implicito |
| ----------------------------------------------------------------- | --------- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)            | vero      |
| [crafttweaker.api.data.MapData](/vanilla/api/data/MapData)        | vero      |
| [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | falso     |

