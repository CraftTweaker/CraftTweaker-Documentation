# Wydarzenie MCItemFishedingowe

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.event.entity.player.MCItemFishedEvent
```

## Konstruktorzy
```zenscript
nowy crafttweaker.api.event.entity.player.MCItemFishedEvent(handler jako funkcja.Consumer<crafttweaker.api.event.entity.player.MCItemFishedEvent>);
```
| Parametr | Typ                                                                                                                              | Opis             |
| -------- | -------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| handler  | Funkcja Konsumenta<[crafttweaker.api.event.entity.player.MCItemFishedEvent](/vanilla/api/event/entity/player/MCItemFishedEvent)> | Nie podano opisu |



## Metody
### obrażeniaRodby

```zenscript
myMCItemFishedEvent.damageRodBy(arg0 jako int);
```

| Parametr | Typ    | Opis             |
| -------- | ------ | ---------------- |
| arg0     | odcień | Nie podano opisu |


### getEntityPlayer

Zwraca [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCItemFishedEvent.getEntityPlayer();
```

### getPlayer

Zwroty: `Gracz`

Zwraca [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCItemFishedEvent.getPlayer();
```

### Uszkodzenia getRodage

Uzyskaj obrażenia zadawane przez pręt. Zwraca: `Obrażenia otrzymają`

Zwraca int

```zenscript
myMCItemFishedEvent.getRodDamage();
```

### wynik

Określa, czy to zdarzenie oczekuje znaczącej wartości wyniku. Uwaga: Zdarzenia z adnotacją HasResult będą automatycznie dodane, aby zwrócić true.

Zwraca wartość logiczną

```zenscript
myMCItemFishedEvent.hasResult();
```

### anulowalne

Określ czy ta funkcja jest w ogóle anulowalna. Zwroty: `Jeśli dostęp do setCanceled powinien być dozwolony
 Uwaga:
 Zdarzenia z anulowaną adnotacją będą automatycznie dodawane do tej metody, aby zwrócić true.`

Zwraca wartość logiczną

```zenscript
myMCItemFishedEvent.isCancelable();
```

### Anulowane

Określ czy to wydarzenie jest anulowane i powinno przestać wykonywać. Zwroty: `Aktualnie anulowany stan`

Zwraca wartość logiczną

```zenscript
myMCItemFishedEvent.isCanceled();
```

### Anulowane

```zenscript
myMCItemFishedEvent.setCanceled(anuluj jako boolean);
```

| Parametr | Typ     | Opis             |
| -------- | ------- | ---------------- |
| anuluj   | boolean | Nie podano opisu |



