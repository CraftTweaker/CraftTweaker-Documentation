# IFacing

Интерфейс IFacing позволяет получать возможные направление для [IBlockPos](/Vanilla/World/IBlockPos/).

## Импорт пакета

Может потребоваться импортировать пакет, если вы обнаруживаете какие-либо проблемы (вроде приведения типа [массива](/AdvancedFunctions/Arrays_and_Loops/)), поэтому в качестве меры предосторожности лучше добавить импорт:  
`import crafttweaker.world.IFacing;`

## Перечисление

Интерфейс "Facing" имеет 6 статических методов, которые возвращают указанное направление.  
У него также есть еще одна строка, которая принимает направление ввода строки (например, `"НОРМ"`)

```zenscript
crafttweaker.world.IFacing.north()
crafttweaker.world.IFacing.east()
crafttweaker.world.IFacing.south()
crafttweaker.world.IFacing.west()
crafttweaker.world.IFacing.down()
crafttweaker.world.IFacing.up()


crafttweaker.world.IFacing.fromString.(String name);
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