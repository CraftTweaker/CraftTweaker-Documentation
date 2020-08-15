# Магнитный кран

## Пояснение:

Поддержка Magneticraft в настоящее время состоит из:

- Команда для сброса строк всех мультиблоков Magneticraft. 
    - Команда: /ct magMultiBlocks
- Многоблочные Ворота с помощью Crt-based синтаксиса.

### Синтаксис:

    Пример пустого:
    mods.compatskills.MagMultiBlockGates.addGate(String multiBlockName, String failureMessage, String... defaultRequirements);
    
    Пример:
    mods.compatskills.MagMultiBlockGates.addGate("solar_mirror", "Я боюсь, что это просто слишком сложно для таких идиотов, как вы!", "reskillable:building|15", "reskillable:magic|7", "adv|minecraft:husbandry/plant_seed", "stage|test");