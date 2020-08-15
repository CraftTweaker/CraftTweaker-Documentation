# ModLoaderPreprocessor

ModLoaded Preprocessor wykonuje tylko skrypt, jeśli jakiś mod jest obecny.

## Połącz

Nazywasz modloaded Preprocessor dodając `#modloaded modID` do pliku skryptu, z `modID` jest modId który chcesz sprawdzić:  
Przykład: `#modloaded minecraft`

Możesz również podać wiele modID:  
`#modloaded minecraft tconstruct` zostanie wykonany tylko wtedy, gdy minecraft AND tconstruct zostanie załadowany.

Możesz również odwrócić warunek modyfikacji tak, aby mod był załadowany tylko wtedy, gdy mod nie jest załadowany: `#modloaded ! konstrukcja minecraft` zostanie wykonana tylko wtedy, gdy minecraft jest obecny, a konstrukcja NIE jest obecna

## Co to robi

Jeśli dodałeś ten preprocesor do skryptu, będzie on wykonywany tylko wtedy, gdy jest podany identyfikator modID, Innymi słowy, jeśli są załadowane mody przestrzegania.