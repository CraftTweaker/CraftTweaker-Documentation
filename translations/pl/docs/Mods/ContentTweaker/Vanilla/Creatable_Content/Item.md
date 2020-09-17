# Artykuł 1 1 0 – Ogółem

To pozwala na dodawanie przedmiotów do gry!

## Utwórz Reprezentację Produktu

Zanim będziesz mógł dodać przedmiot, musisz utworzyć Reprezentację Przedmiotu, która pozwoli Ci ustawić właściwości elementu, który chcesz dodać.  
To gdzie znajduje się [VanillaFactory](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/) w:

```zenscript
mods.contenttweaker.VanillaFactory.createItem(String unlocalizedName);
```

## Importuj pakiet reprezentacyjny

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`zaimportuj mods.contenttweaker.Item;`

## Właściwości ZenWłaściwości

Aby uzyskać/ustawić właściwości, możesz użyć szanującego ZenGetters/Setters lub ZenMethods:

```zenscript
//nazwa własności: maxStackSize
//ZenGetter
print(item.maxStackSize);
//ZenSetter
item.maxStackSize = 16;
//ZenMethods
item.getMaxStackSize();
item.setMaxStackSize(64);
```

| Nazwa Właściwości              | Typ                                                                                                                     | Wymagane | Wartość domyślna | Opis/Uwagi                                                                                            |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------- | -------- | ---------------- | ----------------------------------------------------------------------------------------------------- |
| Płatność                       | boolean                                                                                                                 | Nie      | fałszywy         | Może być przekazany nadajnikowi radionawigacyjnemu, aby włączyć bonusy                                |
| kreatywna zakładka             | [Karta ICreative](/Mods/ContentTweaker/Vanilla/Creatable_Content/Creative_Tab/)                                         | Nie      | Różne            | Kreatywna zakładka, w której element zostanie umieszczony                                             |
| świecący                       | boolean                                                                                                                 | Nie      | fałszywy         | Można użyć do nadania przedmiotowi efektu świecącego (jak gdyby został zaczarowany).                  |
| Dostawca kolorów przedmiotu    | [IItemColorSupplier](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemColorSupplier/)                 | Nie      | -1 jako kolor    | Kolor przedmiotu                                                                                      |
| itemDemroyedBlock              | [[PLACEHOLDER] IItemDestroyedBlock](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemDestroyedBlock/) | Nie      | fałszywy         | Co się stanie, gdy przedmiot właśnie zniszczył?                                                       |
| tempo zniszczenia przedmiotów  | [Prędkość Zniszczenia II](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemDestroySpeed/)             | Nie      | null             | Określa prędkość łamania bloku elementu.                                                              |
| itemGetContainerItem           | [Element IItemGetContainerItem](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemGetContainerItem/)   | Nie      | null             | Co pozostanie w siatce rzemieślniczej, gdy ten przedmiot został użyty w recepturze?                   |
| kliknięcie przedmiotRightClick | [IItemRightClick](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemRightClick/)                       | Nie      |                  | Zadzwoniony, gdy gracz kliknie prawym przyciskiem myszy na przedmiot                                  |
| akcjaprzedmiotu                | EnumUseAction                                                                                                           | Nie      | „NIE”            | Jaka animacja będzie używana ("NONE", "EAT", "DRINK", "BLOCK", "BOW")                                 |
| lokalizedNameSupplier          | [ILocalizedNameSupplier](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/ILocalizedNameSupplier/)         | Nie      | null             | Może być użyty do programistycznego określenia nazwy wyświetlanej pozycji                             |
| maxDamage                      | odcień                                                                                                                  | Nie      | -1               | Ile zastosowań ma przedmiot? Mniej niż 0 oznacza, że nie może być uszkodzony                          |
| maxStackSize                   | odcień                                                                                                                  | Nie      | 64               | Ile przedmiotów może zmieścić się w jednej Stosie? Mniej niż 0 oznacza standardowy rozmiar stosu (64) |
| onItemUpdate                   | [IItemUpdate](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemUpdate/)                               | Nie      | null             | Wywołuje każdy tick, dopóki przedmiot jest w ekwipunku gracza                                         |
| onItemUse                      | [IItemUse](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemUse/)                                     | Nie      | null             | Zadzwoniony, gdy gracz kliknie prawym przyciskiem myszy na blok z przedmiotem                         |
| onItemUseFinish                | [IItemUseFinish](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemUseFinish/)                         | Nie      | null             | Zadzwonione, gdy gracz zakończy używanie przedmiotu                                                   |
| rzadkość                       | Numeracja                                                                                                               | Nie      | WSPÓLNE          | Jak rzadka jest przedmiot, określa kolor ToolTip ("WSPÓLNE", "UNCOMMON", "RZEC", "EPIC")              |
| wytapianie Wydobycie           | zmiennoprzecinkowe                                                                                                      | Nie      | -1               | Ile doświadczenia gracz zarabia za wytapianie tego przedmiotu w piecu?                                |
| Lokalizacja teksturycji        | [Lokalizacja CTResourceLocation](/Mods/ContentTweaker/Vanilla/Types/Resources/CTResourceLocation/)                      | Nie      | null             | Lokalizacja zasobu elementu, używana dla tekstur itp.                                                 |
| klasa narzędzi                 | ciąg znaków                                                                                                             | Nie      |                  | Jakich typów bloków narzędzie może zniszczyć                                                          |
| poziom narzędzia               | odcień                                                                                                                  | Nie      | -1               | Poziom bloków może być uszkodzony                                                                     |
| unlocalizedName                | ciąg znaków                                                                                                             | Tak      |                  | Nazwa, powinna być wszystkimi małymi literami                                                         |

## Rejestrowanie elementu

Musisz wywołać tę metodę, aby zarejestrować przedmiot w grze!  
W przeciwnym razie nic się nie stanie!  
Po wywołaniu tej funkcji nie możesz wyrejestrować elementu ani zmieniać jego właściwości!

```zenscript
pozycja rejestrująca();
```

## Przykładowy skrypt

```zenscript
#loader contenttweaker
import mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.Item;
import mods.contenttweaker.IItemRightClick;
import mods. ontenttweaker.Commands;

var zsItem = VanillaFactory.createItem("zs_item");
zsItem.maxStackSize = 8;
zsItem.rarity = "rzadko";
zsItem. reativeTab = zsCreativeTab;
zsItem.smeltingExperience = 10;
zsItem.toolClass = "kilkaxe";
zsItem.toolLevel = 5;
zsItem.beaconPayment = true;
zsItem. temRightClick = function(stack, world player, hand) {
    Commands. all("Gracze tablicy wyników ustawili @p name 5", gracz, świat);
    wróć "Pass";
};
zsItem.register();
```

## Lokalizacja elementu

Będziesz musiał dodać `item.contenttweaker.itemName.name=Nazwa lokalna` do odpowiadających plików językowych.  
Przykład w en_us. Plik ang `item.contenttweaker.zsItem.name=Twoja nazwa przedmiotu Tutaj` pokaże `Twoja nazwa przedmiotu tutaj` w grze.

Alternatywnie, możesz użyć [funkcji lokalizacji CraftTweaker's](/Vanilla/Game/IGame/), choć zaleca się używanie plików językowych!