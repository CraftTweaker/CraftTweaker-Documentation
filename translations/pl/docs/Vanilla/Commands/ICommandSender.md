# ICommandSender

Interfejs ICommandSender jest używany jako baza każdej jednostki, a także inne typy w CraftTweaker.  
Każdy [IEntity](/Vanilla/Entities/IEntity/) i [IPlayer](/Vanilla/Players/IPlayer/) to implementuje!

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (takie jak przesyłanie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj crafttweaker.command.ICommandSender;`

## ZenGetter

| ZenGetter          | Typ zwrotu                             |
| ------------------ | -------------------------------------- |
| nazwa wyświetlacza | ciąg znaków                            |
| pozycja            | [IBlockPos](/Vanilla/World/IBlockPos/) |
| świat              | [IWorld](/Vanilla/World/IWorld/)       |
| serwer             | [IServer](/Vanilla/Game/IServer/)      |

## Metody ZenMethods

#### Wyślij wiadomość

Zajmuje ciąg znaków. Zwraca unieważnienie (nie ma znaczenia).

```zenscript
sender.sendMessage(tekst ciągu);
```