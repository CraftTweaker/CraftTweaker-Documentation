# IBiome

Интерфейс IBiome позволяет вам получать информацию про зарегистрированные биомы.

## Импорт пакета

Может потребоваться импортировать пакет, если вы обнаруживаете какие-либо проблемы (вроде приведения типа [массива](/AdvancedFunctions/Arrays_and_Loops/)), поэтому в качестве меры предосторожности лучше добавить импорт:  
`import crafttweaker.world.IBiome;`

## Вызов IBiome

Вы можете получить список всех зарегистрированных биомов с помощью `game.biomes` из [IGame](/Vanilla/Game/IGame/). Пока что это единственный способ.

## Геттеры ZenScript

Эмм, все что вы можете сделать с объектом IBiome &mdash; получить некоторую информацию из него:

| Геттер                       | Возвращаемый тип |
| ---------------------------- | ---------------- |
| name                         | string           |
| canRain                      | boolean          |
| isSnowyBiome                 | boolean          |
| highHumidity                 | boolean          |
| spawningChance               | float            |
| baseHeight                   | float            |
| heightVariation              | float            |
| rainfall                     | float            |
| waterColorMultiplier         | int              |
| ignorePlayerSpawnSuitability | boolean          |
| temperature                  | float            |