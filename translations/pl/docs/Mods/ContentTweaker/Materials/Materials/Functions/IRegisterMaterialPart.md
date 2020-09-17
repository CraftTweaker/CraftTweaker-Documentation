# IRegisterMaterialPart

Funkcja IRegisterMaterialPart jest fucntion używany do rejestracji [Material Części](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) dodanych przy użyciu niestandardowego [PartType](/Mods/ContentTweaker/Materials/Parts/PartType/).

## Importowanie pakietu

Jeśli kiedykolwiek masz wrażenie, że musisz zaimportować klasę tej funkcji, przejdziesz:

```zenscript
importuj mods.contenttweaker.RegisterMaterialPart;
```

## Składnia

Mamy funkcję pustą, która przyjmuje [część materiałową](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) jako wejście.  
To jest część materiałowa, która powinna być zarejestrowana.  
W tym momencie możesz na przykład wywołać [Vanilla Factory](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/) , ale jak postępować w tej sprawie to naprawdę zależy od Państwa.

```zenscript
function(materialPart) {
    //DoStuff
    zwraca;
}
```