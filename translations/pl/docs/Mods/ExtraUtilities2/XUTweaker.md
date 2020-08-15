# XUTweaker

Pakiet XUTweaker dodaje kilka metod statycznych.

## Importowanie pakietu

Jeśli chcesz skrócić połączenia metodowe lub napotkać jakiekolwiek problemy, które trzeba będzie zaimportować pakiet.  
Możesz to zrobić za pomocą

```zenscript
importowanie produktów ekstrudowych2.Tweaker.XUTweaker,
```

## Metody

### Zezwalaj na przetrwanie

Zezwala na lot dla wszystkich graczy na stałe.

```zenscript
ekstrutylity2.Tweaker.XUTweaker.allowSurvivalFlight();
```

### Wyłącz netherowe portale

Zapobiega pojawianiu się portali Netheru (i wszystkich portali, które używają PortalSpawnEvent) na stałe.

```zenscript
ekstrutylity2.Tweaker.XUTweaker.disableNetherPortals();
```

### Sprawdź, czy gracz jest fałszywym graczem

Zwraca boolean stwierdzający czy gracz jest fałszywym graczem.

Wymaga argumentu [IPlayer](/Vanilla/Players/IPlayer).

```zenscript
ekstrutylitie2.Tweaker.XUTweaker.isPlayerFake(gracz);
```

### Otwórz ekran książki dla gracza

Próbuje otworzyć ekran książki dla danego gracza.

Zwraca wartość logiczną, stwierdzając, czy komenda została wykonana poprawnie.  
Wymaga argumentu [IPlay](/Vanilla/Players/IPlayer) .  
Wymaga również argumentu ciągu [], który będzie stronami.

```zenscript
ekstrautilities2.Tweaker.XUTweaker.openBookScreen(odtwarzacz, strony);
ekstrulities2.Tweaker.XUTweaker.openBookScreen(odtwarzacz, ["Strona 1", "Strona 2"]);
```