# Инжиниринг

## Авторы:

Кредиты поступают в Skysom за то, что помогали мне через это и за то, что я могу переработать некоторые его код из MultiblockStages!

## Пояснение:

Поддержка погружения в настоящее время включает в себя:

- Команда для сброса строкового имени всех блоков IE. 
    - Команда: /ct ieMultiBlocks
- Многоблочные Ворота с помощью Crt-based синтаксиса.

### Синтаксис:

    Пример пусто:
    mods.compatskills.IEMultiBlockGate.addGate(String multiBlockName, String failureMessage, String... defaultRequirements);
    
    Пример:
    mods.compatskills.IEMultiBlockGate.addGate("IE:DieselGenerator", "Я боюсь, что это просто слишком сложно для таких идиотов, как вы!", "reskillable:building|15", "reskillable:magic|7", "stage|test", "adv|minecraft:husbandry/plant_seed");