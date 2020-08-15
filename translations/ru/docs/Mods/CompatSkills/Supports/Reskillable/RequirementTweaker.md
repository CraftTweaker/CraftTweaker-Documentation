# Требование Tweaker

## ЗУ:

Начиная с 1.2.0 и вперед, возрождение активно развивается для улучшения внутренних систем блокирования Убийства и CompatSkill. Это позволяет в будущем создать более мощные механизмы блокировки.

## Блокировка требования:

В настоящее время основная поддержка CrT заключается в блокировке требований. Этого также можно добиться с помощью системы конфигурации. Однако конфигурационная система **НЕ** поддерживает NBT!

### Синтаксис:

    // Пустой пример:
    mods.compatskills.Requirement.addRequirement(IItemStack item, String... locked)
    
    Рабочие примеры:
    
    // Добавляет замок для алмазной кирки с метаданными Wildcard
    mods.compatskills. equirement.addRequirement(<minecraft:diamond_pickaxe:*>, "reskillable:mining|4");
    
    // Добавляет Блокировку NBT для Эффективности 5
    модов. ompatskills.Requirement.addRequirement(<minecraft:diamond_pickaxe:*>.withTag({ench: [{lvl: 5 as short, id: 32 as short}]}), "reskillable:mining|5", "reskillable:magic|7");
    
    // Добавляет NBT Lock для Silk Touch
    модов. ompatskills.Requirement.addRequirement(<minecraft:diamond_pickaxe:*>.withTag({ench: [{lvl: 1 as short, id: 33 as short}]}), "reskillable:mining|6", "reskillable:agility|7");
    
    // Добавляет NBT Lock для Unbreaking 3
    модов. ompatskills.Requirement.addRequirement(<minecraft:diamond_pickaxe:*>.withTag({ench: [{lvl: 3 as short, id: 34 as short}]}), "reskillable:mining|7", "reskillable:attack|7");
    

Пример 3 Чаровых Замка, соединяющихся в один замк:

![Потрясающий замок](https://i.imgur.com/gCfETAh.png)