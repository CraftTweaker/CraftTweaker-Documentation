# PartDataPiece

Часть данных может быть добавлена в [часть типа](/Mods/ContentTweaker/Materials/Parts/PartType/) , чтобы иметь возможность добавить некоторые [MaterialPartData](/Mods/ContentTweaker/Materials/Materials/MaterialPartData/) в [MaterialParts](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) созданные с [частями](/Mods/ContentTweaker/Materials/Parts/Part/) , которые являются этой [PartType](/Mods/ContentTweaker/Materials/Parts/PartType/).

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами, так что лучше быть безопасным чем извините и добавьте импорт.  
`импорт mods.contenttweaker.PartDataPiece;`

## Получение такого объекта

Вы можете получить список [частей](/Mods/ContentTweaker/Materials/Parts/Part/) DataPieces, используя `getData()` на [части](/Mods/ContentTweaker/Materials/Parts/Part/).

Кроме того, вы можете зарегистрировать новую часть DataPiece, используя [MaterialSystem](/Mods/ContentTweaker/Materials/MaterialSystem/):

```zenscript
mods.contenttweaker.MaterialSystem.createPartDataPiece(String name, boolean booled)
```

Параметры:

- Название строки: Имя новой части
- boolean требуется: требуется ли присутствие PartDataPiece на [MaterialParts](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) , чтобы зарегистрировать его?

## ZenMethods

Вы можете получить следующую информацию от PartType:

| ZenMethod    | Возвращаемый тип |
| ------------ | ---------------- |
| getName()    | string           |
| isRequired() | string           |