# Utwórz związek
Niestandardowe wytwarzanie związków chemicznych

# Pakiet
```zenscript
mods.alchemistry.Util.createCompound
```

## Ładowarka
To musi być załadowane `#loader alchemistry`

## Metody
- **int meta** meta dla nowego Compund
- **Nazwa ciągu** Nazwa dla New Compund
- **czerwony** czerwony cień złożony, RGB
- **int green** compound green shad, RGB
- **niebieski** złożony niebieski odcień, RGB
- **Obiekt [][]** Każdy wspornik zawiera inny element, a następnie przecinek i ilość do użycia w twoim Związku

## Tworzenie
```zenscript
mods.alchemistry.Util.createCompound(int meta, nazwa ciągu, int czerwone, int green, int blue, Object[][] składniki);

mods.alchemistry.Util.createCompound(1000, "sufid wibracyjny", 20, 69, 185,
[["vibranium", 1],
 ["sulfur", 3]]);
```

## Uwagi
- Proszę użyć małych liter
- Linia '#loader alchemistry' jest wymagana u góry pliku. Ten plik może być użyty tylko do tworzenia elementów i związków, inne przepisy muszą być umieszczane w innych plikach.
- Pole składników wymaga, aby każdy wpis był tablicą taką jak ["celuloza", 5], wskazując element/związek i jego ilość. Argumenty tekstowe są używane tutaj, a nie itemstacks jako sposób zapewnienia, że używane są tylko pierwiastki/związki.
- Pole meta jest wymagane, aby Twoje nowe związki miały niezmienny identyfikator, nawet gdy inne związki są tworzone lub usuwane. Każdy związek musi mieć unikalną wartość meta. W chwili pisania mod używa tylko wartości meta od 0 do 35, ale zaczynam numerować meta na 1000 (jak widzę powyżej) lub więcej, aby zapewnić, że twoje niestandardowe związki nigdy nie będą sprzeczne z wewnętrznymi recepturami Alchemii
