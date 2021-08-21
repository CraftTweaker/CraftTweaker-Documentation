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

### Getting from Entities

`IFacing.DirectionFromEntityLiving(IBlockPos pos, IEntityLivingBase placer);`

The static method returns an IFacing from [IEntityLivingBase](Vanilla/Entities/IEntityLivingBase). The method is often used to determine the facing of some blocks when placed by players, like piston, observer, command block, etc. Unlike the `horizontalFacing` getter of `IEntity`, the method can return `UP` and `DOWN`. And it always returns the opposite value of the getter.