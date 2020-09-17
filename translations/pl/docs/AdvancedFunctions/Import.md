# Importuj funkcję

Zamiast wpisywać całą nazwę funkcji przez cały czas, możesz po prostu zaimportować funkcję służącą Twoim potrzebom. Przydatne podczas używania funkcji moda.

## Uwaga dotycząca przywozu przed 1.12

Z CraftTweaker 1.12 wiele kodu uległo zmianie.  
Wcześniej wszystkie funkcje wewnętrzne były nazywane za pomocą `minetweaker.package.function`. Teraz, `minetweaker` został zastąpiony przez `crafttweaker`, więc teraz sais `crafttweaker.name.function`!

Jeśli kiedykolwiek doświadczysz problemów z importem skryptów z tej wiki, możesz sprawdzić, czy twoja wersja MC jest poniżej 1.12.

## Podstawowy import

Import musi być zadeklarowany u góry skryptu. Będziesz musiał zadeklarować import dla każdego skryptu oddzielnie. Uważaj, aby nie importować dwóch funkcji o tej samej nazwie, użyj funkcji AS dla tego

```zenscript
//To zaimportuje funkcję ukrycia z JEI
importuje mods.jei.JEI.removeAndHide;

//I to zaimportuje pakiet JEI
importować mods.jei. EI;

//removeAndHide jest funkcją, więc możemy jej użyć
removeAndHide(<minecraft:dirt>);

//Inicjatywa na rzecz zatrudnienia ludzi młodych to pakiet, więc musimy określić, jaką funkcję chcemy użyć
JEI. ide(<minecraft:diamond>);
```

## Importuj jako

Czasami chcesz zaimportować dwie funkcje o tej samej nazwie lub po prostu chcesz, aby skrypty wyglądały lepiej, używając niestandardowych nazw. Podczas dodawania instrukcji AS na końcu importu, możesz określić nazwę, którą import powinien słuchać.

```zenscript
//To zaimportuje funkcję ukrycia z JEI i udostępni ją pod nazwą "h"
importuje mods.jei.JEI. strona jako h;

//A to zaimportuje funkcję removeAndHide z JEI i udostępni ją pod nazwą "rh"
importu. ei.JEI.removeAndHide jako rh;

h(<minecraft:dirt>);
rh(<minecraft:diamond>);
```