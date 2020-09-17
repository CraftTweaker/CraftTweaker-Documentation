# IClient

Interfejs klienta służy do dostarczania ogólnych informacji na temat klienta.  
Jest on dostępny tylko dla klientów, nie będą one działać z odwagą!

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (takie jak przesyłanie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj crafttweaker.api.IClient;`

## Gdzie znaleźć klasę klienta?

Klasa klienta jest symbolem zarejestrowanym globalnie, więc nie musisz niczego importować, możesz po prostu użyć słowa kluczowego `klienta`

## Co z tym zrobić?

`client.player` zwraca gracza używającego klienta jako [IPlayer](/Vanilla/Players/IPlayer/) obiektu.  
`klient` zwraca język, w którym klient działa jako ciąg.