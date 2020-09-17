# MCRightClickBlock

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.event.entity.player.PlayerInteractEvent.MCRightClickBlock
```

## Konstruktorzy
```zenscript
nowy crafttweaker.api.event.entity.player.PlayerInteractEvent.MCRightClickBlock(handler jako function.Consumer<crafttweaker.api.event.entity.player.PlayerInteractEvent.MCRightClickBlock>);
```
| Parametr | Typ                                                                                                                                                                      | Opis             |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------- |
| handler  | Funkcja Konsumenta<[crafttweaker.api.event.entity.player.PlayerInteractEvent.MCRightClickBlock](/vanilla/api/event/entity/player/PlayerInteractEvent/MCRightClickBlock)> | Nie podano opisu |



## Metody
### getEntityPlayer

Zwraca [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCRightClickBlock.getEntityPlayer();
```

### getFace

Zwraca: `twarz zaangażowana w tę interakcję. Dla wszystkich interakcji nie będących blokowaniem to zwróci wartość null.`

Zwraca [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
myMCRightClickBlock.getFace();
```

### getItemStack

Zwraca: `itemstack zaangażowany w tę interakcję, {` @code ItemStack.EMPTY} jeśli ręka była pusta.

Zwraca [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCRightClickBlock.getItemStack();
```

### getPlayer

Zwroty: `Gracz`

Zwraca [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCRightClickBlock.getPlayer();
```

### getPos

Jeśli interakcja dotyczyła jednostki, będzie BlockPos skupiony na danej jednostki. Jeśli interakcja była na bloku, będzie to pozycja tego bloku. W przeciwnym razie będzie BlockPos skupiony na graczu. Nigdy nie będzie puste. Zwraca: `Pozycja związana z tą interakcją.`

Zwraca [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
myMCRightClickBlock.getPos();
```

### wynik

Określa, czy to zdarzenie oczekuje znaczącej wartości wyniku. Uwaga: Zdarzenia z adnotacją HasResult będą automatycznie dodane, aby zwrócić true.

Zwraca wartość logiczną

```zenscript
myMCRightClickBlock.hasResult();
```

### anulowalne

Określ czy ta funkcja jest w ogóle anulowalna. Zwroty: `Jeśli dostęp do setCanceled powinien być dozwolony
 Uwaga:
 Zdarzenia z anulowaną adnotacją będą automatycznie dodawane do tej metody, aby zwrócić true.`

Zwraca wartość logiczną

```zenscript
myMCRightClickBlock.isCancelable();
```

### Anulowane

Określ czy to wydarzenie jest anulowane i powinno przestać wykonywać. Zwroty: `Aktualnie anulowany stan`

Zwraca wartość logiczną

```zenscript
myMCRightClickBlock.isCanceled();
```

### Anulowane

```zenscript
myMCRightClickBlock.setAnulowane (anulowane jako boolean);
```

| Parametr  | Typ     | Opis             |
| --------- | ------- | ---------------- |
| anulowane | boolean | Nie podano opisu |



