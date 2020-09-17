# Konstruktor materiałów

Jeśli chcesz zbudować [materiał](/Mods/ContentTweaker/Materials/Materials/Material/), będziesz potrzebował Budowniczego Materiałów!  
Nie brzmi tak mocno, prawda?

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`zaimportuj mods.contenttweaker.MaterialBuilder;`

## Pobieranie takiego obiektu

Możesz pobrać nowy, wyczyść Konstruktor używając [Pakietu MaterialSystem](/Mods/ContentTweaker/Materials/MaterialSystem/):

```zenscript
var mBuilder = mods.contenttweaker.MaterialSystem.getMaterialBuilder();
```

## Ustaw właściwości Material

Możesz ustawić te właściwości

| Metoda ZenMethod        | Parametr                                                         |
| ----------------------- | ---------------------------------------------------------------- |
| setName(nazwa)          | nazwa ciągu                                                      |
| setColor(color)         | kolor koloru                                                     |
| setColor(color)         | [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/) color |
| setHasEffect(hasEffect) | Efekt logiczny                                                   |

Wszystkie te metody robią 2 rzeczy: po pierwsze, zmieniają własność konstruktora, po drugie, zwracają zmodyfikowanego konstruktora.  
W przykładowych skryptach poniżej możesz zobaczyć co to oznacza.

## W rzeczywistości buduj materiał

Zanim będziesz mógł zbudować swój materiał, musisz go zbudować:

```zenscript
mBuilder.build();
```

To zwraca obiekt [IMaterial](/Mods/ContentTweaker/Materials/Materials/Material/)

## Przykładowy skrypt

```zenscript
importuj mods.contentTweaker.MaterialSystem;

var Builder = MaterialSystem.getMaterialBuilder();
builder.setName("Urubuntu");
builder.setColor(000151);
builder.setHasEffect(false);
val urubunt = builder.build();

val arakantara = MaterialSystem.getMaterialBuilder().setName("Arakantara").setColor(15592941).setHasEffect(true).build();
```