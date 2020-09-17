# Reprezentacja danych Cecha

Reprezentacja danych Cechy reprezentuje dane o Cechach Konstrukcyjnych Tinkers i jest obiektBound.  
Możesz uzyskać taki obiekt z istniejącego obiektu [Cecha](/Mods/ContentTweaker/Tinkers_Construct/Trait/) poprzez dostarczenie metody IItemStack do `getData`.

## Importowanie klasy

Może być wymagane zaimportowanie klasy, jeśli napotkasz jakiekolwiek problemy (np. rzucenie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj mods.contenttweaker.tconstruct.TraitDataReprezentacja`

## ZenGetter i ZenSetter

| Nazwisko    | ZenGetter | ZenSetter | Typ         |
| ----------- | --------- | --------- | ----------- |
| kolor       | ✔         | ✔         | odcień      |
| bieżący     | ✔         | ✔         | odcień      |
| ekstraInfo  | ✔         | ✔         | ciąg znaków |
| identifier  | ✔         | ✔         | ciąg znaków |
| poziom      | ✔         | ✔         | odcień      |
| maks.       | ✔         | ✔         | odcień      |
| informacje  | ✔         |           | ciąg znaków |
| kolor ciągu | ✔         |           | ciąg znaków |

## Metody ZenMethods

```zenscript
//To samo co myTraitData.info;
myTraitData.calcInfo();

//Czy jest taki sam jak myTraitData.colorString;
myTraitData.getColorString();
```