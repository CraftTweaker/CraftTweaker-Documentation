# MCTag

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.tag.MCTag
```

## Zaimplementowane interfejsy
MCTag implementuje następujące interfejsy. Oznacza to, że każda dostępna dla nich metoda może być również stosowana w tej klasie.
- [crafttweaker.api.item.Składnik](/vanilla/api/items/IIngredient)

## Metody
### dodaj bloki

```zenscript
myMCTag.addBlocks(blokuje jako crafttweaker.api.block.MCBlock[]);
```

| Parametr | Typ                                                             | Opis             |
| -------- | --------------------------------------------------------------- | ---------------- |
| bloki    | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[] | Nie podano opisu |


### addEntityTypes

```zenscript
myMCTag.addEntityTypes(jednostki jak crafttweaker.api.entity.MCEntityType[]);
```

| Parametr  | Typ                                                                          | Opis             |
| --------- | ---------------------------------------------------------------------------- | ---------------- |
| jednostki | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | Nie podano opisu |


### dodaj elementy

```zenscript
myMCTag.addItems(przedmioty jako crafttweaker.api.item.IItemStack[]);
```

| Parametr | Typ                                                                 | Opis             |
| -------- | ------------------------------------------------------------------- | ---------------- |
| elementy | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | Nie podano opisu |


### createBlockTag

Zwraca [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createBlockTag();
```

### createEntityTypeTag

Zwraca [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createEntityTypeTag();
```

### createItemTag

Zwraca [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createItemTag();
```

### getRemainingItem

Kiedy ten stos składników zostanie stworzony, co pozostanie w siatce? Nie sprawdza jednak, czy stos się zgadza! Używane np. w sieci CrT net.minecraft.item.crafting.ICraftingRecipe

Zwraca [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCTag.getRemainingItem(stack as crafttweaker.api.item.IItemStack);
myMCTag.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Parametr | Typ                                                               | Opis                                 |
| -------- | ----------------------------------------------------------------- | ------------------------------------ |
| stos     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Stos do dostarczenia tego składnika. |


### dopasowania

Czy dany stos pasuje do składnika?

Zwraca wartość logiczną

```zenscript
myMCTag.matches(stack as crafttweaker.api.item.IItemStack);
myMCTag.matches(<item:minecraft:iron_ingot>);
```

| Parametr | Typ                                                               | Opis                |
| -------- | ----------------------------------------------------------------- | ------------------- |
| stos     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Stos do sprawdzenia |


### usuń Bloki

```zenscript
myMCTag.removeBlocks(bloki jako crafttweaker.api.block.MCBlock[]);
```

| Parametr | Typ                                                             | Opis             |
| -------- | --------------------------------------------------------------- | ---------------- |
| bloki    | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[] | Nie podano opisu |


### removeEntityTypes

```zenscript
myMCTag.removeEntityTypes(jednostki jak crafttweaker.api.entity.MCEntityType[]);
```

| Parametr  | Typ                                                                          | Opis             |
| --------- | ---------------------------------------------------------------------------- | ---------------- |
| jednostki | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | Nie podano opisu |


### usuń Przedmioty

```zenscript
myMCTag.removeItems(przedmioty jako crafttweaker.api.item.IItemStack[]);
```

| Parametr | Typ                                                                 | Opis             |
| -------- | ------------------------------------------------------------------- | ---------------- |
| elementy | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | Nie podano opisu |



## Właściwości

| Nazwisko   | Typ                                                                          | Posiada Getter | Ma ustawienie |
| ---------- | ---------------------------------------------------------------------------- | -------------- | ------------- |
| bloki      | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[]              | prawda         | fałszywy      |
| polecenie  | Ciąg znaków                                                                  | prawda         | fałszywy      |
| Typy encji | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | prawda         | fałszywy      |
| elementy   | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[]          | prawda         | fałszywy      |

## Szafy na akta, szafy na kartoteki, kasety na papiery, podpórki na papiery, pojemniki na przybory do pisania, stojaki na stemple biurowe i podobne wyposażenie biurowe lub biurkowe, z metali nieszlachetnych

| Typ wyniku                                                 | Jest niedomniemany |
| ---------------------------------------------------------- | ------------------ |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)     | prawda             |
| [crafttweaker.api.data.MapData](/vanilla/api/data/MapData) | prawda             |

