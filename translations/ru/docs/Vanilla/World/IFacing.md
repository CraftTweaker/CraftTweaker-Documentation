# IFacing

Интерфейс IFacing позволяет получать возможные направление для [IBlockPos](/Vanilla/World/IBlockPos/).

## Импорт пакета

Может потребоваться импортировать пакет, если вы обнаруживаете какие-либо проблемы (вроде приведения типа [массива](/AdvancedFunctions/Arrays_and_Loops/)), поэтому в качестве меры предосторожности лучше добавить импорт:  
`import crafttweaker.world.IFacing;`

## Перечисление

У этого интерфейса 7 статических методов, каждый возвращает соответствующее направление.  
Последний принимает направление как строку (например, `NORTH`):

```zenscript
crafttweaker.world.Facing.north()
crafttweaker.world.Facing.east()
crafttweaker.world.Facing.south()
crafttweaker.world.Facing.west()
crafttweaker.world.Facing.down()
crafttweaker.world.Facing.up()


crafttweaker.world.Facing.fromString(String name);
```

## Геттеры/методы без параметров

| Геттер   | Метод      | Возвращаемый тип |
| -------- | ---------- | ---------------- |
| name     | getName()  | string           |
| rotateY  | rotateY()  | IFacing          |
| opposite | opposite() | IFacing          |

## Другие методы

### Сравнение двух направлений

Вы можете сравнить две фракции, используя стандартные операторы `== ! < > <= >=`  
Или можно использовать функцию, хотя функция возвращает подсказку, равную 0, если она равна.

```zenscript
//Возвращает true или false
facingOne == facingTwo;

//Возвращает 0, если он равен
facingOne.compare(facingTwo);
```