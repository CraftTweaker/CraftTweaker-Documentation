# Событие действия снаряда

Этот интерфейс расширен всеми событиями, относящимися к снарядам (таким, как огненные шары, стрелы и бросаемые предметы).

## Импорт класса
Может потребоваться [импортировать](/AdvancedFunctions/Import/) класс, чтобы избежать ошибок.  
`импорт crafttweaker.event.IProjectileImpactEvent;`

## Расширение IEntityEvent
Этот интерфейс расширяет [IEntityEvent](/Vanilla/Events/Events/IEntityEvent/), что означает, что вся функциональность, которую предлагает IEntityEvent также присутствует в IProjectileImpactEvent.

## Геттеры

| name       | type                                                      |
| ---------- | --------------------------------------------------------- |
| `rayTrace` | [Результат IRayTraceult](/Vanilla/World/IRayTraceResult/) |
