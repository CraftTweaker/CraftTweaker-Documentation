# Funkcje globalne

Globalne funkcje to funkcje, które mogą być wywoływane bez [zaimportowania](/AdvancedFunctions/Import/).  
Oto listę:

## wydrukuj

Wyświetla ciąg do dziennika słabszych rzemieślników jako informacje.

```zenscript
//print(wiadomość ciąg);
print("Witaj świat!");
```

Nic nie zwraca

## Akcje ogółem

```zenscript
//totalActions();
totalAction();
```

Zwraca int który pokazuje ile funkcji globalnych jest zarejestrowanych.

## enableDebug

Włącza tryb debugowania.  
Preferowany jest [Preprocesor debugowania](/AdvancedFunctions/Preprocessors/DebugPreprocessor/).

```zenscript
//enableDebug();
enableDebug();
```

Nic nie zwraca

## isNull

Sprawdza, czy dany obiekt jest pusty.  
Nie działa na prymitywach!

```zenscript
//isNull(Object o);
isNull(<minecraft:dirt>);
```

Zwraca wartość logiczną Uwaga: Jeśli to nie zadziała, spróbuj rzucić obiekt na bool `<minecraft:dirt> jako bool`

## maks.

```zenscript
//max(int number1, int number2);
max(10, 11);
```

Zwraca int

## min.

```zenscript
//min(int number1, int number2);
min(10, 11);
```

Zwraca int

## pow

```zenscript
//powód (liczba podwójna1, liczba podwójna2);
powód (2.0, 4.0);
```

Zwraca podwójne

## Pola globalne

| Pole                   | Opis                                                                                                |
| ---------------------- | --------------------------------------------------------------------------------------------------- |
| piwo                   | Uzyskuje dostęp do [Obsługi Brewing](/Vanilla/Recipes/Recipes_Brewing_Stand/)                       |
| klient                 | Dostęp do [metod klienta](/Vanilla/Game/IClient/)                                                   |
| wydarzenia             | Uzyskuje dostęp do [obsługi zdarzeń](/Vanilla/Events/IEventManager/)                                |
| format                 | Uzyskuje dostęp do [obsługi formatowania](/Vanilla/Utils/IFormatter/)                               |
| piec                   | Uzyskuje dostęp do [Obsługi Pieca](/Vanilla/Recipes/Furnace/Recipes_Furnace/)                       |
| gra                    | Dostęp do [funkcji gry](/Vanilla/Game/IGame/)                                                       |
| tekstuUtil             | Uzyskuje dostęp do [Handlera ItemUtils](/Vanilla/Utils/IItemUtils/)                                 |
| załadowane Modyfikacje | Uzyskuje dostęp do [załadowanej listy modów](/Vanilla/Game/Mods/)                                   |
| logger                 | Uzyskuje dostęp do [logera](/Vanilla/Utils/Logger/)                                                 |
| oreDict                | Uzyskuje dostęp do [obsługi słowników](/Vanilla/OreDict/IOreDict/)                                  |
| przepisy               | Uzyskuje dostęp do [obsługi przepisów](/Vanilla/Recipes/Crafting/Recipes_Crafting_Table/)           |
| serwer                 | Dostęp do [metod serwera](/Vanilla/Game/IServer/)                                                   |
| vanilla                | Uzyskuje dostęp do funkcji wanilla (obecnie dostępne tylko [vanilla.seed](/Vanilla/Recipes/Seeds/)) |