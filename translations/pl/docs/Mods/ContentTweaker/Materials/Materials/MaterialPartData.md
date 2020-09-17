# MaterialPartData

Dane części materiałowej to dane, które można dodać do [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) , aby nadać mu więcej właściwości.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`importuj mods.contenttweaker.MaterialPartData;`

## Pobieranie takiego obiektu

Możesz otrzymać obiekt MaterialPartData używając metody `getData()` na obiekcie [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/).

## Metody

Wszystko, co możesz zrobić z MaterialPartData to dodać więcej danych i pobrać przechowywane dane! Robisz to tak:

```zenscript
MPD.addDataValue(Nazwa ciągu, wartość ciągu);
MPD.getIntValue(Nazwa ciągu, int defaultValue);
MPD.getStringValue(Nazwa ciągu, domyślna wartość ciągu);
```

Teraz, co wpisać jako nazwę lub wartość?  
Cóż, zależy to od typu części narzędzia, którego używasz.  
Poniżej znajdziesz listę podstawowych typów części CoT:

<details><summary>Przedmioty</summary> 

<table>
  <th>
    Nazwisko
  </th>
  
  <th>
    Wartość
  </th>
  
  <th>
    Wymagane?
  </th></tr> 
  
  <tr>
    <td>
      oparzenie
    </td>
    
    <td>
      "Liczba całkowita" (np. "100")
    </td>
    
    <td>
      Nie
    </td>
  </tr>
</table></details>

<details><summary>Zbroja</summary> 

<table>
  <th>
    Nazwisko
  </th>
  
  <th>
    Wartość
  </th>
  
  <th>
    Wymagane?
  </th></tr> 
  
  <tr>
    <td>
      trwałość
    </td>
    
    <td>
      "Liczba całkowita" (np. "10")
    </td>
    
    <td>
      Nie
    </td>
  </tr>
  
  <tr>
    <td>
      zdolność zaklęcia
    </td>
    
    <td>
      "Liczba całkowita" (np. "10")
    </td>
    
    <td>
      Nie
    </td>
  </tr>
  
  <tr>
    <td>
      redukcja
    </td>
    
    <td>
      Cztery "Integers" (np. "2, 5, 6, 2") <br />Reprezentujące obuwie, Legginsy, Klatki, Nagłówki
    </td>
    
    <td>
      Nie
    </td>
  </tr>
  
  <tr>
    <td>
      twardość
    </td>
    
    <td>
      „pływak” (np. „2.4”)
    </td>
    
    <td>
      Nie
    </td>
  </tr>
</table></details>

<details><summary>Blok</summary> 

| Nazwisko             | Wartość                       | Wymagane? |
| -------------------- | ----------------------------- | --------- |
| twardość             | "Liczba całkowita" (np. "3")  | Nie       |
| odporność            | "Liczba całkowita" (np. "15") | Nie       |
| poziom zbierania     | "Liczba całkowita" (np. "1")  | Nie       |
| Narzędzie zbierające | "Narzędzie" (np. "Kilof ")    | Nie       |</details>

<details><summary>Płyn</summary> 

| Nazwisko    | Wartość                         | Wymagane? |
| ----------- | ------------------------------- | --------- |
| temperatura | "Liczba całkowita" (np. "300")  | Nie       |
| gęstość     | "Liczba całkowita" (np. "1000") | Nie       |
| luminancja  | "Liczba całkowita" (np. "0")    | Nie       |
| lepkość     | "Liczba całkowita" (np. "100")  | Nie       |
| parowanie   | A "boolean" (e.g. "true")       | Nie       |</details>

<details><summary>Ruda</summary> 

| Nazwisko             | Wartość                                                             | Wymagane? |
| -------------------- | ------------------------------------------------------------------- | --------- |
| krople               | "Lista przedmiotów" (np. "minecraft:redstone,minecraft:gold_ingot") | Nie       |
| warianty             | "Lista bloków" (np. "minecraft:stone,minecraft:end_stone")          | Nie       |
| twardość             | "Lista liczb całkowitych" (np. "3,3")                               | Nie       |
| odporność            | "Lista liczb całkowitych" (np. "15,15")                             | Nie       |
| poziom zbierania     | "Lista liczb całkowitych" (np. "1,1")                               | Nie       |
| Narzędzie zbierające | "Lista narzędzi" (np. "kilof                                        | Nie       |</details>

<details><summary>Minecart</summary> 

| Nazwisko    | Wartość              | Wymagane? |
| ----------- | -------------------- | --------- |
| maxSpeed    | „pływak” (np. „1.0”) | Nie       |
| przeciągnij | „pływak” (np. „1.0”) | Nie       |
| riddenDrag  | „pływak” (np. „1.0”) | Nie       |</details>

## Przykład

```zenscript
import mods.contenttweaker.MaterialSystem;

val oreData = MaterialSystem.getMaterialBuilder().setName("Lawrencium").setColor(15426660).build().registerPart("ore").getData();
oreData.addDataValue("drops", "minecraft:redstone,minecraft:gold_ingot");
oreData.addDataValue("variants", "minecraft:stone,minecraft:end_stone");
oreData. ddDataValue("hardness", "3,3");
oreData.addDataValue("resistance", "15,15");
oreData.addDataValue("harvestLevel", "1,1");
oreData.addDataValue("harvestTool", "kilkaxe,shovel");

oreData.addDataValue("test", 1);
print(oreData.getIntValue("test", -1));
```