# IVector3d

Объект IVector3d &mdash; это вектор, который использует три числа с двойной точностью для направлений.  
У него также есть несколько методов и геттеров.

## Импорт класса

Может понадобиться [импортировать](/AdvancedFunctions/Import/) класс для избежания ошибок:  
`import crafttweaker.world.IVector3d`

## Создание нового объекта IVector3d

If you ever find yourself in the need of creating a new IVector3d object, you can use this method:

```zenscript
//crafttweaker.world.IVector3d.create(double x, double y, double z);
crafttweaker.world.IVector3d.create(0.0D, 0.0D, 0.0D);
```

## Геттеры

| Геттер     | Тип       |
| ---------- | --------- |
| х          | double    |
| y          | double    |
| z          | double    |
| normalized | IVector3d |

## Методы

- double dotProduct(IVector3d other);
- IVector3d crossProduct(IVector3d other);
- IVector3d subtract(IVector3d other);
- IVector3d subtractReverse(IVector3d other);
- IVector3d add(IVector3d other);
- double distanceTo(IVector3d other);
- IVector3d scale(double factor);