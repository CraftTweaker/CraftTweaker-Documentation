# Create Element
Custom Element Creation for Alchemistry

## Loader
This needs to be loaded with `#loader alchemistry`

## Methods
- **int atomicNumber** ID for new Element
- **String Name** New Elements Name
- **String Abbrebiation** New Elements Abbrebiation
- **int red** Element red shade, RGB
- **int green** Element green shade, RGB

-**int blue** Element blue shade, RGB

## Creation
```zenscript
mods.alchemistry.Util.createElement(int atomicNumber, String name, String abbreviation, int red, int green, int blue);
mods.alchemistry.Util.createElement(150,"vibranium","Vrb", 70, 90, 250);
mods.alchemistry.Util.createElement(151,"unobtanium","Uno",30,54,69);
```
