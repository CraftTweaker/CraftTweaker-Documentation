# Utwórz element
Tworzenie elementu niestandardowego dla chemii

# Pakiet
`mods.alchemistry.Util.createElement`
## Ładowarka
To musi być załadowane `#loader alchemistry`

## Metody
- **int atomicNumber** ID dla nowego elementu
- **Nazwa ciągu** Nowa Nazwa Elementów
- **Skrót String** Nowe elementy skrótu
- **int red** Element red shad, RGB
- **int green** Element green shad, RGB
- **int blue** Element blue shad, RGB

## Tworzenie
```zenscript
mods.alchemistry.Util.createElement(int atomicNumber, String name, String skrót, int green, int blue);

mods.alchemistry.Util.createElement(150,"wibranium","Vrb", 70, 90, 250);
mods.alchemistry.Util.createElement(151,"unobtanium","Uno",30,54,69);
```

## Uwagi

- Proszę użyć małych liter
- Wcześniej istniejące numery atomowe nie mogą być nadpisane
- Linia '#loader alchemistry' jest wymagana u góry pliku. Ten plik może być użyty tylko do tworzenia elementów i związków, inne przepisy muszą być umieszczane w innych plikach.
- UWAGA: Od v1.0.2, Obciążenie zasobów modyfikacji musi być użyte do włączenia obrazu i modelu json dla elementów niestandardowych. Jeśli chcesz automatycznie wygenerować te zasoby, stworzyłem program JAR wiersza poleceń [tutaj](https://github.com/al132mc/alchemistry-resource-creator/releases) aby to zrobić.
