# Материалы части данных

Материальные данные - это данные, которые могут быть добавлены в [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) , чтобы дать им больше свойств.

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами, так что лучше быть безопасным чем извините и добавьте импорт.  
`импорт mods.contenttweaker.MaterialPartData;`

## Получение такого объекта

Вы можете получить объект MaterialPartData используя метод `getData()` на объекте [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/).

## Методы

Все что вы можете сделать с MaterialPartData - добавить больше данных и получить сохраненные данные! Вы делаете это так:

```zenscript
MPD.addDataValue(String name, String value);
MPD.getIntValue(String name, int defaultValue);
MPD.getStringValue(String name, String defaultValue);
```

Теперь, что поместить как имя или значение?  
Ну, это зависит от типа компонента используемого инструмента.  
Ниже вы найдете список основных типов частей:

<details><summary>Предметы</summary> 

<table>
  <th>
    Название
  </th>
  
  <th>
    Параметры
  </th>
  
  <th>
    Обязательно?
  </th></tr> 
  
  <tr>
    <td>
      ожог
    </td>
    
    <td>
      "Целое число" (например "100")
    </td>
    
    <td>
      Нет
    </td>
  </tr>
</table></details>

<details><summary>Броня</summary> 

<table>
  <th>
    Название
  </th>
  
  <th>
    Параметры
  </th>
  
  <th>
    Обязательно?
  </th></tr> 
  
  <tr>
    <td>
      прочность
    </td>
    
    <td>
      "Целое число" (например "10")
    </td>
    
    <td>
      Нет
    </td>
  </tr>
  
  <tr>
    <td>
      чарнируемость
    </td>
    
    <td>
      "Целое число" (например "10")
    </td>
    
    <td>
      Нет
    </td>
  </tr>
  
  <tr>
    <td>
      сокращение
    </td>
    
    <td>
      Четыре "Целые числа" (например "2, 5, 6, 2") <br />Представление обуви, ногтей, нагрудников, головы
    </td>
    
    <td>
      Нет
    </td>
  </tr>
  
  <tr>
    <td>
      выносливость
    </td>
    
    <td>
      "float" (например "2.4")
    </td>
    
    <td>
      Нет
    </td>
  </tr>
</table></details>

<details><summary>Блок</summary> 

| Название             | Параметры                        | Обязательно? |
| -------------------- | -------------------------------- | ------------ |
| твердость            | "Integer" (например "3")         | Нет          |
| сопротивление        | "Integer" (например "15")        | Нет          |
| Уровень сбора урожая | "Целое число" (например "1")     | Нет          |
| собрать урожай       | "Инструмент" (например, "кирка") | Нет          |</details>

<details><summary>Жидкость</summary> 

| Название    | Параметры                       | Обязательно? |
| ----------- | ------------------------------- | ------------ |
| температура | "Integer" (например "300")      | Нет          |
| плотность   | "Целое число" (например "1000") | Нет          |
| яркость     | "Целое число" (например "0")    | Нет          |
| вязкость    | "Целое число" (например "100")  | Нет          |
| испарение   | A "boolean" (e.g. "true")       | Нет          |</details>

<details><summary>Руда</summary> 

| Название             | Параметры                                                        | Обязательно? |
| -------------------- | ---------------------------------------------------------------- | ------------ |
| капли                | "itemList" (например "minecraft:redstone,minecraft:gold_ingot")  | Нет          |
| варианты             | "Список блоков" (например "minecraft:stone,minecraft:end_stone") | Нет          |
| твердость            | "Целочисленный список" (например, "3,3")                         | Нет          |
| сопротивление        | "Целочисленный список" (например, "15,15")                       | Нет          |
| Уровень сбора урожая | "Целочисленный список" (например, "1,1")                         | Нет          |
| собрать урожай       | "Список инструментов" (например, "кирка", кирка")                | Нет          |</details>

<details><summary>Minecart</summary> 

| Название       | Параметры                | Обязательно? |
| -------------- | ------------------------ | ------------ |
| Макс. Скорость | "float" (например "1.0") | Нет          |
| перетащить     | "float" (например "1.0") | Нет          |
| riddenDrag     | "float" (например "1.0") | Нет          |</details>

## Пример

```zenscript
import mods.contenttweaker.MaterialSystem;

val oreData = MaterialSystem.getMaterialBuilder().setName("Lawrencium").setColor(15426660).build().registerPart("ore").getData();
oreDataValue("drops", "minecraft:redstone,minecraft:gold_ingot");
oreDataValue("variants", "minecraft:stone");
oreData. ddDataValue("жесткость", "3,3");
oreDataValue("сопротивление", "15,15");
oreDataValue("Уровень сбора", "1,1");
oreData.addDataValue("сборочный инструмента", "pickaxe,shovel");

oreData.addDataValue("test", 1);
print(oreData.getIntValue("test", -1));
```