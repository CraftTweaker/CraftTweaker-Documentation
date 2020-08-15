# MCSleepingLocationCheckEvent

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.event.entity.player.MCSleepingLocationCheckEvent
```

## Konstruktorzy
```zenscript
nowe crafttweaker.api.event.entity.player.MCSleepingLocationCheckEvent(handler jako function.Consumer<crafttweaker.api.event.entity.player.MCSleepingLocationCheckEvent>);
```
| Parametr | Typ                                                                                                                                                    | Opis             |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------- |
| handler  | Funkcja Konsumenta<[crafttweaker.api.event.entity.player.MCSleepingLocationCheckEvent](/vanilla/api/event/entity/player/MCSleepingLocationCheckEvent)> | Nie podano opisu |



## Metody
### getSleepingLocation

Zwraca [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
myMCSleepingLocationCheckEvent.getSleepingLocation();
```

### wynik

Określa, czy to zdarzenie oczekuje znaczącej wartości wyniku. Uwaga: Zdarzenia z adnotacją HasResult będą automatycznie dodane, aby zwrócić true.

Zwraca wartość logiczną

```zenscript
myMCSleepingLocationCheckEvent.hasResult();
```

### anulowalne

Określ czy ta funkcja jest w ogóle anulowalna. Zwroty: `Jeśli dostęp do setCanceled powinien być dozwolony
 Uwaga:
 Zdarzenia z anulowaną adnotacją będą automatycznie dodawane do tej metody, aby zwrócić true.`

Zwraca wartość logiczną

```zenscript
myMCSleepingLocationCheckEvent.isCancelable();
```

### Anulowane

Określ czy to wydarzenie jest anulowane i powinno przestać wykonywać. Zwroty: `Aktualnie anulowany stan`

Zwraca wartość logiczną

```zenscript
myMCSleepingLocationCheckEvent.isCanceled();
```

### Anulowane

```zenscript
myMCSleepingLocationCheckEvent.setCanceled(anuluj jako boolean);
```

| Parametr | Typ     | Opis             |
| -------- | ------- | ---------------- |
| anuluj   | boolean | Nie podano opisu |



