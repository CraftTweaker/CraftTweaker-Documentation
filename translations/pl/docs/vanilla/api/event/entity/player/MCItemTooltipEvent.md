# MCItemTooltipEvent

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.event.entity.player.MCItemTooltipEvent
```

## Konstruktorzy
```zenscript
nowe crafttweaker.api.event.entity.player.MCItemTooltipEvent(handler jako funkcja.Consumer<crafttweaker.api.event.entity.player.MCItemTooltipEvent>);
```
| Parametr | Typ                                                                                                                                | Opis             |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| handler  | Funkcja Konsumenta<[crafttweaker.api.event.entity.player.MCItemTooltipEvent](/vanilla/api/event/entity/player/MCItemTooltipEvent)> | Nie podano opisu |



## Metody
### getEntityPlayer

To wydarzenie jest wystrzeliwane pustym graczem podczas uruchamiania podczas wypełniania drzew w poszukiwaniu podpowiedzi.

Zwraca [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCItemTooltipEvent.getEntityPlayer();
```

### getItemStack

Stos przedmiotów z podpowiedzią.

Zwraca [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCItemTooltipEvent.getItemStack();
```

### getPlayer

Zwroty: `Gracz`

Zwraca [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCItemTooltipEvent.getPlayer();
```

### wynik

Określa, czy to zdarzenie oczekuje znaczącej wartości wyniku. Uwaga: Zdarzenia z adnotacją HasResult będą automatycznie dodane, aby zwrócić true.

Zwraca wartość logiczną

```zenscript
myMCItemTooltipEvent.hasResult();
```

### anulowalne

Określ czy ta funkcja jest w ogóle anulowalna. Zwroty: `Jeśli dostęp do setCanceled powinien być dozwolony
 Uwaga:
 Zdarzenia z anulowaną adnotacją będą automatycznie dodawane do tej metody, aby zwrócić true.`

Zwraca wartość logiczną

```zenscript
myMCItemTooltipEvent.isCancelable();
```

### Anulowane

Określ czy to wydarzenie jest anulowane i powinno przestać wykonywać. Zwroty: `Aktualnie anulowany stan`

Zwraca wartość logiczną

```zenscript
myMCItemTooltipEvent.isCanceled();
```

### Anulowane

```zenscript
myMCItemTooltipEvent.setCanceled(anuluj jako boolean);
```

| Parametr | Typ     | Opis             |
| -------- | ------- | ---------------- |
| anuluj   | boolean | Nie podano opisu |



