
### Класс

```zenscript
импорт mods.roots.SummonCreatures;
```

#### Методы

```zenscript
void addEntity(
  IEntityDefinition сущность, // сущность, которая будет вызвана
  IIngredient[] ingredients // список ингредиентов, используемых для вызвания
);
```


---


```zenscript
void removeEntity(
  IEntityDefinition entity // entity to remove from summoning via recipe
);
```


---


```zenscript
void removeLifeEssence(
  IEntityDefinition entity // сущность для удаления жизненной сущности для
);
```


---


```zenscript
void addLifeEssence(
  IEntityDefinition entity // entity to add life essence for
);
```


---


```zenscript
void clearLifeEssence();
```


---


### Примеры

```zenscript
import mods.roots.SummonCreatures;

// Очистить все автоматически сгенерированные Life Essences added by
// карта Живого Урока
SummonCreatures. learLifeEssence();

// Добавить рецепт, чтобы вызвать курицу, используя 3 предмета
SummonCreatures. ddEntity(<entity:minecraft:chicken>, [<minecraft:wheat_seeds>, <minecraft:wheat>, <ore:ingotIron>]);

// Удаляем эндермен, добавляемый примером "Животный урожай"
// из списка Life Essence (предполагая, что он не был очищен)
SummonCreatures. emoveLifeEssence(<entity:minecraft:enderman>);

// Вручную добавляем возможность сброса жизненной сути для Денежного дракона
Суммонических существ. ddLifeEssence(<entity:minecraft:ender_dragon>);

// Удаляем рецепт по умолчанию для коров
SummonCreatures.removeEntity(<entity:minecraft:cow>);
```
