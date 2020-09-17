# `ТагиИнгредиент`

`TagIngredient` - это реализация `IIngredient` , позволяющая использовать [`Tag`](/Mods/Boson/Tags/Tag/) в рецептах. You can only access this data from outside the [`tags` loader](/Mods/Boson/Loaders/Tags/). Для получения дополнительной информации относительно тегов и их получения обратитесь к [этой странице](/Mods/Boson/Tags/Concept/).

## Детали урока
Класс находится в пакете `net.thesilkminer.mc.boson.zen.tag` , в результате чего пакет `net.thesilkminer.mc.boson.zen.tag.TagIngredient` его полное имя для импорта.

## Создание нового экземпляра
См. [документацию обработчика скобок](/Mods/Boson/Tags/BracketHandler/).

## `Иингредиент`
Так как `TagIngredient` является `IIngredient`, он предоставляет доступ ко всем свойствам и методам интерфейса. Обратитесь к к [`IIngredient`странице документации](/Vanilla/Variable_Types/IIngredient/) для получения более подробной информации. Эта страница документации содержит только сведения о добавлениях и приютах, которые являются особенностями этого класса.

## Свойства
`TagIngredient` предоставляет доступ только для чтения дополнительного набора свойств, как указано в следующей таблице:

| Название свойства | Тип                                  | Описание                                                                        |
| ----------------- | ------------------------------------ | ------------------------------------------------------------------------------- |
| `tagName`         | [`Пробел имени`](/Mods/Boson/Names/) | Название, которое уникально идентифицирует тег, к которому относится ингредиент |

## Пример

```zenscript
val anyIngot = <tag-items:forge:ingots>;
val anyWool = <tag-items:minecraft:wool>;

recipes.addShaped("wool_infused_ingot", <contenttweaker:wool_infused_ingot>, [[anyIngot, anyWool], [anyWool, anyIngot]]);
```
