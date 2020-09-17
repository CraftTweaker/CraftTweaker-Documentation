# Składnik

To jest ISkładnik!!!

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.item.Składnik
```

## Zaimplementowane interfejsy
IIngredient implementuje następujące interfejsy. Oznacza to, że każda dostępna dla nich metoda może być również stosowana w tej klasie.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Metody
### każde obrażenia

Typ zwracania: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.ISkładnik](/vanilla/api/items/IIngredient)&gt;

```zenscript
<tag:ingotIron>.anyObrażenia();
```

### getRemainingItem

Kiedy ten stos składników zostanie stworzony, co pozostanie w siatce? Nie sprawdza jednak, czy stos się zgadza! Używane np. w sieci CrT net.minecraft.item.crafting.ICraftingRecipe

Typ zwrotu: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<tag:ingotIron>.getRemainingItem(stack as crafttweaker.api.item.IItemStack);
<tag:ingotIron>.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Parametr | Typ                                                               | Opis                                 |
| -------- | ----------------------------------------------------------------- | ------------------------------------ |
| stos     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Stos do dostarczenia tego składnika. |


### dopasowania

Czy dany stos pasuje do składnika?

Typ zwrotu: logiczny

```zenscript
<tag:ingotIron>.matches(stack as crafttweaker.api.item.IItemStack);
<tag:ingotIron>.matches(<item:minecraft:iron_ingot>);
```

| Parametr | Typ                                                               | Opis                |
| -------- | ----------------------------------------------------------------- | ------------------- |
| stos     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Stos do sprawdzenia |



Czy dany stos pasuje do składnika?

Typ zwrotu: logiczny

```zenscript
<tag:ingotIron>.matches(stack as crafttweaker.api.item.IItemStack, ignorowanie obrażeń jako boolean);
```

| Parametr              | Typ                                                               | Opis                            |
| --------------------- | ----------------------------------------------------------------- | ------------------------------- |
| stos                  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Stos do sprawdzenia             |
| zignorowano obrażenia | boolean                                                           | Czy należy sprawdzić obrażenia? |


### tylko uszkodzone

Typ zwracania: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.ISkładnik](/vanilla/api/items/IIngredient)&gt;

```zenscript
<tag:ingotIron>.onlyDamaged();
```

### onlyIf

Typ zwracania: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.ISkładnik](/vanilla/api/items/IIngredient)&gt;

```zenscript
<tag:ingotIron>.onlyIf(uid jako String, funkcja jako function.Predicate<crafttweaker.api.item.IItemStack>);
```

| Parametr | Typ                                                                                                     | Opis             | Opcjonalnie | Wartość domyślna |
| -------- | ------------------------------------------------------------------------------------------------------- | ---------------- | ----------- | ---------------- |
| uid      | Ciąg znaków                                                                                             | Nie podano opisu | fałszywy    | `null`           |
| funkcja  | Funkcja. Przewidaj&lt;[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt; | Nie podano opisu | prawda      | `null`           |



## Właściwości

| Nazwisko  | Typ                                                                 | Posiada Getter | Ma ustawienie |
| --------- | ------------------------------------------------------------------- | -------------- | ------------- |
| polecenie | Ciąg znaków                                                         | prawda         | fałszywy      |
| elementy  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | prawda         | fałszywy      |

## Operatorzy
### LUB

```zenscript
<tag:ingotIron> | inne jak crafttweaker.api.item.IIngredient
```

| Parametr | Typ                                                              | Opis             |
| -------- | ---------------------------------------------------------------- | ---------------- |
| inne     | [crafttweaker.api.item.Składnik](/vanilla/api/items/IIngredient) | Nie podano opisu |

## Szafy na akta, szafy na kartoteki, kasety na papiery, podpórki na papiery, pojemniki na przybory do pisania, stojaki na stemple biurowe i podobne wyposażenie biurowe lub biurkowe, z metali nieszlachetnych

| Typ wyniku                                                 | Jest niedomniemany |
| ---------------------------------------------------------- | ------------------ |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)     | prawda             |
| [crafttweaker.api.data.MapData](/vanilla/api/data/MapData) | prawda             |

