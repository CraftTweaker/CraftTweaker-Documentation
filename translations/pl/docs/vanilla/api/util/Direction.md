# Kierunek

Reprezentuje kierunek kardynalny (północ, południe, wschod, zachód) oraz (góra i dół).

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
Kierunek crafttweaker.api.util.Direction
```

## Metody
### rotateAround

Obraca ten kierunek wokół danej osi

Zwraca [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>.rotateAround(oś jako crafttweaker.api.util.DirectionAxis);
<direction:north>.rotateAround(<directionaxis:north>);
```

| Parametr | Typ                                                                    | Opis            |
| -------- | ---------------------------------------------------------------------- | --------------- |
| oś       | [crafttweaker.api.util.DirectionAxis](/vanilla/api/util/DirectionAxis) | Oś do obracania |


### rotateY

Obraca ten kierunek na osi Y

 Zwraca: `kierunek, który obrócił się na osi Y tego kierunku`

Zwraca [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>.rotateY();
```

### rotateYCCW

Obróć ten kierunek w kierunku przeciwnym do ruchu wskazówek zegara na osi Y

 Zwraca: `kierunek, który jest przeciwny do ruchu wskazówek zegara na osi Y`

Zwraca [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>rotateYCCW();
```


## Właściwości

| Nazwisko       | Typ                                                                     | Posiada Getter | Ma ustawienie |
| -------------- | ----------------------------------------------------------------------- | -------------- | ------------- |
| oś             | [crafttweaker.api.util.DirectionAxis](/vanilla/api/util/DirectionAxis)  | prawda         | fałszywy      |
| axisOffset     | odcień                                                                  | prawda         | fałszywy      |
| Kąt poziomy    | zmiennoprzecinkowe                                                      | prawda         | fałszywy      |
| indeks poziomy | odcień                                                                  | prawda         | fałszywy      |
| indeks         | odcień                                                                  | prawda         | fałszywy      |
| Nazwa          | Ciąg znaków                                                             | prawda         | fałszywy      |
| przeciwnie     | [Kierunek crafttweaker.api.util.Direction](/vanilla/api/util/Direction) | prawda         | fałszywy      |
| xOffset        | odcień                                                                  | prawda         | fałszywy      |
| yOffset        | odcień                                                                  | prawda         | fałszywy      |
| zOffset        | odcień                                                                  | prawda         | fałszywy      |

