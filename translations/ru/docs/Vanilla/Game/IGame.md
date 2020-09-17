# IGame

Класс IGame используется, чтобы получать основную информацию об игре. Можно получить доступ с помощью `game`.

## Импорт пакета

Может потребоваться импортировать пакет, если вы обнаруживаете какие-либо проблемы (вроде приведения типа [массива](/AdvancedFunctions/Arrays_and_Loops/)), поэтому в качестве меры предосторожности лучше добавить импорт:  
`import crafttweaker.game.IGame;`

## Геттеры

| Геттер   | Что он делает?                                        | Возвращаемый тип                                                   | Использование   |
| -------- | ----------------------------------------------------- | ------------------------------------------------------------------ | --------------- |
| biomes   | Возвращает все зарегистрированные биомы в список      | Список<[Ибиомов](/Vanilla/Biomes/IBiome/)>                         | `game.biomes`   |
| blocks   | Возвращает все зарегистрированные блоки в список      | Список<[IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/)>      | `game.blocks`   |
| entities | Возвращает все зарегистрированные сущности как список | Список<[IEntityDefinition](/Vanilla/Entities/IEntityDefinition/)>  | `game.entities` |
| items    | Возвращает все зарегистрированные товары как список   | Список<[Определение II](/Vanilla/Items/IItemDefinition/)>          | `game.items`    |
| liquids  | Возвращает все зарегистрированные жидкости как список | Список<[Определение Liquidd](/Vanilla/Liquids/ILiquidDefinition/)> | `game.liquids`  |
| potions  | Возвращает все зарегистрированные зелья в списке      | Список<[Зелье](/Vanilla/Potions/IPotion/)>                         | `game.potions`  |

## Методы

### getEntity

```zenscript
//getEntity(EntityName)

//практически та же очка
val = game.getEntity("ов");
val sheep1 = <entity:minecraft:sheep>;
```

### setLocalization

Устанавливает локализацию.  
Все параметры являются строками. `game.setLocalization(key, value);`  
`game.setLocalization(lang, key, value);`

### localize

Возвращает локализованную строку  
`game.localize(key)`  
`game.localize(key, lang)`