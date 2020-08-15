# Позиция 3f

Позиция в Minecraft состоит из 3 значений: x, y и z.  
Объект Position3f хранит позицию, используя эти три значения.

## Импорт пакета

Возможно, вам потребуется [импортировать](/AdvancedFunctions/Import/) пакет, если вы столкнетесь с какими-либо проблемами (например, использование [массива](/AdvancedFunctions/Arrays_and_Loops/)), так что лучше быть безопасным, чем извините и добавить импорт.  
`импортировать crafttweaker.util.Position3f;`

## Получение объекта Position3f

Вы можете получить такой объект с помощью:

- `позиция` ZenGetter на объекте [IPlayer](/Vanilla/Players/IPlayer/)
- Конструктор Position3f ниже
- Позиция [IBlockPos](/Vanilla/World/IBlockPos/) позиция3f.

## Конструктор с позицией 3f

Вы можете создать объект Position3f самостоятельно, используя следующий метод:

```zenscript
crafttweaker.util.Position3f.create(float x, float y, float z);
```

Первый метод позволяет создать позицию по заданным координатам.

## ZenGetters и ZenSetters

| Геттер | ZenSetter | Описание                      |
| ------ | --------- | ----------------------------- |
| х      | х         | Возвращает значение позиции x |
| y      | у         | Возвращает значение y позиции |
| z      | z         | Возвращает значение z позиции |

## Разливка как IBlockPos

Вы можете использовать два способа для использования объекта Position3f в [IBlockPos](/Vanilla/World/IBlockPos/) объект: Помните, для передачи вам нужно [импортировать](/AdvancedFunctions/Import/) тип, на который вы хотите записать, если вы не используете полное имя.

```zenscript
poster.asBlockPos();
posThree as IBlockPos;
```