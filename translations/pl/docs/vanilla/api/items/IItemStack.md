# IItemStack

This represents an item. It can be retrieved using an Item BEP. Is an [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importowanie klasy
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.item.IItemStack
```

## Implemented Interfaces
IItemStack implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

## Metody
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

| Parametr | Typ                                                               | Opis                                      |
| -------- | ----------------------------------------------------------------- | ----------------------------------------- |
| stos     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to provide for this ingredient. |


### dopasowania

Does the given stack match the ingredient?

Returns boolean

```zenscript
<item:minecraft:dirt>.matches(stack as crafttweaker.api.item.IItemStack);
<item:minecraft:dirt>.matches(<item:minecraft:iron_ingot>);
```

| Parametr | Typ                                                               | Opis               |
| -------- | ----------------------------------------------------------------- | ------------------ |
| stos     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to check |


### setDisplayName

Sets the display name of the ItemStack

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.setDisplayName(name as String);
<item:minecraft:dirt>.setDisplayName("totally not dirt");
```

| Parametr | Typ         | Opis                   |
| -------- | ----------- | ---------------------- |
| Nazwa    | Ciąg znaków | New name of the stack. |


### withDamage

Sets the damage of the ItemStack

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.withDamage(damage as int);
<item:minecraft:dirt>.withDamage(10);
```

| Parametr  | Typ    | Opis                 |
| --------- | ------ | -------------------- |
| obrażenia | odcień | the new damage value |


### withTag

Sets the tag for the ItemStack.

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.withTag(tag as crafttweaker.api.data.IData);
<item:minecraft:dirt>.withTag({Display: {lore: ["Hello"]}});
```

| Parametr | Typ                                                    | Opis            |
| -------- | ------------------------------------------------------ | --------------- |
| znacznik | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The tag to set. |



## Właściwości

| Nazwisko            | Typ                                                                 | Has Getter | Has Setter |
| ------------------- | ------------------------------------------------------------------- | ---------- | ---------- |
| kwota               | odcień                                                              | prawda     | fałszywy   |
| spalony Czas        | odcień                                                              | prawda     | prawda     |
| polecenie           | Ciąg znaków                                                         | prawda     | fałszywy   |
| Uszkodzone          | boolean                                                             | prawda     | fałszywy   |
| damaged             | boolean                                                             | prawda     | fałszywy   |
| nazwa wyświetlacza  | Ciąg znaków                                                         | prawda     | fałszywy   |
| puste               | boolean                                                             | prawda     | fałszywy   |
| food                | [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)            | prawda     | prawda     |
| getOrCreate         | [crafttweaker.api.data.IData](/vanilla/api/data/IData)              | prawda     | fałszywy   |
| getRepairCost       | odcień                                                              | prawda     | fałszywy   |
| hasDisplayName      | boolean                                                             | prawda     | fałszywy   |
| hasEffect           | boolean                                                             | prawda     | fałszywy   |
| Tag hasa            | boolean                                                             | prawda     | fałszywy   |
| isCrossbow          | boolean                                                             | prawda     | fałszywy   |
| możliwe do zaklęcia | boolean                                                             | prawda     | fałszywy   |
| zaczarowana         | boolean                                                             | prawda     | fałszywy   |
| elementy            | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | prawda     | fałszywy   |
| maxDamage           | odcień                                                              | prawda     | fałszywy   |
| maxStackSize        | odcień                                                              | prawda     | fałszywy   |
| registryName        | Ciąg znaków                                                         | prawda     | fałszywy   |
| stackable           | boolean                                                             | prawda     | fałszywy   |
| znacznik            | [crafttweaker.api.data.IData](/vanilla/api/data/IData)              | prawda     | fałszywy   |
| translationKey      | Ciąg znaków                                                         | prawda     | fałszywy   |
| useDuration         | odcień                                                              | prawda     | fałszywy   |

## Operatorzy
### MUL

Sets the amount of the ItemStack

```zenscript
<item:minecraft:dirt> * amount as int
<item:minecraft:dirt> * 3
```

| Parametr | Typ    | Opis       |
| -------- | ------ | ---------- |
| kwota    | odcień | new amount |

## Casters

| Result type                                                       | Is Implicit |
| ----------------------------------------------------------------- | ----------- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)            | prawda      |
| [crafttweaker.api.data.MapData](/vanilla/api/data/MapData)        | prawda      |
| [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | fałszywy    |

