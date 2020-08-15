# MCCriticalHitEvent

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.event.entity.player.MCCriticalHitEvent
```

## Konstruktorzy
```zenscript
nowy crafttweaker.api.event.entity.player.MCCriticalHitEvent(handler jako funkcja.Consumer<crafttweaker.api.event.entity.player.MCCriticalHitEvent>);
```
| Parametr | Typ                                                                                                                                | Opis             |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| handler  | Funkcja Konsumenta<[crafttweaker.api.event.entity.player.MCCriticalHitEvent](/vanilla/api/event/entity/player/MCCriticalHitEvent)> | Nie podano opisu |



## Metody
### getDamageModifier

Modyfikator obrażeń dla trafienia.<br> Jest to domyślnie 1.5F dla trafień cyrytowych i 1F dla trafień normalnych.

Zwraca zmiennoprzecinkowe

```zenscript
myMCCriticalHitEvent.getDamageModifier();
```

### getEntityPlayer

Zwraca [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCCriticalHitEvent.getEntityPlayer();
```

### getOldDamageModifier

Modyfikator obrażeń orignal dla trafienia jakąkolwiek zmianą.<br> Jest to 1.5F dla trafień cyrystycznych i 1F dla trafień normalnych.

Zwraca zmiennoprzecinkowe

```zenscript
myMCCriticalHitEvent.getOldDamageModifier();
```

### getPlayer

Zwroty: `Gracz`

Zwraca [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCCriticalHitEvent.getPlayer();
```

### wynik

Określa, czy to zdarzenie oczekuje znaczącej wartości wyniku. Uwaga: Zdarzenia z adnotacją HasResult będą automatycznie dodane, aby zwrócić true.

Zwraca wartość logiczną

```zenscript
myMCCriticalHitEvent.hasResult();
```

### anulowalne

Określ czy ta funkcja jest w ogóle anulowalna. Zwroty: `Jeśli dostęp do setCanceled powinien być dozwolony
 Uwaga:
 Zdarzenia z anulowaną adnotacją będą automatycznie dodawane do tej metody, aby zwrócić true.`

Zwraca wartość logiczną

```zenscript
myMCCriticalHitEvent.isCancelable();
```

### Anulowane

Określ czy to wydarzenie jest anulowane i powinno przestać wykonywać. Zwroty: `Aktualnie anulowany stan`

Zwraca wartość logiczną

```zenscript
myMCCriticalHitEvent.isCanceled();
```

### isVanillaCritical

Zwraca prawdę, jeśli to trafienie było krytyczne przez wanilla

Zwraca wartość logiczną

```zenscript
myMCCriticalHitEvent.isVanillaCritical();
```

### Anulowane

```zenscript
myMCCriticalHitEvent.setCanceled(Anuluj jako boolean);
```

| Parametr | Typ     | Opis             |
| -------- | ------- | ---------------- |
| anuluj   | boolean | Nie podano opisu |


### Modyfikator setDamageModifier

Ustawia mnożnik obrażeń dla trafienia. Jeśli ustawisz to na 0, cząstki są nadal generowane, ale nie zadawane są obrażenia.

```zenscript
myMCCriticalHitEvent.setDamageModifier(modyfikacja jako pływak);
```

| Parametr | Typ                | Opis             |
| -------- | ------------------ | ---------------- |
| mod      | zmiennoprzecinkowe | Nie podano opisu |



