# ChickenFactory

ChickenFactory pozwala na tworzenie niestandardowych [kurczaków](/Mods/ContentTweaker/Chickens/ChickenRepresentation/) w grze.  
Zauważ, że ten moduł jest funkcją dodaną do [Modyfikacji Kurczaków przez setycz](https://minecraft.curseforge.com/projects/chickens), więc ten moduł jest dostępny tylko wtedy, gdy ten mod jest załadowany.

## Importowanie pakietu

```zenscript
import mods.contenttweaker.ChickenFactory;
```

## Tworzenie kurcząt

Po pierwsze, musisz utworzyć [Reprezentację kurczaka](/Mods/ContentTweaker/Chickens/ChickenRepresentation/).  
Jest to zasadniczo pusty szablon tego, co stanie się Twój kurczak.  
Ta metoda zwraca taki obiekt [Reprezentacja kurczaków](/Mods/ContentTweaker/Chickens/ChickenRepresentation/) , przyjmując następujące parametry:

- Nazwa ciągu: nazwa obiektu kurczaka używanego do modelowania i rejestr obiektów.
- [Kolor CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/) : Kolor kurczaka.
- [IItemStack](/Vanilla/Items/IItemStack/) layedItem: Przedmiot, który kurczak zostanie później umieszczony.

```zenscript
ChickenFactory.createChicken(nazwa ciągu, kolor CTColor, pozycja IItemStack);
```

## Przykładowy skrypt

```zenscript
#loader contenttweaker
#modloaded kurczaki

importują mods.contenttweaker.ChickenFactory;
importuje mods.contenttweaker.Color;


owalne przedstawicielstwo kurczaków = ChickenFactory.createChicken("bedrocked_chicken", Color.fromInt(0xffffffff), <item:minecraft:bedrock>);

chickenRepresentation.setForegroundColor(Color.fromInt(0xabcdef));

chickenRepresentation.register();
```