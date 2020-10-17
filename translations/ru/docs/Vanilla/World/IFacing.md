# IFacing

Интерфейс IFacing позволяет получать возможные направление для [IBlockPos](/Vanilla/World/IBlockPos/).

## Импорт пакета

Может потребоваться импортировать пакет, если вы обнаруживаете какие-либо проблемы (вроде приведения типа [массива](/AdvancedFunctions/Arrays_and_Loops/)), поэтому в качестве меры предосторожности лучше добавить импорт:  
`import crafttweaker.world.IFacing;`

## Перечисление

The Facing interface has 6 static methods that return the said direction.  
It also has one more that takes the direction as String input (e.g. `"NORTH"`)

```zenscript
crafttweaker.world.IFacing.north()
crafttweaker.world.IFacing.east()
crafttweaker.world.IFacing.south()
crafttweaker.world.IFacing.west()
crafttweaker.world.IFacing.down()
crafttweaker.world.IFacing.up()


crafttweaker.world.IFacing.fromString(String name);
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