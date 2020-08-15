# Ритуальная поддержка

## Ритуалы:

Это отменяет активацию ритуала, если особые требования к активации ритуалов не выполняются.

### Команда:

На данный момент существует команда для сброса всех ритуальных строк для использования ритуальным Handler. Команда команды: /ct ritualDump и выведет все ритуальные строки в "CraftTweaker.log".

### Пред-1.4.0:

#### Синтаксис:

    Пример пусто:
    mods.compatskills.RitualHandler.addRitualLock(String failureMessage, String ritual, String... requirements)
    
    Test Example:
    mods.compatskills.RitualHandler.addRitualLock("Когда ритуал активирует, вы не достигаете ожидаемого результата", "ritualCrushing", "reskillable:building|15", "reskillable:magic|7", "stage|test", "adv|minecraft:husbandry/plant_seed")
    

### Пост-1.4.0:

Начиная с CompatSkills 1.4.0 были добавлены несколько новых ZenMethods, а также внесены некоторые изменения в существующий синтаксис. Мы также исправили проблему, которая сделала некорректной поддержку ритуала и привязки поддержки!

#### Синтаксис:

    Пример пусто:
    mods.compatskills.RitualHandler.addRitualLock(String ritual, строка... Требования);
    mods.compatskills.RitualHandler.addRitualCostLock(int activationCost, String... Требования);
    mods.compatskills.RitualHandler.addRitualCrystalLock(int crystalLevel, String... requirements);
    
    Test Example:
    mods.compatskills.RitualHandler.addRitualLock("ritualCrushing", "reskillable:magic|7");
    mods.compatskills.RitualHandler.addRitualCostLock(500, "reskillable:magic|7";
    mods.compatskills.RitualHandler.addRitualCrystalLock(1, "reskillable:magic|7");
    

#### Сообщение об ошибке

Как и при поддержке привязки, сообщение об ошибке было перемещено в локализуемую строку вместо строки, установленной в методе CrT. Это сделает так, чтобы авторы ресурсного пакета могли локализовать и изменить строки, как они хотели бы гораздо проще.

    compatskills.bloodmagic.ritualError=По мере активации ритуала вы не достигаете ожидаемого результата
    

Некоторые другие изменения, например, что сообщение об ошибке теперь отображается как часть сообщения о состоянии чата для игрока. Это означает, что сообщение показывается только игроку, а не игроку в чате, чтобы каждый видел. Это также означает, что теперь он будет отображаться наряду с требованиями в чате. Это облегчает игроку выяснить, что у него отсутствует в замке.