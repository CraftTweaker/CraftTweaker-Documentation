# IItemStack

Stanowi to element. Można go pobrać za pomocą BEP. Jest [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.item.IItemStack
```

## Zaimplementowane interfejsy
IItemStack implementuje następujące interfejsy. Oznacza to, że każda dostępna dla nich metoda może być również stosowana w tej klasie.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
- [crafttweaker.api.item.Składnik](/vanilla/api/items/IIngredient)

## Metody
### addShiftTooltip

```zenscript
<item:minecraft:dirt>Struktura danych w formacie crafttweaker.api.util.text.MCTextComponent
```

| Parametr        | Typ                                                                                  | Opis             | Opcjonalnie | Wartość domyślna |
| --------------- | ------------------------------------------------------------------------------------ | ---------------- | ----------- | ---------------- |
| zawartość       | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | Nie podano opisu | fałszywy    | `null`           |
| Pokaż Wiadomość | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | Nie podano opisu | prawda      | `null`           |


### addTooltip

```zenscript
<item:minecraft:dirt>Struktura pliku
```

| Parametr  | Typ                                                                                  | Opis             |
| --------- | ------------------------------------------------------------------------------------ | ---------------- |
| zawartość | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | Nie podano opisu |


### każde obrażenia

Typ zwracania: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.ISkładnik](/vanilla/api/items/IIngredient)&gt;

```zenscript
<item:minecraft:dirt>.anyObrażenia();
```

### wyczyść niestandardową Nazwę

Czyści dowolną niestandardową nazwę dla tego ItemStack

```zenscript
<item:minecraft:dirt>.clearCustomName();
```

### clearTooltip

```zenscript
<item:minecraft:dirt>.clearTooltip();
```

### kopiuj

Tworzy kopię

Typ zwrotu: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.copy();
```

### getRemainingItem

Kiedy ten stos składników zostanie stworzony, co pozostanie w siatce? Nie sprawdza jednak, czy stos się zgadza! Używane np. w sieci CrT net.minecraft.item.crafting.ICraftingRecipe

Typ zwrotu: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.getRemainingItem(stack as crafttweaker.api.item.IItemStack);
<item:minecraft:dirt>.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Parametr | Typ                                                               | Opis                                 |
| -------- | ----------------------------------------------------------------- | ------------------------------------ |
| stos     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Stos do dostarczenia tego składnika. |


### dopasowania

Czy dany stos pasuje do składnika?

Typ zwrotu: logiczny

```zenscript
<item:minecraft:dirt>.matches(stack as crafttweaker.api.item.IItemStack);
<item:minecraft:dirt>.matches(<item:minecraft:iron_ingot>);
```

| Parametr | Typ                                                               | Opis                |
| -------- | ----------------------------------------------------------------- | ------------------- |
| stos     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Stos do sprawdzenia |



Czy dany stos pasuje do składnika?

Typ zwrotu: logiczny

```zenscript
<item:minecraft:dirt>.matches(stack as crafttweaker.api.item.IItemStack, ignorowanie obrażeń jako boolean);
```

| Parametr              | Typ                                                               | Opis                            |
| --------------------- | ----------------------------------------------------------------- | ------------------------------- |
| stos                  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Stos do sprawdzenia             |
| zignorowano obrażenia | boolean                                                           | Czy należy sprawdzić obrażenia? |


### modifyTooltip

```zenscript
<item:minecraft:dirt>.modifyTooltip(funkcja jako crafttweaker.api.item.tooltip.ITooltipFunction);
```

| Parametr | Typ                                                                                               | Opis             |
| -------- | ------------------------------------------------------------------------------------------------- | ---------------- |
| funkcja  | [crafttweaker.api.item.tooltip.ITooltipFunction](/crafttweaker/api/item/tooltip/ITooltipFunction) | Nie podano opisu |


### zmienny

Typ zwrotu: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.mutable();
```

### tylko uszkodzone

Typ zwracania: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.ISkładnik](/vanilla/api/items/IIngredient)&gt;

```zenscript
<item:minecraft:dirt>.onlyDamaged();
```

### onlyIf

Typ zwracania: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.ISkładnik](/vanilla/api/items/IIngredient)&gt;

```zenscript
<item:minecraft:dirt>.onlyIf(uid jako String, funkcja jako function.Predicate<crafttweaker.api.item.IItemStack>);
```

| Parametr | Typ                                                                                                     | Opis             | Opcjonalnie | Wartość domyślna |
| -------- | ------------------------------------------------------------------------------------------------------- | ---------------- | ----------- | ---------------- |
| uid      | Ciąg znaków                                                                                             | Nie podano opisu | fałszywy    | `null`           |
| funkcja  | Funkcja. Przewidaj&lt;[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt; | Nie podano opisu | prawda      | `null`           |


### removeTooltip

```zenscript
<item:minecraft:dirt>.removeTooltip(regex as String);
```

| Parametr | Typ         | Opis             |
| -------- | ----------- | ---------------- |
| regex    | Ciąg znaków | Nie podano opisu |


### setDisplayName

Ustawia nazwę wyświetlaną PrzedmiotStack

Typ zwrotu: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.setDisplayName(name as String);
<item:minecraft:dirt>.setDisplayName("całkowicie nie brudna");
```

| Parametr | Typ         | Opis              |
| -------- | ----------- | ----------------- |
| Nazwa    | Ciąg znaków | Nowa nazwa stosu. |


### bez obrażeń

Ustawia obrażenia PrzedmiotStack

Typ zwrotu: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.withDamage(obrażenia jak int);
<item:minecraft:dirt>.withDamage(10);
```

| Parametr  | Typ    | Opis                 |
| --------- | ------ | -------------------- |
| obrażenia | odcień | nowa wartość obrażeń |


### z tagiem

Ustawia tag dla ItemStack.

 Zwraca: `Ten itemStack jeśli jest zmienny, nowy z zmienioną właściwością`

Typ zwrotu: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.withTag(tag as crafttweaker.api.data.IData);
<item:minecraft:dirt>.withTag({Display: {lore: ["Hello"]}});
```

| Parametr | Typ                                                    | Opis                    |
| -------- | ------------------------------------------------------ | ----------------------- |
| znacznik | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Znacznik do ustawiania. |



## Właściwości

| Nazwisko            | Typ                                                                 | Posiada Getter | Ma ustawienie |
| ------------------- | ------------------------------------------------------------------- | -------------- | ------------- |
| kwota               | odcień                                                              | prawda         | fałszywy      |
| spalony Czas        | odcień                                                              | prawda         | prawda        |
| polecenie           | Ciąg znaków                                                         | prawda         | fałszywy      |
| obrażenia           | odcień                                                              | prawda         | fałszywy      |
| Uszkodzone          | boolean                                                             | prawda         | fałszywy      |
| uszkodzone          | boolean                                                             | prawda         | fałszywy      |
| nazwa wyświetlacza  | Ciąg znaków                                                         | prawda         | fałszywy      |
| puste               | boolean                                                             | prawda         | fałszywy      |
| jedzenie            | [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)            | prawda         | prawda        |
| getOrCreate         | [crafttweaker.api.data.IData](/vanilla/api/data/IData)              | prawda         | fałszywy      |
| getRepairCost       | odcień                                                              | prawda         | fałszywy      |
| hasDisplayName      | boolean                                                             | prawda         | fałszywy      |
| Efekt               | boolean                                                             | prawda         | fałszywy      |
| Tag hasa            | boolean                                                             | prawda         | fałszywy      |
| isCrossbow          | boolean                                                             | prawda         | fałszywy      |
| możliwe do zaklęcia | boolean                                                             | prawda         | fałszywy      |
| zaczarowana         | boolean                                                             | prawda         | fałszywy      |
| elementy            | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | prawda         | fałszywy      |
| maxDamage           | odcień                                                              | prawda         | fałszywy      |
| maxStackSize        | odcień                                                              | prawda         | fałszywy      |
| właściciel          | Ciąg znaków                                                         | prawda         | fałszywy      |
| registryName        | Ciąg znaków                                                         | prawda         | fałszywy      |
| stackable           | boolean                                                             | prawda         | fałszywy      |
| znacznik            | [crafttweaker.api.data.IData](/vanilla/api/data/IData)              | prawda         | fałszywy      |
| Klucz tłumaczeniowy | Ciąg znaków                                                         | prawda         | fałszywy      |
| useDuration         | odcień                                                              | prawda         | fałszywy      |

## Operatorzy
### MUL

Ustawia ilość PrzedmiotStack

```zenscript
<item:minecraft:dirt> * kwota jako int
<item:minecraft:dirt> * 3
```

| Parametr | Typ    | Opis       |
| -------- | ------ | ---------- |
| kwota    | odcień | nowa kwota |
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

