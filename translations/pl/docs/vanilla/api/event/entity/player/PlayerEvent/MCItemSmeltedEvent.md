# MCItemSmeltedEvent

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.event.entity.player.PlayerEvent.MCItemSmeltedEvent
```

## Konstruktorzy
```zenscript
nowe crafttweaker.api.event.entity.player.PlayerEvent.MCItemSmeltedEvent(handler jako function.Consumer<crafttweaker.api.event.entity.player.PlayerEvent.MCItemSmeltedEvent>);
```
| Parametr | Typ                                                                                                                                                        | Opis             |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| handler  | Funkcja Konsumenta<[crafttweaker.api.event.entity.player.PlayerEvent.MCItemSmeltedEvent](/vanilla/api/event/entity/player/PlayerEvent/MCItemSmeltedEvent)> | Nie podano opisu |



## Metody
### getEntityPlayer

Zwraca [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCItemSmeltedEvent.getEntityPlayer();
```

### getPlayer

Zwroty: `Gracz`

Zwraca [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCItemSmeltedEvent.getPlayer();
```

### getSmelting

Zwraca [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCItemSmeltedEvent.getSmelting();
```

### wynik

Określa, czy to zdarzenie oczekuje znaczącej wartości wyniku. Uwaga: Zdarzenia z adnotacją HasResult będą automatycznie dodane, aby zwrócić true.

Zwraca wartość logiczną

```zenscript
myMCItemSmeltedEvent.hasResult();
```

### anulowalne

Określ czy ta funkcja jest w ogóle anulowalna. Zwroty: `Jeśli dostęp do setCanceled powinien być dozwolony
 Uwaga:
 Zdarzenia z anulowaną adnotacją będą automatycznie dodawane do tej metody, aby zwrócić true.`

Zwraca wartość logiczną

```zenscript
myMCItemSmeltedEvent.isCancelable();
```

### Anulowane

Określ czy to wydarzenie jest anulowane i powinno przestać wykonywać. Zwroty: `Aktualnie anulowany stan`

Zwraca wartość logiczną

```zenscript
myMCItemSmeltedEvent.isCanceled();
```

### Anulowane

```zenscript
myMCItemSmeltedEvent.setCanceled(anuluj jako boolean);
```

| Parametr | Typ     | Opis             |
| -------- | ------- | ---------------- |
| anuluj   | boolean | Nie podano opisu |



