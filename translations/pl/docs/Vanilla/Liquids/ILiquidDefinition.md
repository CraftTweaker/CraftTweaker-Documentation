# Definicja płynności

ILiquidDefinition definiuje ciecz [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) składa się z: W przeciwieństwie do ILiquidStack, ten interfejs pozwala na zmianę właściwości płynu.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (takie jak przesyłanie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj crafttweaker.płyn.ILiquidDefiniation;`

## Metody

Co więc możemy z tym zrobić?

### Mnożenie

Mnożenie ILiquidDefinition skutkuje nowym [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) z określoną ilością w milibucketach

```zenscript
val def = <liquid:lava>.definiation;

//zasadniczo ten sam
walowy bucketOfLava = def * 1000;
val bucketOfLava1 = <liquid:lava> * 1000;
```

## Pobierz i ustaw właściwości płynu

Jako że ILiquidDefinition reprezentuje ciecz, możesz dostać, ale także ustawić jego właściwości. Więcej informacji znajduje się w poniższej tabeli.

Podobnie jak w powyższej tabeli, ustawiono Zengetter/Setter na końcu ILiquidDefinition. Niektóre ZenGetters nie mają zgodnie z ZenSetter, musisz polegać na innych sposobach, aby zmienić te właściwości.

Zachowaj ostrożność podczas stosowania Zensetterów, zmieniają one jedynie rejestr płynów i nie mają wpływu na płyny na świecie. Prawdopodobnie będziesz potrzebował ustawienia temperatury tylko podczas wysyłania wiadomości z [Wytapiania Paliw Tinkers](/Mods/Modtweaker/TConstruct/Fuel/).

```zenscript
Definicja walna = <liquid:lava>.definiation;

//Zengetter: luminosity
lavaL = definicja.luminosity;

//Zensetter: luminosity
definicja.luminosity = 0;
```

| Zengetter          | Zensetter   | Co to jest?                                      | Zwróć/Ustaw typ |
| ------------------ | ----------- | ------------------------------------------------ | --------------- |
| Nazwa              |             | Zwraca niezlokalizowaną nazwę płynu              | ciąg znaków     |
| nazwa wyświetlacza |             | Zwraca zlokalizowaną nazwę płynu                 | ciąg znaków     |
| luminancja         | luminancja  | Zwrot / ustawia luminescencję badanej cieczy     | odcień          |
| gęstość            | gęstość     | Zwrot / ustawia gęstość wskazanej cieczy         | odcień          |
| temperatura        | temperatura | Zwraca/ustawia temperaturę podanej cieczy        | odcień          |
| lepkość            | lepkość     | Zwraca/ustawia lepkość podanej cieczy            | odcień          |
| gazowe             | gazowe      | Zwrot / ustala, czy wspomniana ciecz jest gazowa | boolean         |