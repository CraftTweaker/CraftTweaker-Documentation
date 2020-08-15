# IIngrediente

This is IIngredient!!!

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.item.IIngredient
```

## Interfacce Implementate
IIngredient implements the following interfaces. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Metodi
### getRemainingItem

When this ingredient stack is crafted, what will remain in the grid? Does not check if the stack matches though! Used e.g. in CrT's net.minecraft.item.crafting.ICraftingRecipe

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<tag:ingotIron>.getRemainingItem(stack as crafttweaker.api.item.IItemStack);
<tag:ingotIron>.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Parametro | Tipo                                                              | Descrizione                               |
| --------- | ----------------------------------------------------------------- | ----------------------------------------- |
| pila      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to provide for this ingredient. |


### matches

Does the given stack match the ingredient?

Restituisce un booleano

```zenscript
<tag:ingotIron>.matches(stack as crafttweaker.api.item.IItemStack);
<tag:ingotIron>.matches(<item:minecraft:iron_ingot>);
```

| Parametro | Tipo                                                              | Descrizione        |
| --------- | ----------------------------------------------------------------- | ------------------ |
| pila      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to check |



## Proprietà

| Nome          | Tipo                                                                | Ha Getter | Ha Setter |
| ------------- | ------------------------------------------------------------------- | --------- | --------- |
| commandString | Stringa                                                             | vero      | falso     |
| elementi      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | vero      | falso     |

## Caster

| Tipo Risultato                                             | Implicito |
| ---------------------------------------------------------- | --------- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)     | vero      |
| [crafttweaker.api.data.MapData](/vanilla/api/data/MapData) | vero      |

