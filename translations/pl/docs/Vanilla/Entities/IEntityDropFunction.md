# IEntityDropFunction

IEntityDropFunction jest wywoływany za każdym razem, gdy powiązana jednostka jest zabijana. Pozostaw to do swojej wyobraźni, co możesz z tym zrobić:

## Importowanie paku

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`zaimportuj crafttweaker.entity.IEntityDropFunation;`

## Parametry

IEntityDropFunction jest funkcją o następujących parametrach:

- [IEntity](/Vanilla/Entities/IEntity/) obiekt → Jednostka, która właśnie umarła.
- [IDamageSource](/Vanilla/Damage/IDamageSource/) dmgSourve → Źródło śmierci podatnika.

Funkcja musi zwrócić [IItemStack](/Vanilla/Items/IItemStack/)lub `null`.