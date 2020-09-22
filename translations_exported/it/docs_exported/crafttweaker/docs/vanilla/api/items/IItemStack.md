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
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
- [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

## Metodi
### addShiftTooltip

```zenscript
<item:minecraft:dirt>.addShiftTooltip(contenuto come crafttweaker.api.util.text.MCTextComponent, showMessage as crafttweaker.api.util.text.MCTextComponent);
```

| Parametro   | Tipo                                                                                 | Descrizione                 | IsOptional | Valore Predefinito |
| ----------- | ------------------------------------------------------------------------------------ | --------------------------- | ---------- | ------------------ |
| contenuto   | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | Nessuna descrizione fornita | falso      | `null`             |
| showMessage | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | Nessuna descrizione fornita | vero       | `null`             |


### addTooltip

```zenscript
<item:minecraft:dirt>.addTooltip(contenuto come crafttweaker.api.util.text.MCTextComponent);
```

| Parametro | Tipo                                                                                 | Descrizione                 |
| --------- | ------------------------------------------------------------------------------------ | --------------------------- |
| contenuto | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | Nessuna descrizione fornita |


### anyDamage

Tipo di restituzione: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<item:minecraft:dirt>.anyDamage();
```

### clearCustomName

Cancella qualsiasi nome personalizzato impostato per questo ItemStack

```zenscript
<item:minecraft:dirt>.clearCustomName();
```

### clearTooltip

```zenscript
<item:minecraft:dirt>.clearTooltip();
```

### copia

Crea una copia

Tipo di restituzione: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.copy();
```

### getRemainingItem

Quando questa pila di ingredienti è creata, cosa rimarrà nella griglia? Non controlla se lo stack corrisponde però! Usato, ad esempio, nella net.minecraft.item.crafting.ICraftingRecipe

Tipo di restituzione: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.getRemainingItem(stack as crafttweaker.api.item.IItemStack);
<item:minecraft:dirt>.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Parametro | Tipo                                                              | Descrizione                             |
| --------- | ----------------------------------------------------------------- | --------------------------------------- |
| pila      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | La pila per fornire questo ingrediente. |


### corrispondenze

Lo stack dato corrisponde all'ingrediente?

Tipo restituito: booleano

```zenscript
<item:minecraft:dirt>.matches(stack as crafttweaker.api.item.IItemStack);
<item:minecraft:dirt>.matches(<item:minecraft:iron_ingot>);
```

| Parametro | Tipo                                                              | Descrizione             |
| --------- | ----------------------------------------------------------------- | ----------------------- |
| pila      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Lo stack da controllare |



Lo stack dato corrisponde all'ingrediente?

Tipo restituito: booleano

```zenscript
<item:minecraft:dirt>.matches(stack as crafttweaker.api.item.IItemStack, ignoreDamage as boolean);
```

| Parametro   | Tipo                                                              | Descrizione                            |
| ----------- | ----------------------------------------------------------------- | -------------------------------------- |
| pila        | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Lo stack da controllare                |
| ignoreDanno | boolean                                                           | I danni dovrebbero essere controllati? |


### modifyTooltip

```zenscript
<item:minecraft:dirt>.modifyTooltip(function as crafttweaker.api.item.tooltip.ITooltipFunction);
```

| Parametro | Tipo                                                                                              | Descrizione                 |
| --------- | ------------------------------------------------------------------------------------------------- | --------------------------- |
| funzione  | [crafttweaker.api.item.tooltip.ITooltipFunction](/crafttweaker/api/item/tooltip/ITooltipFunction) | Nessuna descrizione fornita |


### mutabile

Tipo di restituzione: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.mutable();
```

### Solo Danneggiato

Tipo di restituzione: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<item:minecraft:dirt>.onlyDamaged();
```

### onlyIf

Tipo di restituzione: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<item:minecraft:dirt>.onlyIf(uid as String, function as function.Predicate<crafttweaker.api.item.IItemStack>);
```

| Parametro | Tipo                                                                                                    | Descrizione                 | IsOptional | Valore Predefinito |
| --------- | ------------------------------------------------------------------------------------------------------- | --------------------------- | ---------- | ------------------ |
| uid       | Stringa                                                                                                 | Nessuna descrizione fornita | falso      | `null`             |
| funzione  | function.Predicate&lt;[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt; | Nessuna descrizione fornita | vero       | `null`             |


### removeTooltip

```zenscript
<item:minecraft:dirt>.removeTooltip(regex as String);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| regex     | Stringa | Nessuna descrizione fornita |


### setDisplayName

Imposta il nome visualizzato del ItemStack

Tipo di restituzione: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.setDisplayName(nome come stringa);
<item:minecraft:dirt>.setDisplayName("totalmente non sporca");
```

| Parametro | Tipo    | Descrizione             |
| --------- | ------- | ----------------------- |
| nome      | Stringa | Nuovo nome dello stack. |


### peso

Tipo di restituzione: [crafttweaker.api.item.MCWeightedItemStack](/vanilla/api/items/MCWeightedItemStack)

```zenscript
<item:minecraft:dirt>.weight(weight as double);
```

| Parametro | Tipo   | Descrizione                 |
| --------- | ------ | --------------------------- |
| peso      | doppia | Nessuna descrizione fornita |


### withDamage

Imposta il danno della pila di oggetti

Tipo di restituzione: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.withDamage(damage as int);
<item:minecraft:dirt>.withDamage(10);
```

| Parametro | Tipo | Descrizione               |
| --------- | ---- | ------------------------- |
| danno     | int  | il nuovo valore del danno |


### withTag

Imposta il tag per l'ItemStack.

 Restituisce: `Questo itemStack se è mutabile, uno nuovo con la proprietà modificata altrimenti`

Tipo di restituzione: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

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
| danno          | int                                                                 | vero      | falso     |
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
| proprietario   | Stringa                                                             | vero      | falso     |
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
### MOD

```zenscript
<item:minecraft:dirt> % % as int
```

| Parametro   | Tipo | Descrizione                 |
| ----------- | ---- | --------------------------- |
| percentuale | int  | Nessuna descrizione fornita |
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

