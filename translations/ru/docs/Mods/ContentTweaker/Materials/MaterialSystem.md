# Материал системы

MaterialSystem используется для создания новых или извлечения существующих материалов из ТТ.

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами, так что лучше быть безопасным чем извините и добавьте импорт.  
`импорт mods.contenttweaker.MaterialSystem;`

## [IPartType](/Mods/ContentTweaker/Materials/Parts/PartType/)

### Создать

```zenscript
createPartType(String название, IRegisterMaterialPart регистр MaterialPart)
```

Необходимые параметры:

- Название строки: Имя типа части → например "dense_gear"
- [IRegisterMaterialPart](/Mods/ContentTweaker/Materials/Materials/Functions/IRegisterMaterialPart/) регистр MaterialPart → Функция обработки материалов будет создана.

### Получить

```zenscript
getPartType(String название);
```

Необходимые параметры:

- Строка: Имя типа части → напр. "Передача" Для списка всех доступных типов частей проверьте [тип части страницы](/Mods/ContentTweaker/Materials/Parts/PartType/).

## [Иматерация](/Mods/ContentTweaker/Materials/Materials/Material/)

### Создать

В отличие от PartType, вы не можете напрямую создать материал, вместо этого вам нужно использовать MaterialBuilder. Проверьте [MaterialBuilder](/Mods/ContentTweaker/Materials/Materials/Material_Builder/) для получения информации о том, что именно делать с этим.

```zenscript
val MB MaterialSystem.getMaterialBuilder();
MB.setName("Urubuntium");
MB.setColor(0);
MB.setHasEffect(false);
var builtMaterial = MB.build();
```

### Получить

```zenscript
getMaterial(String name);
```

Необходимые параметры:

- Название строки: Название материала → например "Platinum"

## [IPart](/Mods/ContentTweaker/Materials/Parts/Part/)

### Создать

В отличие от PartType, вы не можете напрямую создать часть, вместо этого вам необходимо использовать партнерский проект. Проверьте [часть](/Mods/ContentTweaker/Materials/Parts/Part/) для информации о том, что именно с этим.

```zenscript
val PB = MaterialSystem.getPartBuilder();
```

### Получить

```zenscript
getPart(String название);
```

Необходимые параметры:

- Название строки: Имя партии

## [IPartDataPiece](/Mods/ContentTweaker/Materials/Parts/PartDataPiece/)

### Создать

    createPartDataPiece(String name, boolean required)
    

Необходимые параметры:

- Строка: Имя части данных
- boolean требуется: требуется ли часть данных?

## Зарегистрировать несколько частей материала

Несмотря на то, что вы также можете сделать это с помощью [собственного функционала](/Mods/ContentTweaker/Materials/Materials/Material/) , этот метод позволяет зарегистрировать [Части](/Mods/ContentTweaker/Materials/Parts/Part/) для данного материала

```zenscript
Реестр запчастей (материалы для вторичных материалов, названия строк [] частей);
```

Необходимые параметры:

- [Материал](/Mods/ContentTweaker/Materials/Materials/Material/) материал: Материал, который должен быть составлен из зарегистрированных частей
- Строка[] названий частей: названия частей, которые должны быть зарегистрированы → напр. ["передача", "ingot"]

## Получить уже зарегистрированные вещи:

Вы можете использовать эти методы для получения карты, используя строки как ключи и значения объекта:

| Название метода    | Возвращаемый тип                                                                               |
| ------------------ | ---------------------------------------------------------------------------------------------- |
| getMaterialParts() | [`Карта<String, IMaterialPart>`](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) |
| getMaterials()     | [`Карта<String, IMaterial>`](/Mods/ContentTweaker/Materials/Materials/Material/)         |
| getParts()         | [`Карта<String, IPart>`](/Mods/ContentTweaker/Materials/Parts/Part/)                     |
| getPartType()      | [`Карта<String, IPartType>`](/Mods/ContentTweaker/Materials/Parts/PartType/)             |

    import mods.contenttweaker.MaterialPart;
    
    val part = MaterialSystem.getMaterialPart("название"); //as MaterialPart
    
    val partMap = MaterialSystem.getMaterialPartsByRegex(".*"); //as MaterialPart[string]