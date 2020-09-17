# MCXpChange

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.event.entity.player.PlayerXpEvent.MCXpChange
```

## Konstruktorzy
```zenscript
nowy crafttweaker.api.event.entity.player.PlayerXpEvent.MCXpChange(handler jako function.Consumer<crafttweaker.api.event.entity.player.PlayerXpEvent.MCXpChange>);
```
| Parametr | Typ                                                                                                                                            | Opis             |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| handler  | Funkcja Konsumenta<[crafttweaker.api.event.entity.player.PlayerXpEvent.MCXpChange](/vanilla/api/event/entity/player/PlayerXpEvent/MCXpChange)> | Nie podano opisu |



## Metody
### getamount

Zwraca int

```zenscript
myMCXpChange.getAmount();
```

### getEntityPlayer

Zwraca [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCXpChange.getEntityPlayer();
```

### getPlayer

Zwroty: `Gracz`

Zwraca [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCXpChange.getPlayer();
```

### wynik

Określa, czy to zdarzenie oczekuje znaczącej wartości wyniku. Uwaga: Zdarzenia z adnotacją HasResult będą automatycznie dodane, aby zwrócić true.

Zwraca wartość logiczną

```zenscript
myMCXpChange.hasResult();
```

### anulowalne

Określ czy ta funkcja jest w ogóle anulowalna. Zwroty: `Jeśli dostęp do setCanceled powinien być dozwolony
 Uwaga:
 Zdarzenia z anulowaną adnotacją będą automatycznie dodawane do tej metody, aby zwrócić true.`

Zwraca wartość logiczną

```zenscript
myMCXpChange.isCancelable();
```

### Anulowane

Określ czy to wydarzenie jest anulowane i powinno przestać wykonywać. Zwroty: `Aktualnie anulowany stan`

Zwraca wartość logiczną

```zenscript
myMCXpChange.isCanceled();
```

### setamount

```zenscript
myMCXpChange.setAmount(kwota jako int);
```

| Parametr | Typ    | Opis             |
| -------- | ------ | ---------------- |
| kwota    | odcień | Nie podano opisu |


### Anulowane

```zenscript
myMCXpChange.setAnulowane (anuluj jako boolean);
```

| Parametr | Typ     | Opis             |
| -------- | ------- | ---------------- |
| anuluj   | boolean | Nie podano opisu |



