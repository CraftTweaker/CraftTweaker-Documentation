# Kierunek

Reprezentuje kierunek kardynalny (północ, południe, wschod, zachód) oraz (góra i dół).

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
Kierunek crafttweaker.api.util.Direction
```

## Metody
### rotateY

Obraca ten kierunek na osi Y

 Zwraca: `kierunek, który obrócił się na osi Y tego kierunku`

Typ zwrotu: [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>.rotateY();
```

### rotateYCCW

Obróć ten kierunek w kierunku przeciwnym do ruchu wskazówek zegara na osi Y

 Zwraca: `kierunek, który jest przeciwny do ruchu wskazówek zegara na osi Y`

Typ zwrotu: [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>rotateYCCW();
```


## Właściwości

| Nazwisko       | Typ                                                                     | Posiada Getter | Ma ustawienie |
| -------------- | ----------------------------------------------------------------------- | -------------- | ------------- |
| oś             | [crafttweaker.api.util.DirectionAxis](/vanilla/api/util/DirectionAxis)  | prawda         | fałszywy      |
| axisOffset     | odcień                                                                  | prawda         | fałszywy      |
| w dół          | [Kierunek crafttweaker.api.util.Direction](/vanilla/api/util/Direction) | prawda         | prawda        |
| wschodni       | [Kierunek crafttweaker.api.util.Direction](/vanilla/api/util/Direction) | prawda         | prawda        |
| Kąt poziomy    | zmiennoprzecinkowe                                                      | prawda         | fałszywy      |
| indeks poziomy | odcień                                                                  | prawda         | fałszywy      |
| indeks         | odcień                                                                  | prawda         | fałszywy      |
| Nazwa          | Ciąg znaków                                                             | prawda         | fałszywy      |
| Północ         | [Kierunek crafttweaker.api.util.Direction](/vanilla/api/util/Direction) | prawda         | prawda        |
| przeciwnie     | [Kierunek crafttweaker.api.util.Direction](/vanilla/api/util/Direction) | prawda         | fałszywy      |
| boki           | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)[]        | prawda         | prawda        |
| na południe    | [Kierunek crafttweaker.api.util.Direction](/vanilla/api/util/Direction) | prawda         | prawda        |
| w górę         | [Kierunek crafttweaker.api.util.Direction](/vanilla/api/util/Direction) | prawda         | prawda        |
| na zachód      | [Kierunek crafttweaker.api.util.Direction](/vanilla/api/util/Direction) | prawda         | prawda        |
| xOffset        | odcień                                                                  | prawda         | fałszywy      |
| yOffset        | odcień                                                                  | prawda         | fałszywy      |
| zOffset        | odcień                                                                  | prawda         | fałszywy      |

