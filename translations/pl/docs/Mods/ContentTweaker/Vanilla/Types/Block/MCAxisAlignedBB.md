# MCAxisAlignedBB

Wyrównany na osi MineCraft obiekt Boundary Box pozwala na zmianę granic [Block](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/) na dany kształt sześciokątny.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`zaimportuj mods.contenttweaker.AxisAlignedBB;`

## Wywołanie obiektu MCAxisAlignedBB

Możesz uzyskać taki obiekt za pomocą właściwości [Block's](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/) `axisAlignedBB` .  
Alternatywnie, możesz użyć tego pakietu, aby utworzyć nowy obiekt MCAxisAlignedBB:

```zenscript
AxisAlignedBB.create(podwójna minX, podwójna minY, podwójna minZ, podwójna maxX, podwójna maxY, podwójna maxZ);
```

Wszystkie parametry dla tej funkcji są dwukrotnie większe od 0 do 1!

## Właściwości ZenWłaściwości

Możesz uzyskać i ustawić każdą właściwość używając `getProperty()` lub `object.property`.

| Właściwość ZenProperty | Typ      |
| ---------------------- | -------- |
| minX                   | podwójne |
| minY                   | podwójne |
| minZ                   | podwójne |
| maxX                   | podwójne |
| maks.                  | podwójne |
| maks. Z                | podwójne |