# Этап блокировки

## Стар-Блокировка

Эта часть поддержки GameStages-а позволяет вам заблокировать определенный этап за набором требований. Это означает, что если игрок не соответствует установленным требованиям для этапа при разблокировке стадии, разблокировка будет отменена и опубликовано сообщение об ошибке в чате. Это сообщение не является общедоступным для сервера, но зависит от игрока.

### Синтаксис:

    // Пример пусто:
    mods.compatskills.GameStageLocks.addGameStageLock(String gamestage, String... defaultRequirements);
    
    // Пример теста:
    mods.compatskills.GameStageLocks.addGameStageLock("i", "reskillable:agility|10");
    mods.compatskills.GameStageLocks.addGameStageLock("like", "reskillable:agility|11");
    mods.compatskills.GameStageLocks.addGameStageLock("banana", "reskillable:agility|12");
    mods.compatskills.GameStageLocks.addGameStageLocks.addGameStageLock("pancakes", "reskillable:agility|13");