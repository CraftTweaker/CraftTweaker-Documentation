# XUTweaker

Пакет XUTweaker добавляет несколько статических утилит.

## Импорт пакета

Если вы хотите сократить вызовы методов или столкнуться с любыми проблемами, вам может потребоваться импортировать пакет.  
Вы можете сделать это, используя

```zenscript
импортировать экстраутилиты2.Tweaker.XUTweaker;
```

## Методы

### Разрешить полет за выживание

Разрешает полёт для всех игроков, навсегда.

```zenscript
extrautilities2.Tweaker.XUTweaker.allowSurvivalFlight();
```

### Отключить Незер-порталы

Предотвращает появление Незера (и всех порталов, использующих PortalSpawnEvent) навсегда.

```zenscript
extrautilities2.Tweaker.XUTweaker.disableNetherPortals();
```

### Проверьте, является ли игрок поддельным игроком

Возвращает логическое сообщение о том, что игрок является поддельным игроком.

Требуется аргумент [IPlayer](/Vanilla/Players/IPlayer).

```zenscript
extrautilities2.Tweaker.XUTweaker.isPlayerFake(игрок);
```

### Откройте экран книг для игрока

Попытка открыть экран записной книги для данного игрока.

Возвращает логическое сообщение о корректном выполнении команды.  
Требует аргумент [IPlayer](/Vanilla/Players/IPlayer) .  
Также требует аргумент string[], который будет страницами.

```zenscript
extrautilities2.Tweaker.XUTweaker.openBookScreen(плеер, страницы);
extrautilities2.Tweaker.XUTweaker.openBookScreen(плеер, ["Страница 1", "Страница 2"]);
```