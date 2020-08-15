# Rejestr przedmiotów

## Pakiet
```zenscript
// Importuje metody ItemRejestry do twojego skryptu
importuje mods.terrafirmacraft.Rejestr produktów;
```

## Zarejestruj rozmiar elementu
- Zarejestruj rozmiar i wagę pozycji. Zmienia to ile stos może zatrzymać.
- Rozmiary [TINY, VERY_SMALL, SMALL, NORMAL, LARGE, VERY_LARGE , HUGE]
- Wagi [VERY_LIGHT, ŚWIATŁO, ŚWIATŁO, HEAVY, VERY_HEAVY]
```zenscript
ItemRegistry.registerItemSize(IIngredient Input, String, Waga ciągu);
```

## Zarejestruj ciepło
- Zarejestruj ciepło i jeśli ten przedmiot jest forgeable (np. może być użyty w anvil).
- Moc cieplna określa, jak szybko produkt schładza się na dół/ciepło. Wyposażone żelazo wynosi 0,35.
- Temperatura topnienia to temperatura, w której produkt jest stopiony. Wyposażone żelazo ma 1535 brylantów białych, podczas gdy Brąz ma 950 Pomarańczy. Aby uzyskać pełne odniesienie, sprawdź [Temperatury ogrzewania](/Mods/Terrafirmacraft/HeatingTemperatures)
```zenscript
ItemRegistry.registerItemHeat(IIngredient Input (wkład, pływająca pojemność grzewcza, float meltTemp, forgeable);
```

## Zarejestruj Metal Produktu
- Zarejestruj pozycję jako element metalowy. Pamiętaj, że automatycznie dodaje możliwość ogrzewania i wykuwania. Jeśli canMelt jest false ten przedmiot nie będzie miał bezpośrednio wyjścia (jak ruda żelaza potrzebuje kwitnienia/wielkich pieców)
- Zarejestrowane metalowe elementy nie są automatycznie rejestrowane jako prawidłowe dane wejściowe dla narzędzi (np. sztaby stalowe z innych modów zarejestrowanych przez registerMetalItem metoda nie będzie automatycznie działała dla stalowej głowicy kilofów)
```zenscript
»ItemRegistry.registerItemMetal« (Input input, String metal, int units, bool canMelt);
```

## Zarejestruj żywność
- Zarejestruj dane statystyczne dotyczące żywności (Does nie działa na TFC Foods), co ma pierwszeństwo przed istniejącymi wartościami. Ustawienie rozkładu na 0 zapobiega rozkładowi.
```zenscript
»ItemRegistry.registerFood(Input input (Ingredient Input, int faster, float water, float saturation, float decay, float Ziarno float, float veg, float fruit, float meat i float dairy«);
```

## Zarejestruj zbroję
- Zarejestruj statystyki zbroi
```zenscript
ItemRegistry.registerArmor(IIngredient enting, float crushingModifier, float piercingModifier, float slashingModifier);
```

## Zarejestruj paliwo
- Zarejestruj przedmiot jako paliwo do strumienia, wykuwania lub kwitnienia
```zenscript
ItemRegistry.registerFuel(IItemStack itemStack, int burnTicks, temperatura pływaka, forgeFuel bool, bloomeryFuel);
```
