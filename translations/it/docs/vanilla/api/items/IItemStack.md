# IItemStack

Questo rappresenta un elemento. Può essere recuperato utilizzando un articolo BEP. È un [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.item.IItemStack
```

## Interfacce Implementate
IItemStack implementa le seguenti interfacce. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

## Metodi
### clearCustomName

Cancella qualsiasi nome personalizzato impostato per questo ItemStack

```zenscript
<item:minecraft:dirt>.clearCustomName();
```

### getRemainingItem

Quando questa pila di ingredienti è creata, cosa rimarrà nella griglia? Non controlla se lo stack corrisponde però! Usato, ad esempio, nella net.minecraft.item.crafting.ICraftingRecipe

Restituisce [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.getRemainingItem(stack as crafttweaker.api.item.IItemStack);
<item:minecraft:dirt>.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Parametro | Tipo                                                              | Descrizione                             |
| --------- | ----------------------------------------------------------------- | --------------------------------------- |
| pila      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | La pila per fornire questo ingrediente. |


### corrispondenze

Lo stack dato corrisponde all'ingrediente?

Restituisce un booleano

```zenscript
<item:minecraft:dirt>.matches(stack as crafttweaker.api.item.IItemStack);
<item:minecraft:dirt>.matches(<item:minecraft:iron_ingot>);
```

| Parametro | Tipo                                                              | Descrizione             |
| --------- | ----------------------------------------------------------------- | ----------------------- |
| pila      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Lo stack da controllare |


### setDisplayName

Imposta il nome visualizzato del ItemStack

Restituisce [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.setDisplayName(nome come stringa);
<item:minecraft:dirt>.setDisplayName("totalmente non sporca");
```

| Parametro | Tipo    | Descrizione             |
| --------- | ------- | ----------------------- |
| nome      | Stringa | Nuovo nome dello stack. |


### withDamage

Imposta il danno della pila di oggetti

Restituisce [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.withDamage(damage as int);
<item:minecraft:dirt>.withDamage(10);
```

| Parametro | Tipo | Descrizione               |
| --------- | ---- | ------------------------- |
| danno     | int  | il nuovo valore del danno |


### withTag

Imposta il tag per l'ItemStack.

Restituisce [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.withTag(tag as crafttweaker.api.data.IData);
<item:minecraft:dirt>.withTag({Display: {lore: ["Hello"]}});
```

| Parametro | Tipo                                                   | Descrizione          |
| --------- | ------------------------------------------------------ | -------------------- |
| tag       | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Il tag da impostare. |



## Proprietà

| Nome           | Tipo                                                                | Ha Getter | Ha Setter |
| -------------- | ------------------------------------------------------------------- | --------- | --------- |
| importo        | int                                                                 | vero      | falso     |
| burnTime       | int                                                                 | vero      | vero      |
| commandString  | Stringa                                                             | vero      | falso     |
| danneggiabile  | boolean                                                             | vero      | falso     |
| danneggiato    | boolean                                                             | vero      | falso     |
| displayName    | Stringa                                                             | vero      | falso     |
| vuoto          | boolean                                                             | vero      | falso     |
| cibo           | [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)            | vero      | vero      |
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
| impilabile     | boolean                                                             | vero      | falso     |
| tag            | [crafttweaker.api.data.IData](/vanilla/api/data/IData)              | vero      | falso     |
| translationKey | Stringa                                                             | vero      | falso     |
| useDuration    | int                                                                 | vero      | falso     |

## Operatori
### MUL

Imposta la quantità di ItemStack

```zenscript
<item:minecraft:dirt> * amount as int
<item:minecraft:dirt> * 3
```

| Parametro | Tipo | Descrizione   |
| --------- | ---- | ------------- |
| importo   | int  | nuovo importo |

## Caster

| Tipo Risultato                                                    | Implicito |
| ----------------------------------------------------------------- | --------- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)            | vero      |
| [crafttweaker.api.data.MapData](/vanilla/api/data/MapData)        | vero      |
| [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | falso     |

