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

You can compare two facings using the standart comparing Operators `== != < > <= >=`  
Alternatively, you can use the function, though the function returns an int that is 0 if they are equal.

```zenscript
//Returns true or false
facingOne == facingTwo;

//Returns 0 if they are equal
facingOne.compare(facingTwo);
```