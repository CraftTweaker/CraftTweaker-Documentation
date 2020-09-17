# MCIngredientTransformed

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.item.MCIngredientTransformed
```

## Interfacce Implementate
MCIngredientTransformed implementa le seguenti interfacce. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
- [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

## Metodi
### anyDamage

Tipo di restituzione: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
null.anyDamage();
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



Tipo restituito: booleano

```zenscript
myMCIngredientTransformed.matches(stack as crafttweaker.api.item.IItemStack, ignoreDamage as boolean);
```

| Parametro   | Tipo                                                              | Descrizione                 |
| ----------- | ----------------------------------------------------------------- | --------------------------- |
| pila        | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Nessuna descrizione fornita |
| ignoreDanno | boolean                                                           | Nessuna descrizione fornita |


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



## Proprietà

| Nome           | Tipo                                                                                                           | Ha Getter | Ha Setter |
| -------------- | -------------------------------------------------------------------------------------------------------------- | --------- | --------- |
| baseIngredient | T                                                                                                              | vero      | falso     |
| commandString  | Stringa                                                                                                        | vero      | falso     |
| elementi       | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[]                                            | vero      | falso     |
| trasformatore  | [crafttweaker.api.item.IIngredientTransformer](/vanilla/api/items/IIngredientTransformer)&lt;T&gt; | vero      | falso     |

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

