# MCPlayerFlyableFallEvent

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.event.entity.player.MCPlayerFlyableFallEvent
```

## Konstruktorzy
```zenscript
nowy crafttweaker.api.event.entity.player.MCPlayerFlyableFallEvent(handler jako funkcja.Consumer<crafttweaker.api.event.entity.player.MCPlayerFlyableFallEvent>);
```
| Parametr | Typ                                                                                                                                            | Opis             |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| handler  | Funkcja Konsumenta<[crafttweaker.api.event.entity.player.MCPlayerFlyableFallEvent](/vanilla/api/event/entity/player/MCPlayerFlyableFallEvent)> | Nie podano opisu |



## Metody
### getDistance

Zwraca zmiennoprzecinkowe

```zenscript
myMCPlayerFlyableFallEvent.getDistance();
```

### getEntityPlayer

Zwraca [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCPlayerFlyableFallEvent.getEntityPlayer();
```

### getMultiplier

Zwraca zmiennoprzecinkowe

```zenscript
myMCPlayerFlyableFallEvent.getMultiplier();
```

### getPlayer

Zwroty: `Gracz`

Zwraca [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCPlayerFlyableFallEvent.getPlayer();
```

### wynik

Określa, czy to zdarzenie oczekuje znaczącej wartości wyniku. Uwaga: Zdarzenia z adnotacją HasResult będą automatycznie dodane, aby zwrócić true.

Zwraca wartość logiczną

```zenscript
myMCPlayerFlyableFallEvent.hasResult();
```

### anulowalne

Określ czy ta funkcja jest w ogóle anulowalna. Zwroty: `Jeśli dostęp do setCanceled powinien być dozwolony
 Uwaga:
 Zdarzenia z anulowaną adnotacją będą automatycznie dodawane do tej metody, aby zwrócić true.`

Zwraca wartość logiczną

```zenscript
myMCPlayerFlyableFallEvent.isCancelable();
```

### Anulowane

Określ czy to wydarzenie jest anulowane i powinno przestać wykonywać. Zwroty: `Aktualnie anulowany stan`

Zwraca wartość logiczną

```zenscript
myMCPlayerFlyableFallEvent.isCanceled();
```

### Anulowane

```zenscript
myMCPlayerFlyableFallEvent.setCanceled(anuluj jako boolean);
```

| Parametr | Typ     | Opis             |
| -------- | ------- | ---------------- |
| anuluj   | boolean | Nie podano opisu |


### Odległość

```zenscript
myMCPlayerFlyableFallEvent.setDistance(odległość jako pływak);
```

| Parametr  | Typ                | Opis             |
| --------- | ------------------ | ---------------- |
| odległość | zmiennoprzecinkowe | Nie podano opisu |


### setMultiplier

```zenscript
myMCPlayerFlyableFallEvent.setMultiplier(mnożnik jako float);
```

| Parametr | Typ                | Opis             |
| -------- | ------------------ | ---------------- |
| mnożnik  | zmiennoprzecinkowe | Nie podano opisu |



