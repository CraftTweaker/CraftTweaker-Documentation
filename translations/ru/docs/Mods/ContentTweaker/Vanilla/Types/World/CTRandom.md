# CTRandom

Объект CTRandom доступен только из объектов CoT [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) и позволяет получить доступ к генератору случайных чисел в мире.

## Импорт класса

Если вы когда-нибудь хотите импортировать класс, вы идете:

```zenscript
import mods.contenttweaker.Random;
```

## ZenMethods

Единственный доступный метод - для случайных значений либо как булевского, либо int.  
Для последней также необходимо указать верхнюю границу (верхняя граница является исключительной).

```zenscript
случайный Obj.nextBoolean();
randomObj.nextInt(int upperBound);
```