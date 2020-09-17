# Płyn

Pozwala to na dodawanie płynów do gry!

## Utwórz Reprezentację Płynną

Zanim będziesz mógł dodać płyn, musisz utworzyć Reprezentację Płynną, która pozwoli Ci ustawić właściwości płynu, który chcesz dodać.  
To gdzie znajduje się [VanillaFactory](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/) w:

```zenscript
mods.contenttweaker.VanillaFactory.createFluid(String unlocalizedName, int color);
mods.contenttweaker.VanillaFactory.createFluid(String unlocalizedName, kolor CTColor);
```

## Importuj pakiet reprezentacyjny

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`zaimportuj mods.contenttweaker.Fluid;`

## Właściwości ZenWłaściwości

Aby uzyskać/ustawić właściwości, możesz użyć szanującego ZenGetters/Setters lub ZenMethods:

```zenscript
//nazwa własności: gęstość
//ZenGetter
print(płyn.gęstość);
//ZenSetter
płyn.density = 500;
//ZenMethods
płyn.getDdensity();
płyn.setDgęstość (1000);
```

| Nazwa Właściwości       | Typ                                                                                      | Wymagane | Wartość domyślna                 | Opis/Uwagi                                                                                  |
| ----------------------- | ---------------------------------------------------------------------------------------- | -------- | -------------------------------- | ------------------------------------------------------------------------------------------- |
| unlocalizedName         | ciąg znaków                                                                              | Tak      |                                  | Nazwa, powinna być wszystkimi małymi literami                                               |
| gęstość                 | odcień                                                                                   | Nie      | 1000                             | Jak szybko można przejść do płynu                                                           |
| gazowe                  | boolean                                                                                  | Nie      | fałszywy                         | Czy płyn jest gazowy (przepływ w górę zamiast w dół)?                                       |
| luminancja              | odcień                                                                                   | Nie      | 0                                | Poziom światła emitowanego przez płyn                                                       |
| temperatura             | odcień                                                                                   | Nie      | 300                              | Temperatura płynu                                                                           |
| kolor                   | odcień                                                                                   | Tak      |                                  | Kod koloru płynu                                                                            |
| koloryzuj               | boolean                                                                                  | Nie      | prawda                           | Czy zastosowano kod koloru płynu?                                                           |
| rzadkość                | ciąg znaków                                                                              | Nie      | WSPÓLNE                          | Jak rzadko występuje płyn określający kolor ToolTip ("WSPÓLNE", "UNCOMMON", "RZEC", "EPIC") |
| lepkość                 | odcień                                                                                   | Nie      | 1000                             | Jak szybko płyn spada                                                                       |
| wypełnij dźwięk         | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundEventDefinition/) | Nie      | & Pliki                          | Dźwięk odtwarzany, gdy płyn jest podnoszony za pomocą wiadra                                |
| pusty dźwięk            | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundEventDefinition/) | Nie      | PLAYLIST_POPUP_TITLE           | Dźwięk odtwarzany po umieszczeniu płynu                                                     |
| parowanie               | boolean                                                                                  | Nie      | fałszywy                         | Czy odparować po umieszczeniu w Piec?                                                       |
| lokalizacja             | ciąg znaków                                                                              | Nie      | contenttweaker:fluids/fluid      | Lokalizacja gdzie znaleźć teksturę dla wciąż płynu                                          |
| lokalizacja przepływowa | ciąg znaków                                                                              | Nie      | contenttweaker:fluids/fluid_flow | Położenie gdzie znaleźć teksturę płynu płynnego                                             |
| materiał                | [Definicja IMateriałowa](/Mods/ContentTweaker/Vanilla/Types/Block/IMaterialDefinition/)  | Nie      | WODA                             | Materiał, z którego płyn jest wykonany                                                      |

## Rejestrowanie płynu

Musisz wywołać tę metodę, aby zarejestrować płyn w grze!  
W przeciwnym razie nic się nie stanie!  
Po wywołaniu tej funkcji nie możesz wyrejestrować płynu ani zmieniać jego właściwości!

```zenscript
fluid.register();
```

## Przykładowy skrypt

```zenscript
#loader contenttweaker
import mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.Fluid;
import mods.contenttweaker.Color;

var zsFluid = VanillaFactory.createFluid("zs_fluid", Color.fromHex("FF69B4"));
zsFluid.fillSound = <soundevent:block.anvil.place>;
zsFluid.register();
```

## Lokalizacja płynu

Będziesz musiał dodać `fluid.fluidName = Localized Name` do odpowiadających plików językowych. Alternatywnie, możesz użyć [funkcji lokalizacji CraftTweaker's](/Vanilla/Game/IGame/), choć zaleca się używanie plików językowych!