# MCWeightedItemStack

[PLACEHOLDER] ItemStack with a przypadek, zwykle used for recipe outputs. <p> Ostrożnie, jeśli stos użyty do utworzenia Wagi Stack był zmienny, to ustawnik rozmiaru zmusza również oryginalny stos!

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.item.MCWażony ItemStack
```

## Zaimplementowane interfejsy
MCWeweightedItemStack implementuje następujące interfejsy. Oznacza to, że każda dostępna dla nich metoda może być również stosowana w tej klasie.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Konstruktorzy
Ręcznie tworzy ważony ItemStack. Zazwyczaj możesz użyć operatora lub `.weight (waga)` metody IItemStack, choć
```zenscript
nowy crafttweaker.api.item.MCWeweightedItemStack(itemStack jako crafttweaker.api.item.IItemStack, waga jako podwójny);
nowy crafttweaker.api.item.MCWeightedItemStack(<item:minecraft:bedrock>, 0.5D);
```
| Parametr         | Typ                                                               | Opis                            |
| ---------------- | ----------------------------------------------------------------- | ------------------------------- |
| stos przedmiotów | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Stos                            |
| Waga             | podwójne                                                          | Szansa między 0 (0%) a 1 (100%) |



## Metody
### Waga

Tworzy nowy ważony stos o podanej wadze

 Zwroty: `Nowy Ważony ItemStack`

Typ zwrotu: [crafttweaker.api.item.MCWeweightedItemStack](/vanilla/api/items/MCWeightedItemStack)

```zenscript
<item:minecraft:bedrock>.weight(0.5D).weight(nowa masa jako podwójna);
<item:minecraft:bedrock>.weight(0.5D).weight(0.75D);
```

| Parametr         | Typ      | Opis    |
| ---------------- | -------- | ------- |
| młoda masa ciała | podwójne | Procent |



## Właściwości

| Nazwisko  | Typ                                                               | Posiada Getter | Ma ustawienie |
| --------- | ----------------------------------------------------------------- | -------------- | ------------- |
| polecenie | Ciąg znaków                                                       | prawda         | fałszywy      |
| stos      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | prawda         | fałszywy      |
| Waga      | podwójne                                                          | prawda         | fałszywy      |

## Operatorzy
### MUL

Ustawia ilość itemStack. <p> Jeśli oryginalny Stack był zmienny, również mutuje rozmiar oryginalnego stacka.

 Zwroty: `Nowy Ważony ItemStack`

```zenscript
<item:minecraft:bedrock>.weight (0, 5D) * nowa kwota jako int
<item:minecraft:bedrock>.weight (0, 5D) * 5
```

| Parametr   | Typ    | Opis                 |
| ---------- | ------ | -------------------- |
| nowa kwota | odcień | Rozmiar nowego stosu |
### MOD

Tworzy nowy ważony stos z podaną wartością procentową

 Zwroty: `Nowy Ważony ItemStack`

```zenscript
<item:minecraft:bedrock>.weight (0, 5D) % nowej wagi jako int
<item:minecraft:bedrock>.weight (0, 5D) % 75
```

| Parametr         | Typ    | Opis    |
| ---------------- | ------ | ------- |
| młoda masa ciała | odcień | Procent |

