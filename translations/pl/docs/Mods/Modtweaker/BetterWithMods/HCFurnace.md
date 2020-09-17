# HCFurnace

Funkcja HCpieca sprawia, że receptury pieca mogą zająć różną ilość czasu w zależności od przedmiotu, który jest przetapiany. Nie ma to wpływu na działanie paliwa, co oznacza, że niektóre przepisy będą pochłaniać więcej lub mniej paliwa.

Umożliwia ustawienie czasu w tickach, że potrzebny jest konkretny przepis na piec do przetapiania w oparciu o jego element wejściowy

```zenscript
  mods.betterwithmods.Misc.setFurnaceSmeltingTime(składnik składników składników składowych, czas intacji)

  //Zrób ziemniak po około 83 minutach do przetapiania, ponieważ dlaczego nie
  mods.betterwithmods.Misc.setFurnaceSmeltingTime(<minecraft:potato>100000); 
```