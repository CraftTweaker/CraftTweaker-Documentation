# [PLACEHOLDER] IItemDestroyedBlock

Funkcja IItemDestroyedBlock może być dodana do elementu [](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) i będzie uruchamiana za każdym razem, gdy spróbujesz złamać blok z asymilowanym przedmiotem.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`zaimportuj mods.contenttweaker.IItemDestroyedBlock;`

## Parametry

IItemDestroyedBlock jest funkcją z następującymi parametrami:

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) stack → Przedmiot.
- [Świat](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) → Świat, który odbywa się w
- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) BlockState → Stan bloku, który jest wydobywany.
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pop → Gdzie to nastąpi?
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) obiekt → Kto / Kto kopie bloku?

Funkcja musi zwrócić wartość logiczną, to jest `prawda` jeśli proces blokBreaking zakończył się sukcesem, a `fałsz` jeśli jest poprawny.