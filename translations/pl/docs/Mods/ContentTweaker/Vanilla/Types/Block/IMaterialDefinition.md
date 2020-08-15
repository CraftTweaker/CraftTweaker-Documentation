# Definicja IMateriałowa

Obiekt IMaterialDefinition reprezentuje materialną definicję w grze. Jeśli chcesz utworzyć nowy blok, potrzebna jest definicja materiału.

# Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`zaimportuj mods.contenttweaker.BlockMaterial;`

## Wywołanie obiektu IMaterialDefinition

Możesz uzyskać taki obiekt za pomocą [Handler nawiasów materiałowych](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Block_Material/):  
`<blockmaterial:wood>`

## ZenGetters/ZenMethods bez parametrów

| ZenGetter              | Metoda ZenMethod    | Typ zwrotu                                                               |
| ---------------------- | ------------------- | ------------------------------------------------------------------------ |
| jasny blok             | blocksLight()       | bool                                                                     |
| blocksMovement         | blocksMovement()    | bool                                                                     |
| płonąca                | getCanBurn()        | bool                                                                     |
| mobilityFlag           | getMobilityFlag()   | [Reakcja pchana](/Mods/ContentTweaker/Vanilla/Types/Block/PushReaction/) |
| ciecz                  | isLiquid()          | bool                                                                     |
| nieprzezroczysty       | izOpaque()          | bool                                                                     |
| wymienne               | można wymienić()    | bool                                                                     |
| solid                  | isSolid()           | bool                                                                     |
| Narzędzie Nie Wymagane | isToolNotRequired() | bool                                                                     |

## Porównaj dwa BlockMaterials

Możesz użyć operatora `==` , aby sprawdzić, czy dwie definicje materiałów są takie same

```zenscript
if(materiałA == materiałB)
    druk ("sukces!");
```