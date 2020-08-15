# Artykuły żywnościowe

To pozwala na dodawanie przedmiotów jedzenia do gry!

## Utwórz Przedstawicielstwo Elementów Żywności

Zanim będziesz mógł dodać przedmiot, musisz utworzyć reprezentację przedmiotów żywnościowych, która pozwoli Ci ustawić właściwości elementu, który chcesz dodać.  
To gdzie znajduje się [VanillaFactory](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/) w:

```zenscript
mods.contenttweaker.VanillaFactory.createItemFood(String unlocalizedName, int healAmount);
```

## Importuj pakiet reprezentacyjny

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`zaimportuj mods.contenttweaker.ItemFood;`

## Rozszerzenie Reprezentacji Produktu

Klasa ItemFoodReprezentacji rozszerza [Przedmiot](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/). Oznacza to, że wszystkie metody i właściwości ZenProperties dostępne dla [Przedmiotów](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) są również dostępne dla artykułów żywnościowych!

## Właściwości ZenWłaściwości

Aby uzyskać/ustawić właściwości, możesz użyć szanującego ZenGetters/Setters lub ZenMethods:

```zenscript
//property name: healAmount
//ZenGetter
print(item.healAmount);
//ZenSetter
item.healAmount = 16;
//ZenMethods
item.getHealAmount();
item.setHealAmount(64);
```

| Własność        | Typ                                                                                             | Wymagane | Wartość domyślna | Opis/Uwagi                                                                           |
| --------------- | ----------------------------------------------------------------------------------------------- | -------- | ---------------- | ------------------------------------------------------------------------------------ |
| ilość leczenia  | odcień                                                                                          | Tak      |                  | Ile punktów żywnościowych przywrócono po spożyciu pokarmu?                           |
| zawsze jadalne  | bool                                                                                            | Nie      | fałszywy         | Czy jedzenie może być nadal spożywane, jeśli pasek pokarmowy użytkownika jest pełny? |
| WolfŻywność     | bool                                                                                            | Nie      | fałszywy         | Czy jedzenie może być użyte do oswojenia?                                            |
| nasycenie       | zmiennoprzecinkowe                                                                              | Nie      | 0.6              | Wartość nasycenia jedzenia                                                           |
| onItemFoodEaten | [IItemFoodEaten](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemFoodEaten/) | Nie      | null             | Zadzwonione, gdy jedzenie jest spożywane                                             |

## Rejestrowanie elementu

Musisz wywołać tę metodę, aby zarejestrować przedmiot w grze!  
W przeciwnym razie nic się nie stanie!  
Po wywołaniu tej funkcji nie możesz wyrejestrować elementu ani zmieniać jego właściwości!

```zenscript
pozycja rejestrująca();
```