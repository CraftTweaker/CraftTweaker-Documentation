# Определение типа ISoundType

Объект ISoundTypeDefinition представляет звук (тип) в игре. Звуковой тип почти всегда связан с одним или несколькими блоками.

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами, так что лучше быть безопасным чем извините и добавьте импорт.  
`импорт mods.contenttweaker.SoundType;`

## Вызов объекта ISoundTypeDefinition

Такой объект можно получить с помощью [Sound Type Bracket Handler](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Sound_Type/):  
`<soundtype:wood>`

## Методы ZenMethods без параметров

| Метод           | Возвращаемый тип                                                                        | Определение                                                      |
| --------------- | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| getVolume()     | float                                                                                   | Возвращает объем типа                                            |
| getPitch()      | float                                                                                   | Возвращает высоту типа                                           |
| getBreakSound() | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) | Возвращает звук, возникающий при разрыве связанного блока        |
| getStepSound()  | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) | Возвращает звук, возникающий при нажатии на соответствующий блок |
| getPlaceSound() | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) | Возвращает звук, возникающий при размещении связанного блока     |
| getHitSound()   | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) | Возвращает звук, возникающий при попадании связанного блока      |
| getFallSound()  | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) | Возвращает звук, возникающий при падении связанного блока        |