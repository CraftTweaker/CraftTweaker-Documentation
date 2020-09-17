# Etapy gracza

API GameStages rozszerza funkcje [IPlayer CraftTweakera](/Vanilla/Players/IPlayer/) , aby umożliwić sprawdzenie i modyfikację etapów gracza.

## Wezwanie do metod

Jako że jest to [ZenExpansion](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/), możesz po prostu wywołać metody na dowolnym obiekcie [IPlayer](/Vanilla/Players/IPlayer/) lub na którymkolwiek z jego podtypów.

## Metody

### Sprawdzaj gry

Metody zwracają wartości logiczne.

```zenscript
// Sprawdza, czy gracz ma ukończony etap.
//player.hasGameStage(String stage);
player.hasGameStage("one");



// Sprawdza, czy gracz ma którykolwiek z przerywanych etapów. Potrzebują tylko jednego.
//gracz.hasAnyGameStages(String... etapy);
gracz.hasAnyGameStages("jeden, "dwa");



// Sprawdza, czy gracz ma wszystkie etapy przekazania.
//gracz.hasAllGameStages (String... etapy);
gracz.hasAllGameStages ("jeden, "dwa");
```

### Dodaj lub usuń grę

Metody zwracają nieważną (nic).

```zenscript
// Odblokowuje etap dla gracza.
//addGameStage(String stage);
addGameStage(String stage);


// blokuje etap dla gracza.
//removeGameStage(etap string);
removeGameStage(etap string);
```