# Кровавая Магия

**Эта поддержка является WIP** **Если что-то нарушается, пожалуйста, откройте проблему на трекере проблем!** [Ссылка на проблему](https://github.com/Coders-After-Dark/CompatSkills/issues)

## Привязка:

Это действие отменит привязку предмета в Кровавой магии для указанного предмета, если игрок не соответствует требованиям.

### Синтаксис:

    Пример пусто:
    mods.compatskills.BindHandler.addBindLock(String failureMessage, IItemStack, String... requirements);
    
    Тестовые примеры:
    mods.compatskills.BindHandler.addBindLock("Неизведанная черная Энергия вокруг, а затем суббота", <bloodmagic:blood_orb>.withTag({orb: "bloodmagic:weak"}), "reskillable:building|15", "reskillable:magic|7", "stage|test", "adv|minecraft:husbandry/plant_seed");
    

## Ритуалы:

Это отменит активацию ритуала, если игрок не соответствует требованиям.

### Синтаксис:

    Пример пусто:
    mods.compatskills.RitualHandler.addRitualLock(String failureMessage, String ritual, String... requirements)
    
    Test Example:
    mods.compatskills.RitualHandler.addRitualLock("Когда ритуал активирует, вы не достигаете ожидаемого результата", "ritualCrushing", "reskillable:building|15", "reskillable:magic|7", "stage|test", "adv|minecraft:husbandry/plant_seed")