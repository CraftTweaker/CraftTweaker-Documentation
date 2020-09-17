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
### getRemainingItem

Kiedy ten stos składników zostanie stworzony, co pozostanie w siatce? Nie sprawdza jednak, czy stos się zgadza! Używane np. w sieci CrT net.minecraft.item.crafting.ICraftingRecipe

Zwraca [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<tag:ingotIron>.getRemainingItem(stack as crafttweaker.api.item.IItemStack);
<tag:ingotIron>.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Parametr | Typ                                                               | Opis                                 |
| -------- | ----------------------------------------------------------------- | ------------------------------------ |
| stos     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Stos do dostarczenia tego składnika. |


### dopasowania

Czy dany stos pasuje do składnika?

Zwraca wartość logiczną

```zenscript
<tag:ingotIron>.matches(stack as crafttweaker.api.item.IItemStack);
<tag:ingotIron>.matches(<item:minecraft:iron_ingot>);
```

| Parametr | Typ                                                               | Opis                |
| -------- | ----------------------------------------------------------------- | ------------------- |
| stos     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Stos do sprawdzenia |



## Właściwości

| Nazwisko  | Typ                                                                 | Posiada Getter | Ma ustawienie |
| --------- | ------------------------------------------------------------------- | -------------- | ------------- |
| polecenie | Ciąg znaków                                                         | prawda         | fałszywy      |
| elementy  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | prawda         | fałszywy      |

## Szafy na akta, szafy na kartoteki, kasety na papiery, podpórki na papiery, pojemniki na przybory do pisania, stojaki na stemple biurowe i podobne wyposażenie biurowe lub biurkowe, z metali nieszlachetnych

| Typ wyniku                                                 | Jest niedomniemany |
| ---------------------------------------------------------- | ------------------ |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)     | prawda             |
| [crafttweaker.api.data.MapData](/vanilla/api/data/MapData) | prawda             |

