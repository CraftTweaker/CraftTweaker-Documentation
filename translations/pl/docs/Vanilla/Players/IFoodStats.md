# IFoodStats

Interfejs IPlayer pozwala na oglądanie pewnych informacji o statystykach żywnościowych gracza.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (takie jak przesyłanie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj crafttweaker.gracz.IFoodStats;`

## ZenGetter/ZenSetters

| ZenGetter        | ZenSetter        | Typ                |
| ---------------- | ---------------- | ------------------ |
| poziom jedzenia  | poziom jedzenia  | odcień             |
| poziom nasycenia | poziom nasycenia | zmiennoprzecinkowe |
| igła Jedzenie    |                  | boolean            |

## Metody ZenMethods

#### Dodawanie statystyk

Unieważniona funkcja. Odbiera intity i zmiennoprzecinkowe jako parametry intput parameter.

```zenscript
stats.addStats(int foodValue, float saturationLevel);
```

#### onUpdate

Unieważniona funkcja. Pobiera obiekt [IPlayer](/Vanilla/Players/IPlayer/) jako parametr wejściowy.

```zenscript
stats.onUpdate(IPlayer player);
```

#### DODATEK

Zwraca obiekt IData reprezentujący statystyki żywności.

```zenscript
stats.asNBT();
statystyki jako crafttweaker.data.IData;
```

#### Dodaj wyczerpanie

Unieważniona funkcja. przyjmuje zmienną jako parametr wejściowy.

```zenscript
stats.addhaustion(wyczerpanie liczby jednostek pływających);
```